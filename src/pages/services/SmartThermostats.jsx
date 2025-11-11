import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const SmartThermostats = () => {
  return (
    <>
      <SEO
        title="Smart Thermostat Installation Conroe TX | Nest, Ecobee, Honeywell | AMW"
        description="Professional smart thermostat installation in Conroe, TX. Save 10-23% on energy costs with Nest, Ecobee, Honeywell. Wi-Fi setup included. Call (936) 331-1339!"
        canonical="https://amwairconditioning.com/services/smart-thermostats"
        keywords="smart thermostat installation Conroe, Nest thermostat Conroe TX, Ecobee installation, Honeywell WiFi thermostat, programmable thermostat Conroe"
      />

      <ServiceSchema
        service={{
          name: "Smart Thermostat Installation",
          description: "Expert smart thermostat installation and setup services in Conroe, TX for all major brands."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Smart Thermostats", path: "/services/smart-thermostats" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Smart Thermostat Installation in Conroe, TX
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Control your comfort from anywhere and save up to 23% on energy costs
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
                📧 Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Professional Smart Thermostat Installation & Setup
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Upgrade to a smart thermostat and take complete control of your Conroe home's comfort and
              energy use. These intelligent devices learn your preferences, optimize efficiency automatically,
              and provide detailed energy reports—all accessible from your smartphone, tablet, or computer.
              For Texas homeowners managing cooling costs during long, hot summers, smart thermostats deliver
              substantial savings and unprecedented convenience.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Upgrade to a Smart Thermostat?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Traditional thermostats waste energy by maintaining the same temperature whether you're home or
              away. Smart thermostats adapt to your schedule, learning when to cool or heat your home and when
              to conserve energy. Studies show Texas homeowners save an average of 10-23% on heating and cooling
              costs—that's $130-$230 annually for the typical Conroe household.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Smart Thermostats We Install
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Google Nest Thermostat</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Auto-Schedule learns your preferences</li>
                  <li>Home/Away Assist adjusts automatically</li>
                  <li>Energy History shows usage patterns</li>
                  <li>Works with Google Assistant & Alexa</li>
                  <li>Sleek, modern design with multiple colors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Ecobee SmartThermostat</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Room sensors for multi-zone comfort</li>
                  <li>Built-in Alexa voice control</li>
                  <li>Air quality monitoring</li>
                  <li>Smart Home integration</li>
                  <li>Energy savings reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Honeywell Home T9/T10</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Smart room sensors included</li>
                  <li>Geofencing technology</li>
                  <li>7-day flexible scheduling</li>
                  <li>Works with most HVAC systems</li>
                  <li>Intuitive touchscreen display</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Carrier Cor & Bryant Evolution</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Optimized for Carrier/Bryant systems</li>
                  <li>Advanced humidity control</li>
                  <li>Weather-based adjustments</li>
                  <li>Full-color touchscreen</li>
                  <li>Ideal Performance settings</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Complete Installation Service Included
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Compatibility Check</strong> - Verify your HVAC system works with your chosen thermostat</li>
              <li><strong>Professional Wiring</strong> - Safe removal of old thermostat and expert installation of new unit</li>
              <li><strong>Wi-Fi Configuration</strong> - Connect thermostat to your home network for remote access</li>
              <li><strong>Account Setup</strong> - Create and configure your app account for smartphone control</li>
              <li><strong>Schedule Programming</strong> - Input your preferred temperatures and schedule</li>
              <li><strong>Sensor Placement</strong> - Optimal positioning of room sensors (if applicable)</li>
              <li><strong>Voice Assistant Integration</strong> - Connect to Alexa, Google Home, or Siri</li>
              <li><strong>Tutorial & Training</strong> - Complete walkthrough of all features and functions</li>
              <li><strong>System Testing</strong> - Verify heating, cooling, and fan controls work properly</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Key Features & Benefits
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Remote Control</strong> - Adjust temperature from anywhere using your smartphone</li>
              <li><strong>Learning Capabilities</strong> - Automatically adapts to your routine and preferences</li>
              <li><strong>Geofencing</strong> - Uses your phone's location to know when you're away</li>
              <li><strong>Energy Reports</strong> - Track usage and identify opportunities to save more</li>
              <li><strong>Weather Integration</strong> - Adjusts based on forecast to optimize efficiency</li>
              <li><strong>Voice Control</strong> - "Alexa, set temperature to 72 degrees"</li>
              <li><strong>Multi-Zone Control</strong> - Different temperatures for different rooms (with compatible systems)</li>
              <li><strong>Vacation Mode</strong> - Energy-saving settings when you're away for extended periods</li>
              <li><strong>Humidity Control</strong> - Critical for Conroe's humid climate</li>
              <li><strong>Maintenance Reminders</strong> - Alerts when it's time to change filters</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Perfect for Conroe's Climate
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Conroe summers are long and hot, with AC running constantly from May through September. Smart
              thermostats excel in this climate by pre-cooling your home before peak rates, adjusting for
              humidity, and ensuring you never cool an empty house. Many models also integrate with utility
              company demand response programs, earning you credits for reducing usage during peak times.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Is Your System Compatible?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most smart thermostats work with standard HVAC systems including gas furnaces, electric heat,
              central air conditioning, heat pumps, and multi-stage systems. However, some older systems or
              specialized setups may require a C-wire (common wire) installation or power adapter. Our
              technicians assess compatibility during your consultation and handle any necessary wiring
              upgrades.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Choose AMW for Installation?
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Expert installation by licensed HVAC technicians</li>
              <li>Complete setup including Wi-Fi and app configuration</li>
              <li>One-on-one training on all features</li>
              <li>Compatibility verification before purchase</li>
              <li>C-wire installation if needed (additional charge may apply)</li>
              <li>Support for all major smart thermostat brands</li>
              <li>Satisfaction guaranteed</li>
              <li>Veterans receive special discounts</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Ready to Upgrade to Smart Control?
              </h2>
              <p className="text-gray-700 mb-4">
                Start saving energy and enjoying unprecedented comfort control. Contact AMW Cooling & Heating
                for professional smart thermostat installation in Conroe, TX.
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
                  Schedule Installation
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

export default SmartThermostats;
