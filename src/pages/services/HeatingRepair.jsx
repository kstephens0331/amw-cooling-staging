import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const HeatingRepair = () => {
  return (
    <>
      <SEO
        title="Heating Repair Conroe TX | Furnace Repair | AMW Cooling"
        description="Expert heating and furnace repair in Conroe, TX. Licensed technicians, same-day service. Call (936) 331-1339 for reliable heating system repair."
        canonical="https://amwairconditioning.com/services/heating-repair"
        keywords="heating repair Conroe, furnace repair Conroe TX, heater repair, heating service Conroe"
      />

      <ServiceSchema
        service={{
          name: "Heating Repair",
          description: "Professional heating and furnace repair services in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Heating Repair", path: "/services/heating-repair" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        <section className="bg-gradient-to-br from-orange-50 to-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Heating Repair Services in Conroe, TX
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Stay warm all winter with expert heating and furnace repair
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

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Expert Heating & Furnace Repair in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When your heating system fails during a cold snap, you need fast, reliable service.
              AMW Cooling & Heating provides expert heating and furnace repair throughout Conroe,
              The Woodlands, and Montgomery County. Our licensed technicians diagnose and repair
              all types of heating systems quickly and efficiently.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Common Heating Problems We Repair
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Furnace won't turn on</strong> - Thermostat issues, pilot light problems, or electrical failures</li>
              <li><strong>No heat or insufficient heat</strong> - Burner issues, heat exchanger problems, or airflow restrictions</li>
              <li><strong>Strange noises</strong> - Blower motor issues, belt problems, or loose components</li>
              <li><strong>Frequent cycling</strong> - Thermostat problems, clogged filters, or airflow issues</li>
              <li><strong>High energy bills</strong> - Inefficient operation or aging equipment</li>
              <li><strong>Yellow pilot light</strong> - Possible carbon monoxide risk requiring immediate attention</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Emergency Heating Repair
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Heating emergencies can't wait. We provide prompt emergency heating repair services
              to keep your family warm and safe. Call <a href="tel:+19363311339" className="text-blue-600 hover:underline">(936) 331-1339</a> for
              immediate assistance.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Types of Heating Systems We Service
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Gas furnaces</li>
              <li>Electric furnaces</li>
              <li>Heat pumps</li>
              <li>Hybrid heating systems</li>
              <li>Ductless mini-split systems</li>
              <li>All major brands and models</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Choose AMW for Heating Repair?
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Veteran-owned and locally operated</li>
              <li>Licensed and insured HVAC professionals</li>
              <li>Same-day service available</li>
              <li>Transparent, upfront pricing</li>
              <li>100% satisfaction guarantee</li>
              <li>Financing options available</li>
              <li>Safety-focused service</li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Schedule Heating Repair Today
              </h2>
              <p className="text-gray-700 mb-4">
                Don't wait until the next cold front! Contact AMW Cooling & Heating for
                expert heating repair in Conroe, TX.
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

export default HeatingRepair;
