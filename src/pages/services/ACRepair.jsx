import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const ACRepair = () => {
  return (
    <>
      <SEO
        title="AC Repair Conroe TX | 24/7 Emergency Service | AMW Cooling"
        description="Fast, professional AC repair in Conroe, TX. Licensed technicians, same-day service available. Call (936) 331-1339 for expert air conditioning repair."
        canonical="https://amwairconditioning.com/services/ac-repair"
        keywords="AC repair Conroe, air conditioning repair Conroe TX, emergency AC repair, AC service Conroe"
      />

      <ServiceSchema
        service={{
          name: "Air Conditioning Repair",
          description: "Professional AC repair services in Conroe, TX. Fast, reliable service."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AC Repair", path: "/services/ac-repair" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              AC Repair Services in Conroe, TX
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Fast, reliable air conditioning repair when you need it most
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+19363311339"
                className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
              >
                📞 Call (936) 331-1339
              </a>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
              >
                📧 Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Expert Air Conditioning Repair in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When your AC stops working in the Texas heat, you need immediate help.
              AMW Cooling & Heating provides fast, professional air conditioning repair
              throughout Conroe, The Woodlands, Montgomery, and surrounding areas. Our
              licensed technicians diagnose and fix AC problems quickly, getting your
              home comfortable again.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Common AC Problems We Fix
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>AC not cooling</strong> - Refrigerant leaks, compressor issues, or thermostat problems</li>
              <li><strong>AC won't turn on</strong> - Electrical issues, capacitor failure, or circuit breaker trips</li>
              <li><strong>Strange noises</strong> - Fan motor problems, loose parts, or debris in unit</li>
              <li><strong>Frozen coils</strong> - Airflow restrictions or refrigerant issues</li>
              <li><strong>Water leaks</strong> - Clogged drain lines or damaged drain pans</li>
              <li><strong>High energy bills</strong> - Inefficient operation or system age</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              24/7 Emergency AC Repair
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We understand AC emergencies don't wait for business hours. That's why
              AMW Cooling & Heating offers 24/7 emergency air conditioning repair in
              Conroe and surrounding areas. Call <a href="tel:+19363311339" className="text-blue-600 hover:underline">(936) 331-1339</a> anytime.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Our AC Repair Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Thorough Inspection:</strong> We diagnose the exact problem with your AC system</li>
              <li><strong>Upfront Pricing:</strong> You'll know the cost before we start any work</li>
              <li><strong>Expert Repair:</strong> Our licensed technicians fix it right the first time</li>
              <li><strong>System Testing:</strong> We verify everything works properly before we leave</li>
              <li><strong>Preventive Advice:</strong> We provide tips to prevent future problems</li>
            </ol>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Choose AMW for AC Repair?
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Veteran-owned and operated business</li>
              <li>Licensed and insured HVAC technicians</li>
              <li>Same-day service available in Conroe</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>We service all major AC brands</li>
              <li>Financing options available</li>
              <li>100% satisfaction guaranteed</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Service Area
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide professional AC repair services throughout Montgomery County
              including Conroe, The Woodlands, Montgomery, Willis, Spring, Magnolia, and
              surrounding communities in Texas.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Schedule Your AC Repair Today
              </h2>
              <p className="text-gray-700 mb-4">
                Don't suffer in the heat! Contact AMW Cooling & Heating for fast,
                professional AC repair in Conroe, TX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19363311339"
                  className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-center"
                >
                  Call (936) 331-1339
                </a>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-center"
                >
                  Request Service Online
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

export default ACRepair;
