import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import HeroLandingPage from '../components/HeroLandingPage';
import QuickStats from '../components/QuickStats';
import AboutUsPreview from '../components/AboutUsPreview';
import React, { Suspense, lazy } from "react";
const MapSection = lazy(() => import("../components/MapSection"));

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
    <SEO
      title="AMW Cooling & Heating | HVAC Services Conroe TX | Veteran-Owned"
      description="Expert HVAC, AC repair & heating services in Conroe, TX. Veteran-owned, licensed & insured. 24/7 emergency service. Call (936) 331-1339 for same-day service!"
      canonical="https://amwairconditioning.com"
      keywords="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning Conroe, HVAC services The Woodlands, Montgomery County HVAC"
    />
    <Helmet>
      <link
        rel="preload"
        as="image"
        href="/images/DSC_2135.jpg"
        fetchpriority="high"
        type="image/jpg"
      />
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
