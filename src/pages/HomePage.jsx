import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import HeroLandingPage from '../components/HeroLandingPage';
import QuickStats from '../components/QuickStats';
import AboutUsPreview from '../components/AboutUsPreview';
import React, { Suspense, lazy } from "react";
const MapSection = lazy(() => import("../components/MapSection"));

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
    <Helmet>
    <link
    rel="preload"
    as="image"
    href="/images/DSC_2135.jpg"
    fetchpriority="high"
    type="image/jpg"
  />
  <title>AMW Cooling & Heating LLC | HVAC Services in Conroe, The Woodlands, TX</title>
  <meta
    name="description"
    content="AMW Cooling & Heating LLC provides reliable HVAC installations, repairs, and maintenance for homes and businesses in Conroe, The Woodlands, Spring, Montgomery County, and Willis. Contact us today!"
  />
  <meta
    name="keywords"
    content="HVAC services, air conditioning repair, heating maintenance, Conroe TX, The Woodlands HVAC, AMW Cooling & Heating"
  />
   <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            name: 'AMW Cooling & Heating LLC',
            url: 'https://amwaircondition.com/',
            telephone: '(936) 331-1339',
            areaServed: [
              'Conroe TX',
              'The Woodlands TX',
              'Spring TX',
              'Magnolia TX',
              'Willis TX',
              'Montgomery TX'
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Conroe',
              addressRegion: 'TX',
              addressCountry: 'US'
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '08:00',
                closes: '17:00'
              }
            ],
            sameAs: [
              'https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/',
              'https://www.instagram.com/amwairconditioning/'
            ]
          })}
        </script>
  <link rel="preconnect" href="https://a.tile.openstreetmap.org" />
  <link rel="preconnect" href="https://b.tile.openstreetmap.org" />
  <link rel="preconnect" href="https://c.tile.openstreetmap.org" />
  <link rel="dns-prefetch" href="https://a.tile.openstreetmap.org" />
  <link rel="dns-prefetch" href="https://b.tile.openstreetmap.org" />
  <link rel="dns-prefetch" href="https://c.tile.openstreetmap.org" />
</Helmet>

      <main>
        <HeroLandingPage />
        <QuickStats />
        <AboutUsPreview />
        <Suspense fallback={<div className="text-center py-12">Loading map...</div>}>
        <MapSection />
        </Suspense>
<Footer />
      </main>
    </div>
  );
}
