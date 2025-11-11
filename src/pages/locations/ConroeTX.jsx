import React from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const ConroeTX = () => {
  return (
    <>
      <SEO
        title="HVAC Services Conroe TX | AC Repair & Heating | AMW Cooling"
        description="Professional HVAC services in Conroe, TX. AC repair, heating installation, maintenance. Veteran-owned. Call (936) 331-1339 for same-day service."
        canonical="https://amwairconditioning.com/locations/conroe-tx"
        keywords="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning Conroe Texas"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Conroe, TX", path: "/locations/conroe-tx" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        <section className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              HVAC Services in Conroe, TX
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Your trusted local HVAC contractor serving Conroe and Montgomery County
            </p>
            <a
              href="tel:+19363311339"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
            >
              📞 Call (936) 331-1339
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Your Local Conroe HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              AMW Cooling & Heating proudly serves Conroe, Texas with comprehensive heating,
              ventilation, and air conditioning services. As a veteran-owned HVAC company
              based in Conroe, we understand the unique climate challenges of Montgomery
              County and provide reliable, professional HVAC solutions for local homeowners
              and businesses.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Located in the heart of Montgomery County, Conroe experiences hot, humid
              summers that demand reliable air conditioning and mild winters that still
              require dependable heating systems. Our team knows what it takes to keep
              Conroe homes and businesses comfortable year-round.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              HVAC Services We Provide in Conroe
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Air Conditioning Repair:</strong> Fast diagnosis and repair of all AC issues</li>
              <li><strong>AC Installation:</strong> Professional installation of new AC systems</li>
              <li><strong>Heating Repair:</strong> Expert furnace and heat pump repairs</li>
              <li><strong>Heating Installation:</strong> New heating system installation and replacement</li>
              <li><strong>HVAC Maintenance:</strong> Preventive maintenance to keep systems running efficiently</li>
              <li><strong>Emergency Service:</strong> 24/7 emergency HVAC repairs</li>
              <li><strong>Indoor Air Quality:</strong> Air purification and filtration solutions</li>
              <li><strong>Ductwork Services:</strong> Duct cleaning, repair, and installation</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Conroe Residents Choose AMW
            </h3>
            <p className="text-gray-700 mb-4">
              As a local, veteran-owned HVAC company, we're invested in the Conroe community.
              We're not a franchise or national chain - we're your neighbors. When you call AMW,
              you get personalized service from technicians who understand Conroe's climate and
              care about your comfort.
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Veteran-owned and operated</li>
              <li>Licensed, insured, and bonded</li>
              <li>Same-day service available in Conroe</li>
              <li>Upfront, transparent pricing</li>
              <li>24/7 emergency service</li>
              <li>Financing options available</li>
              <li>100% satisfaction guaranteed</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Serving Conroe Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide HVAC services throughout Conroe and surrounding areas including
              Downtown Conroe, Crighton Ridge, River Plantation, April Sound, and all
              Conroe neighborhoods. No matter where you are in the Conroe area, AMW
              Cooling & Heating is ready to help.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Emergency HVAC Service in Conroe
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              AC emergencies don't wait for business hours, and neither do we. When your
              air conditioning fails on a 95-degree day or your heating goes out on a cold
              night, call AMW for 24/7 emergency HVAC service in Conroe, TX. We'll get a
              technician to your location fast.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Contact AMW for HVAC Service in Conroe
              </h2>
              <p className="text-gray-700 mb-4">
                Ready to schedule service? Call <a href="tel:+19363311339" className="text-blue-600 hover:underline">(936) 331-1339</a> or
                fill out our contact form. We're standing by to help with all your heating
                and cooling needs in Conroe, Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19363311339"
                  className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-center"
                >
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-center"
                >
                  Contact Us Online
                </Link>
              </div>
            </div>
          </article>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ConroeTX;
