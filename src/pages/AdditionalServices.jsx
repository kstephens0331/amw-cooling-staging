import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AdditionalServices() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>Additional HVAC Services | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Duct cleaning, smart thermostat upgrades, insulation improvements, and more for homes in Conroe, The Woodlands, Spring, and nearby areas."
        />
        <link rel="canonical" href="https://amwaircondition.com/additional-services" />
      </Helmet>

      <section className="text-center py-12 bg-gradient-to-br from-blue-50 to-white shadow mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Additional Services</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Beyond heating and cooling, we offer upgrades that improve comfort, air quality, and efficiency.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 space-y-8 max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">Duct Cleaning & Sealing</h2>
          <p className="text-gray-700 mt-2">
            Reduce dust, improve airflow, and stop wasting cooled air in the attic. Proper sealing can lower bills and
            make every room feel more even.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">Smart Thermostat Upgrades</h2>
          <p className="text-gray-700 mt-2">
            Gain precise control and energy reports. We install and configure leading thermostats for Conroe’s climate.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">Insulation Improvements</h2>
          <p className="text-gray-700 mt-2">
            Keep conditioned air where it belongs. Small attic insulation upgrades can have a big impact in Texas heat.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">Indoor Air Quality</h2>
          <p className="text-gray-700 mt-2">
            Options include whole-home dehumidifiers, filtration, and UV purification—especially helpful for humid Houston summers.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+19363311339"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded ml-3"
          >
            Call (936) 331-1339
          </a>
        </div>
      </section>
    </main>
  );
}
