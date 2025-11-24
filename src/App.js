import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { pageview } from './utils/analytics';
import IncentiveBanner from './components/IncentiveBanner';

// Lazy load interactive components for better performance
const InstantContact = lazy(() => import('./components/InstantContact'));
const ChatBot = lazy(() => import('./components/ChatBot'));


// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Financing = lazy(() => import('./pages/Financing'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const HeroLandingPage = lazy(() => import('./components/HeroLandingPage'));
const ContactUsDuplicate = lazy(() => import('./pages/Contact-us'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Service pages
const ACRepair = lazy(() => import('./pages/services/ACRepair'));
const HeatingRepair = lazy(() => import('./pages/services/HeatingRepair'));
const HVACMaintenance = lazy(() => import('./pages/services/HVACMaintenance'));
const IndoorAirQuality = lazy(() => import('./pages/services/IndoorAirQuality'));
const SmartThermostats = lazy(() => import('./pages/services/SmartThermostats'));
const DryerVentCleaning = lazy(() => import('./pages/services/DryerVentCleaning'));

// Location pages
const ConroeTX = lazy(() => import('./pages/locations/ConroeTX'));


function ScrollAndTrack() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <div className="bg-white text-gray-800 font-sans">
          <Router>
            <ScrollAndTrack />
            <Navbar />
            <IncentiveBanner />
        <Routes>
          <Route
    path="/"
    element={
      <Suspense fallback={<div>Loading Home...</div>}>
        <HomePage />
      </Suspense>
    }
  />
  <Route
    path="/about"
    element={
      <Suspense fallback={<div>Loading About Us...</div>}>
        <AboutUs />
      </Suspense>
    }
  />
  <Route
    path="/services"
    element={
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
    }
  />
  <Route
    path="/faqs"
    element={
      <Suspense fallback={<div>Loading FAQs...</div>}>
        <FAQs />
      </Suspense>
    }
  />
  <Route
    path="/financing"
    element={
      <Suspense fallback={<div>Loading Financing...</div>}>
        <Financing />
      </Suspense>
    }
  />
  <Route
    path="/testimonials"
    element={
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <TestimonialsPage />
      </Suspense>
    }
  />
  <Route
    path="/contact"
    element={
      <Suspense fallback={<div>Loading Contact Page...</div>}>
        <Contact />
      </Suspense>
    }
  />
<Route
  path="/contact-us"
  element={
    <Suspense fallback={<div>Loading Contact Page...</div>}>
      <ContactUsDuplicate />
    </Suspense>
  }
/>
<Route
  path="/blog"
  element={
    <Suspense fallback={<div>Loading Blog...</div>}>
      <Blog />
    </Suspense>
  }
/>

<Route
  path="/blog/:slug"
  element={
    <Suspense fallback={<div>Loading Post...</div>}>
      <BlogPost />
    </Suspense>
  }
/>

{/* Service Routes */}
<Route
  path="/services/ac-repair"
  element={
    <Suspense fallback={<div>Loading AC Repair...</div>}>
      <ACRepair />
    </Suspense>
  }
/>
<Route
  path="/services/heating-repair"
  element={
    <Suspense fallback={<div>Loading Heating Repair...</div>}>
      <HeatingRepair />
    </Suspense>
  }
/>
<Route
  path="/services/hvac-maintenance"
  element={
    <Suspense fallback={<div>Loading HVAC Maintenance...</div>}>
      <HVACMaintenance />
    </Suspense>
  }
/>
<Route
  path="/services/indoor-air-quality"
  element={
    <Suspense fallback={<div>Loading Indoor Air Quality...</div>}>
      <IndoorAirQuality />
    </Suspense>
  }
/>
<Route
  path="/services/smart-thermostats"
  element={
    <Suspense fallback={<div>Loading Smart Thermostats...</div>}>
      <SmartThermostats />
    </Suspense>
  }
/>
<Route
  path="/services/dryer-vent-cleaning"
  element={
    <Suspense fallback={<div>Loading Dryer Vent Cleaning...</div>}>
      <DryerVentCleaning />
    </Suspense>
  }
/>

{/* Location Routes */}
<Route
  path="/locations/conroe-tx"
  element={
    <Suspense fallback={<div>Loading Conroe Services...</div>}>
      <ConroeTX />
    </Suspense>
  }
/>

  <Route
    path="*"
    element={
      <Suspense fallback={<div>Loading Not Found Page...</div>}>
        <NotFound />
      </Suspense>
    }
  />
  <Route
  path="/hero"
  element={
    <Suspense fallback={<div>Loading Hero...</div>}>
      <HeroLandingPage />
    </Suspense>
  }
/>
        </Routes>
        <Suspense fallback={null}>
          <InstantContact />
          <ChatBot />
        </Suspense>
          </Router>
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
