import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import InstantContact from './components/InstantContact';
import ChatBot from './components/ChatBot';
import { pageview } from './utils/analytics';
import IncentiveBanner from './components/IncentiveBanner';


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
const AdditionalServices = lazy(() => import('./pages/AdditionalServices'));

// Service pages
const ACRepair = lazy(() => import('./pages/services/ACRepair'));
const HeatingRepair = lazy(() => import('./pages/services/HeatingRepair'));
const HVACMaintenance = lazy(() => import('./pages/services/HVACMaintenance'));

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

<Route
  path="/additional-services"
  element={
    <Suspense fallback={<div>Loading Additional Services...</div>}>
      <AdditionalServices />
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
        <InstantContact />
         <ChatBot />
      </Router>
    </div>
   </HelmetProvider>
  );
}

export default App;
