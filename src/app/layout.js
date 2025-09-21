import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import 'animate.css';
import 'react-modal-video/css/modal-video.css'
import 'react-toastify/dist/ReactToastify.css'

import '../../public/assets/css/flaticon.css';
import '../../public/assets/css/bootstrap-icons.css';
import '../../public/assets/css/fontawesome.css';

import '../../public/assets/css/theme-default.css';
import '../../public/assets/css/style.css';
import '../../public/assets/css/responsive.css';
import '../../public/assets/css/logo-orange.css';

import { Rubik } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import Dependency from '../components/utilities/Dependency';
import ScrollUpBtn from '../components/utilities/ScrollUpBtn';

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'NexSys Technologies LLC - Building Management Systems & BMS Solutions',
    template: '%s | NexSys Technologies LLC'
  },
  description: 'NexSys Technologies LLC delivers cutting-edge Building Management Systems (BMS) solutions including HVAC automation, smart lighting control, energy management, and building automation across UAE.',
  keywords: 'BMS, Building Management System, HVAC automation, smart building, energy management, building automation, UAE, Dubai, Abu Dhabi, Tridium Niagara, JACE controllers',
  authors: [{ name: 'NexSys Technologies LLC' }],
  creator: 'NexSys Technologies LLC',
  publisher: 'NexSys Technologies LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bms.nexsys.global'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NexSys Technologies LLC - Building Management Systems & BMS Solutions',
    description: 'Leading BMS solutions provider in UAE. Advanced HVAC automation, smart lighting control, energy management, and building automation systems.',
    url: 'https://bms.nexsys.global',
    siteName: 'NexSys Technologies LLC',
    images: [
      {
        url: '/assets/images/logos/nexsys-logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'NexSys Technologies LLC - BMS Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexSys Technologies LLC - Building Management Systems & BMS Solutions',
    description: 'Leading BMS solutions provider in UAE. Advanced HVAC automation, smart lighting control, energy management, and building automation systems.',
    images: ['/assets/images/logos/nexsys-logo-transparent.png'],
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
    google: 'your-google-verification-code', // Add your actual Google verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/fav-icon/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/fav-icon/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/fav-icon/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NexSys Technologies LLC",
              "url": "https://bms.nexsys.global",
              "logo": "https://bms.nexsys.global/assets/images/logos/nexsys-logo-transparent.png",
              "description": "Leading provider of Building Management Systems (BMS) solutions in UAE",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressRegion": "UAE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-XX-XXXXXXX",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/nexsys-technologies",
                "https://twitter.com/nexsys_tech"
              ],
              "foundingDate": "2025",
              "industry": "Building Management Systems, Automation, Energy Management"
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "NexSys Technologies LLC",
              "url": "https://bms.nexsys.global",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bms.nexsys.global/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}
        <Dependency />
        <ToastContainer />
        <ScrollUpBtn />
      </body>
    </html>
  )
}
