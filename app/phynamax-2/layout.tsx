import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import UTMHandler from '../components/UTMHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.definamaxoficial.com'),
  title: 'Biocapilar - Restaure seus cabelos, acabe com a queda e preencha as falhas',
  description: 'Emagreça até 10kg em 30 dias com Phynamax, o emagrecedor natural mais vendido do Brasil. ✓ 100% Natural ✓ Envio Imediato ✓ Resultados Garantidos ✓ Frete Grátis',
  keywords: 'phynamax, emagrecedor natural, perda de peso, metabolismo, compulsão alimentar, emagrecer, perder peso, gordura localizada',
  alternates: {
    canonical: 'https://www.definamaxoficial.com/phynamax-2'
  },
  openGraph: {
    title: 'TRC Phynamax - Site Oficial | Emagrecedor Natural',
    description: 'Emagreça até 10kg em 30 dias com Phynamax, o emagrecedor natural mais vendido do Brasil. ✓ 100% Natural ✓ Envio Imediato ✓ Resultados Garantidos ✓ Frete Grátis',
    url: 'https://www.definamaxoficial.com/phynamax-2',
    siteName: 'Phynamax Oficial',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Phynamax - Emagrecedor Natural',
        type: 'image/jpeg',
      },
      {
        url: '/mockup2.png',
        width: 800,
        height: 600,
        alt: 'Frasco Phynamax',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRC Phynamax - Site Oficial | Resultados em 30 Dias',
    description: 'Emagreça até 10kg em 30 dias com Phynamax. ✓ 100% Natural ✓ Envio Imediato ✓ Resultados Garantidos ✓ Frete Grátis',
    images: ['/opengraph-image.jpg'],
    creator: '@phynamax',
    site: '@phynamax'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '055Y8Zlr7CXBMOD8_TVqgFAiashS0o5vcUD8K7vxO_s',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/bfavicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/bfavicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/bfavicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="google-site-verification" content="055Y8Zlr7CXBMOD8_TVqgFAiashS0o5vcUD8K7vxO_s" />
        
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1033969408389946');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            src="https://www.facebook.com/tr?id=1033969408389946&ev=PageView&noscript=1" 
          />
        </noscript>

        {/* TikTok Pixel Code */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('CG3JQGBC77UBC4QNQM90');
              ttq.page();
            }(window, document, 'ttq');
            `,
          }}
        />

        {/* Google Analytics */}
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <UTMHandler />
        {children}
      </body>
    </html>
  )
} 