"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [disordersOpen, setDisordersOpen] = useState(false)
  const [therapiesOpen, setTherapiesOpen] = useState(false)

  const disorders = [
    { name: "Anxiety", href: "/disorders/anxiety" },
    { name: "Depression", href: "/disorders/depression" },
    { name: "Trauma & PTSD", href: "/disorders/trauma-ptsd" },
    { name: "Stress", href: "/disorders/stress" },
    { name: "Relationships", href: "/disorders/relationships" },
    { name: "Perinatal Mood Disorders", href: "/disorders/perinatal-mood" },
    { name: "Self-Esteem", href: "/disorders/self-esteem" },
    { name: "Grief & Loss", href: "/disorders/grief-loss" },
    { name: "Addiction", href: "/disorders/addiction" },
    { name: "ADHD", href: "/disorders/adhd" },
    { name: "Personality Disorders", href: "/disorders/personality-disorders" },
    { name: "Sexual Dysfunctions", href: "/disorders/sexual-dysfunctions" },
    { name: "Eating Disorders", href: "/disorders/eating-disorders" },
    { name: "Bipolar Disorder", href: "/disorders/bipolar" },
    { name: "Men's Mental Health", href: "/disorders/mens-mental-health" },
    { name: "Attachment Disorder", href: "/disorders/attachment-disorder" },
  ]

  const therapies = [
    { name: "CBT", href: "/therapies/cbt" },
    { name: "DBT", href: "/therapies/dbt" },
    { name: "ACT", href: "/therapies/act" },
    { name: "Schema Therapy", href: "/therapies/schema-therapy" },
    { name: "EMDR", href: "/therapies/emdr" },
    { name: "Mindfulness", href: "/therapies/mindfulness" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-semibold text-foreground">Raluca Diana Tocoian</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>

            {/* Disorders Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Disorders
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 max-h-96 overflow-y-auto">
                  {disorders.map((disorder) => (
                    <Link
                      key={disorder.href}
                      href={disorder.href}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {disorder.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Therapies Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Therapies
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {therapies.map((therapy) => (
                    <Link
                      key={therapy.href}
                      href={therapy.href}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {therapy.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/group-programs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Group Programs
            </Link>

            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contact</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Disorders */}
              <div>
                <button
                  onClick={() => setDisordersOpen(!disordersOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Disorders
                  <ChevronDown className={`h-4 w-4 transition-transform ${disordersOpen ? "rotate-180" : ""}`} />
                </button>
                {disordersOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {disorders.map((disorder) => (
                      <Link
                        key={disorder.href}
                        href={disorder.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {disorder.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Therapies */}
              <div>
                <button
                  onClick={() => setTherapiesOpen(!therapiesOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Therapies
                  <ChevronDown className={`h-4 w-4 transition-transform ${therapiesOpen ? "rotate-180" : ""}`} />
                </button>
                {therapiesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {therapies.map((therapy) => (
                      <Link
                        key={therapy.href}
                        href={therapy.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {therapy.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/group-programs"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Group Programs
              </Link>

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Contact</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
