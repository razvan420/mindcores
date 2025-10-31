'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact-action'
import { Button } from '@/components/ui/button'
import { MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Locale } from '@/lib/i18n'

// Translation interface
interface ContactFormTranslations {
  fullName: string
  fullNamePlaceholder: string
  email: string
  emailPlaceholder: string
  phone: string
  phonePlaceholder: string
  service: string
  servicePlaceholder: string
  serviceOptions: {
    individual: string
    couples: string
    group: string
    assessment: string
    other: string
  }
  message: string
  messagePlaceholder: string
  privacy: string
  submit: string
  responseNote: string
  required: string
  sending?: string
  successMessage?: string
  errorMessage?: string
}

function SubmitButton({ translations }: { translations: ContactFormTranslations }) {
  const { pending } = useFormStatus()
  
  return (
    <Button 
      type="submit" 
      size="lg" 
      className="w-full bg-primary text-primary-foreground"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
          {translations.sending || 'Sending...'}
        </>
      ) : (
        <>
          <MessageSquare className="h-5 w-5 mr-2" />
          {translations.submit}
        </>
      )}
    </Button>
  )
}

const initialState: ContactFormState = {}

interface ContactFormProps {
  translations: ContactFormTranslations
  locale: Locale
}

export function ContactForm({ translations, locale }: ContactFormProps) {
  const [state, formAction] = useFormState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
      // Optional: Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [state.success])

  // Get localized success/error messages
  const getSuccessMessage = () => {
    if (locale === 'de') return 'Nachricht erfolgreich gesendet! Wir werden Ihre Anfrage innerhalb von 24-48 Stunden beantworten.'
    if (locale === 'ro') return 'Mesaj trimis cu succes! Vom răspunde solicitării tale în 24-48 ore.'
    return 'Message sent successfully! We will respond to your inquiry within 24-48 hours.'
  }

  const getErrorMessage = () => {
    if (locale === 'de') return 'Nachricht konnte nicht gesendet werden'
    if (locale === 'ro') return 'Mesajul nu a putut fi trimis'
    return 'Failed to send message'
  }

  const getSendingText = () => {
    if (locale === 'de') return 'Wird gesendet...'
    if (locale === 'ro') return 'Se trimite...'
    return 'Sending...'
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {/* Success Message */}
      {state.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-green-900">
              {locale === 'de' && 'Erfolgreich gesendet!'}
              {locale === 'ro' && 'Trimis cu succes!'}
              {locale === 'en' && 'Success!'}
            </p>
            <p className="text-sm text-green-700 mt-1">{getSuccessMessage()}</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {state.errors?._form && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-900">{getErrorMessage()}</p>
            <p className="text-sm text-red-700 mt-1">{state.errors._form.join(', ')}</p>
          </div>
        </div>
      )}

      {/* Hidden locale field for server action */}
      <input type="hidden" name="locale" value={locale} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {translations.fullName} {translations.required}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={translations.fullNamePlaceholder}
        />
        {state.errors?.name && (
          <p className="text-sm text-red-600 mt-1">{state.errors.name.join(', ')}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {translations.email} {translations.required}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={translations.emailPlaceholder}
        />
        {state.errors?.email && (
          <p className="text-sm text-red-600 mt-1">{state.errors.email.join(', ')}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {translations.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={translations.phonePlaceholder}
        />
        {state.errors?.phone && (
          <p className="text-sm text-red-600 mt-1">{state.errors.phone.join(', ')}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          {translations.service}
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{translations.servicePlaceholder}</option>
          <option value="individual">{translations.serviceOptions.individual}</option>
          <option value="couples">{translations.serviceOptions.couples}</option>
          <option value="group">{translations.serviceOptions.group}</option>
          <option value="assessment">{translations.serviceOptions.assessment}</option>
          <option value="other">{translations.serviceOptions.other}</option>
        </select>
        {state.errors?.service && (
          <p className="text-sm text-red-600 mt-1">{state.errors.service.join(', ')}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {translations.message} {translations.required}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder={translations.messagePlaceholder}
        />
        {state.errors?.message && (
          <p className="text-sm text-red-600 mt-1">{state.errors.message.join(', ')}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input 
          type="checkbox" 
          id="privacy" 
          name="privacy" 
          required 
          className="mt-1"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          {translations.privacy}
        </label>
      </div>
      {state.errors?.privacy && (
        <p className="text-sm text-red-600">{state.errors.privacy.join(', ')}</p>
      )}

      <SubmitButton translations={{ ...translations, sending: getSendingText() }} />

      <p className="text-sm text-muted-foreground text-center">
        {translations.responseNote}
      </p>
    </form>
  )
}