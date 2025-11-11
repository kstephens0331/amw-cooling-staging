import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const HVACMaintenance = () => {
  return (
    <>
      <SEO
        title="HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW"
        description="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems. Call (936) 331-1339 for preventive maintenance plans."
        canonical="https://amwairconditioning.com/services/hvac-maintenance"
        keywords="HVAC maintenance Conroe, AC tune-up, furnace maintenance, preventive HVAC service Conroe TX"
      />

      <ServiceSchema
        service={{
          name: "HVAC Maintenance",
          description: "Professional HVAC maintenance and tune-up services in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "HVAC Maintenance", path: "/services/hvac-maintenance" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        <section className="bg-gradient-to-br from-green-50 to-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              HVAC Maintenance Services in Conroe, TX
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Keep your system running efficiently with professional preventive maintenance
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+19363311339"
                className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
              >
                📞 Call (936) 331-1339
              </a>
              <Link
                to="/financing"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
              >
                View Maintenance Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Professional HVAC Maintenance in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Regular HVAC maintenance is the key to system longevity, energy efficiency, and
              avoiding costly breakdowns. AMW Cooling & Heating provides comprehensive maintenance
              services for both heating and cooling systems throughout Conroe, The Woodlands,
              and Montgomery County.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Benefits of Regular HVAC Maintenance
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Lower energy bills</strong> - Properly maintained systems use 10-20% less energy</li>
              <li><strong>Extended equipment life</strong> - Add years to your HVAC system's lifespan</li>
              <li><strong>Fewer breakdowns</strong> - Catch problems before they become emergencies</li>
              <li><strong>Improved comfort</strong> - Consistent temperatures throughout your home</li>
              <li><strong>Better air quality</strong> - Clean filters and components mean cleaner air</li>
              <li><strong>Warranty protection</strong> - Many warranties require regular maintenance</li>
              <li><strong>Safety assurance</strong> - Prevent carbon monoxide and other hazards</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              What's Included in Our Maintenance Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Cooling System Maintenance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Clean or replace air filters</li>
                  <li>Clean condenser and evaporator coils</li>
                  <li>Check refrigerant levels</li>
                  <li>Inspect electrical connections</li>
                  <li>Test thermostat calibration</li>
                  <li>Lubricate moving parts</li>
                  <li>Clean condensate drain</li>
                  <li>Measure airflow</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Heating System Maintenance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Inspect heat exchanger</li>
                  <li>Clean burners and ignition system</li>
                  <li>Check gas pressure and connections</li>
                  <li>Test safety controls</li>
                  <li>Inspect flue and ventilation</li>
                  <li>Clean blower assembly</li>
                  <li>Check belt tension and wear</li>
                  <li>Test carbon monoxide levels</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Recommended Maintenance Schedule
            </h3>
            <p className="text-gray-700 mb-4">
              For optimal performance and efficiency, we recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Spring:</strong> AC tune-up before summer heat arrives</li>
              <li><strong>Fall:</strong> Heating system tune-up before winter</li>
              <li><strong>Monthly:</strong> Check and replace air filters</li>
              <li><strong>Annually:</strong> Complete system inspection and maintenance</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Maintenance Plans Available
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Save money and ensure your system is always ready with our maintenance plans.
              Members receive priority scheduling, discounted repairs, and peace of mind knowing
              their HVAC system is professionally maintained year-round.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Schedule Your Maintenance Today
              </h2>
              <p className="text-gray-700 mb-4">
                Don't wait for a breakdown! Protect your investment with professional HVAC
                maintenance from AMW Cooling & Heating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19363311339"
                  className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-center"
                >
                  Call (936) 331-1339
                </a>
                <Link
                  to="/financing"
                  className="inline-block px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition text-center"
                >
                  View Plans & Pricing
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

export default HVACMaintenance;
