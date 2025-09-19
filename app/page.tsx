"use client"

import { useRef, useEffect } from 'react'
import { useUTMTracking } from './hooks/useUTMTracking'
import HeroSection from './components/HeroSection'

export default function BiocapilarLandingPage() {
  const { utmParams } = useUTMTracking()

  // Enviar evento de page view para Google Analytics com UTMs
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Biocapilar - Fórmula para Crescimento Capilar',
        page_location: window.location.href,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
      })
    }
  }, [utmParams])

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
    </div>
  )
}