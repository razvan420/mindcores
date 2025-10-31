'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  privacy: z.literal('on', {
    errorMap: () => ({ message: 'You must accept the privacy policy' })
  }),
  locale: z.enum(['en', 'de', 'ro']).optional()
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    service?: string[]
    message?: string[]
    privacy?: string[]
    _form?: string[]
  }
}

// Get translated field labels for email
function getFieldLabels(locale: string = 'en') {
  const labels = {
    en: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      service: 'Service of Interest',
      message: 'Message',
      header: 'New Contact Form Submission',
      subtitle: 'Someone has reached out through your website',
      footer: 'This email was sent from your website contact form',
      services: {
        individual: 'Individual Therapy',
        couples: 'Couples Therapy',
        group: 'Group Programs',
        assessment: 'Psychological Assessment',
        other: 'Other'
      }
    },
    de: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      service: 'Interessierte Dienstleistung',
      message: 'Nachricht',
      header: 'Neue Kontaktformular-Einreichung',
      subtitle: 'Jemand hat Sie über Ihre Website kontaktiert',
      footer: 'Diese E-Mail wurde über Ihr Website-Kontaktformular gesendet',
      services: {
        individual: 'Einzeltherapie',
        couples: 'Paartherapie',
        group: 'Gruppenprogramme',
        assessment: 'Psychologische Bewertung',
        other: 'Sonstiges'
      }
    },
    ro: {
      name: 'Nume',
      email: 'Email',
      phone: 'Telefon',
      service: 'Serviciu de Interes',
      message: 'Mesaj',
      header: 'Mesaj Nou din Formularul de Contact',
      subtitle: 'Cineva te-a contactat prin site-ul tău web',
      footer: 'Acest email a fost trimis din formularul de contact al site-ului tău',
      services: {
        individual: 'Terapie Individuală',
        couples: 'Terapie de Cuplu',
        group: 'Programe de Grup',
        assessment: 'Evaluare Psihologică',
        other: 'Altele'
      }
    }
  }
  
  return labels[locale as keyof typeof labels] || labels.en
}

// Create reusable transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Optional: Add these for better reliability
    pool: true, // Use pooled connections
    maxConnections: 5,
    maxMessages: 100,
  })
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Parse and validate form data
  const validationResult = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
    privacy: formData.get('privacy'),
    locale: formData.get('locale')
  })

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors
    }
  }

  const { name, email, phone, service, message, locale } = validationResult.data
  const labels = getFieldLabels(locale)

  // Get translated service name
  const serviceLabel = service && labels.services[service as keyof typeof labels.services] 
    ? labels.services[service as keyof typeof labels.services] 
    : service

  try {
    // Create transporter
    const transporter = createTransporter()

    // Verify connection configuration
    await transporter.verify()

    // Email to you (admin)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #4b5563; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; word-wrap: break-word; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .locale-badge { 
              display: inline-block;
              background: rgba(255,255,255,0.2);
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 12px;
              margin-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">${labels.header}</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">${labels.subtitle}</p>
              ${locale ? `<span class="locale-badge">Language: ${locale.toUpperCase()}</span>` : ''}
            </div>
            <div class="content">
              <div class="field">
                <span class="label">${labels.name}:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">${labels.email}:</span>
                <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <span class="label">${labels.phone}:</span>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              ${service ? `
              <div class="field">
                <span class="label">${labels.service}:</span>
                <div class="value">${serviceLabel}</div>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">${labels.message}:</span>
                <div class="value">${message.replace(/\n/g, '<br>').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
              </div>
            </div>
            <div class="footer">
              <p>${labels.footer}</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to admin
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'Contact Form'}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@ralucatocoian.com',
      replyTo: `"${name}" <${email}>`, // User's email for easy reply
      subject: `${labels.header} - ${name}`,
      html: adminEmailHtml,
      text: `
        ${labels.header}
        
        ${labels.name}: ${name}
        ${labels.email}: ${email}
        ${phone ? `${labels.phone}: ${phone}` : ''}
        ${service ? `${labels.service}: ${serviceLabel}` : ''}
        
        ${labels.message}:
        ${message}
      `
    })

    // Close the transporter
    transporter.close()

    return {
      success: true,
      message: 'Thank you for your message! We will respond within 24-48 hours.'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    
    // More detailed error logging for debugging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      })
    }
    
    return {
      success: false,
      errors: {
        _form: ['Failed to send message. Please try again or contact us directly.']
      }
    }
  }
}