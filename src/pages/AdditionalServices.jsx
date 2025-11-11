import React from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import airQuality from '../assets/images/air-quality.webp';
import ventilation from '../assets/images/IMG_6338.webp';
import maintenance from '../assets/images/DSC_2058.webp';
import hvacSystem from '../assets/images/DSC_2035.webp';

export default function AdditionalServices() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <SEO
        title="Additional HVAC Services Conroe TX | Duct Cleaning, Thermostats & More | AMW"
        description="Complete HVAC solutions in Conroe, TX: duct cleaning & sealing, smart thermostat installation, indoor air quality, insulation, dryer vent cleaning. Call (936) 331-1339 today!"
        canonical="https://amwairconditioning.com/additional-services"
        keywords="duct cleaning Conroe, smart thermostat installation, indoor air quality Conroe TX, dryer vent cleaning, HVAC insulation, air purification Conroe, ductwork sealing"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Additional Services", path: "/additional-services" }
        ]}
      />

      {/* Hero Section */}
      <section className="text-center bg-gradient-to-br from-blue-50 to-white py-10 md:py-12 mb-8 rounded shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Additional HVAC Services in Conroe, TX
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-4">
          Beyond heating and cooling, AMW Cooling & Heating offers comprehensive solutions to enhance comfort,
          improve air quality, and maximize energy efficiency throughout your Conroe-area home or business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="tel:+19363311339"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-xs md:text-sm"
          >
            📞 Call (936) 331-1339
          </a>
          <Link
            to="/contact"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm"
          >
            📧 Request Service
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 space-y-16 py-12">
        {/* 1️⃣ Duct Cleaning & Sealing - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
              <img src={ventilation} alt="Professional duct cleaning and sealing services in Conroe TX" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              🌬️ Professional Duct Cleaning & Sealing
            </h2>
            <p className="mb-4 leading-relaxed">
              Your ductwork is the circulatory system of your HVAC, distributing conditioned air throughout your home.
              Over time, dust, allergens, pet dander, and debris accumulate in your ducts, reducing air quality and
              system efficiency. In Conroe's humid climate, dirty ducts can also harbor mold and mildew.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Complete Duct Cleaning</strong> – Remove years of dust, allergens, and contaminants from your entire duct system</li>
              <li><strong>Professional Duct Sealing</strong> – Stop air leaks that waste energy and increase utility bills by up to 30%</li>
              <li><strong>Airflow Optimization</strong> – Improve system performance and even out temperatures in every room</li>
              <li><strong>Mold & Mildew Prevention</strong> – Essential in Conroe's humid climate to prevent biological growth</li>
              <li><strong>Energy Savings</strong> – Sealed ducts keep cooled air where it belongs, not in your attic or walls</li>
            </ul>
            <p className="mt-4 text-sm italic">
              The EPA estimates that proper duct sealing can improve HVAC efficiency by 20-40%, making it one of
              the best investments for Conroe homeowners looking to reduce energy costs.
            </p>
          </div>
        </div>

        {/* 2️⃣ Smart Thermostat Installation - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
              <img src={hvacSystem} alt="Smart thermostat installation and upgrades in Conroe Texas" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              📱 Smart Thermostat Installation & Upgrades
            </h2>
            <p className="mb-4 leading-relaxed">
              Upgrade to a smart thermostat and take control of your home's comfort and energy use from anywhere.
              These intelligent devices learn your preferences, optimize efficiency, and provide detailed energy
              reports—perfect for managing cooling costs during Conroe's hot summers.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Expert Installation</strong> – Professional setup of Nest, Ecobee, Honeywell, and other leading smart thermostats</li>
              <li><strong>Wi-Fi Configuration</strong> – Full setup and connection to your home network for remote access</li>
              <li><strong>Learning Algorithms</strong> – Thermostats that adapt to your schedule and preferences automatically</li>
              <li><strong>Energy Reports</strong> – Track usage patterns and identify opportunities to save on utility bills</li>
              <li><strong>Geofencing Features</strong> – Automatic temperature adjustments when you leave or arrive home</li>
              <li><strong>Voice Control Integration</strong> – Compatible with Alexa, Google Home, and Siri for hands-free control</li>
              <li><strong>Zone Control Systems</strong> – Custom temperature settings for different areas of your home</li>
            </ul>
            <p className="mt-4 text-sm italic">
              Smart thermostat users in Texas typically save 10-23% on heating and cooling costs—that's $130-$230
              annually for the average Conroe household.
            </p>
          </div>
        </div>

        {/* 3️⃣ Indoor Air Quality Solutions - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
              <img src={airQuality} alt="Indoor air quality solutions and air purification in Conroe" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              🌿 Indoor Air Quality Solutions
            </h2>
            <p className="mb-4 leading-relaxed">
              Conroe's high humidity and seasonal allergens make indoor air quality a critical concern for families.
              The EPA states that indoor air can be 2-5 times more polluted than outdoor air. AMW Cooling & Heating
              offers comprehensive solutions to ensure your family breathes clean, healthy air year-round.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Whole-Home Dehumidifiers</strong> – Control excess moisture to prevent mold growth and improve comfort in humid Texas summers</li>
              <li><strong>Advanced Air Filtration</strong> – HEPA and MERV-rated filters that capture 99.97% of airborne particles including dust, pollen, and pet dander</li>
              <li><strong>UV Air Purification</strong> – Germicidal UV lights that eliminate bacteria, viruses, and mold spores circulating through your HVAC system</li>
              <li><strong>Electronic Air Cleaners</strong> – Active purification systems that remove microscopic particles and odors</li>
              <li><strong>Ventilation Systems</strong> – Energy recovery ventilators (ERV) that bring fresh outdoor air inside while maintaining efficiency</li>
              <li><strong>Humidity Monitoring</strong> – Professional assessment and solutions to maintain ideal 30-50% humidity levels</li>
              <li><strong>Allergen Reduction</strong> – Targeted solutions for Conroe-area allergens including oak pollen, ragweed, and dust mites</li>
            </ul>
            <p className="mt-4 text-sm italic">
              Especially beneficial for Conroe families with allergies, asthma, or respiratory sensitivities.
              Improved air quality can reduce symptoms and sick days significantly.
            </p>
          </div>
        </div>

        {/* 4️⃣ Insulation Improvements - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
              <img src={maintenance} alt="HVAC insulation services and attic insulation in Conroe TX" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              🏠 Attic & HVAC Insulation Improvements
            </h2>
            <p className="mb-4 leading-relaxed">
              In Texas heat, proper insulation is your first line of defense against skyrocketing cooling costs.
              Poor insulation allows conditioned air to escape and hot attic air to infiltrate your living spaces,
              forcing your AC to work overtime. AMW provides targeted insulation upgrades that deliver immediate comfort
              and long-term savings for Conroe homeowners.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Attic Insulation Upgrades</strong> – Boost R-value to Texas-recommended R-30 to R-60 for maximum efficiency</li>
              <li><strong>Ductwork Insulation</strong> – Wrap exposed ducts in unconditioned spaces to prevent energy loss</li>
              <li><strong>Air Sealing Services</strong> – Close gaps and cracks that allow conditioned air to escape</li>
              <li><strong>Radiant Barrier Installation</strong> – Reflect heat away from your attic, reducing temperatures by up to 30°F</li>
              <li><strong>HVAC Equipment Protection</strong> – Proper insulation extends equipment life by reducing runtime</li>
              <li><strong>Energy Audits</strong> – Professional assessment to identify exactly where you're losing energy</li>
            </ul>
            <p className="mt-4 text-sm italic">
              The Department of Energy estimates that proper insulation can reduce heating and cooling costs by up
              to 20%. In Conroe's climate, attic insulation upgrades often pay for themselves within 3-5 years.
            </p>
          </div>
        </div>

        {/* 5️⃣ Dryer Vent Cleaning - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
              <img src={ventilation} alt="Professional dryer vent cleaning services in Conroe Texas" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              🔥 Professional Dryer Vent Cleaning
            </h2>
            <p className="mb-4 leading-relaxed">
              Clogged dryer vents are a leading cause of house fires in the United States, causing over 15,000 fires
              annually according to the U.S. Fire Administration. Beyond safety, restricted airflow forces your dryer
              to work harder, increasing energy costs and reducing appliance lifespan. AMW provides thorough dryer
              vent cleaning to protect your Conroe home and family.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Complete Vent System Cleaning</strong> – Remove lint buildup from the entire vent length, not just the lint trap</li>
              <li><strong>Fire Hazard Prevention</strong> – Eliminate dangerous lint accumulation that causes thousands of fires yearly</li>
              <li><strong>Improved Drying Efficiency</strong> – Restore proper airflow so clothes dry faster and more completely</li>
              <li><strong>Energy Savings</strong> – Reduce dryer runtime by 30-50% with unrestricted airflow</li>
              <li><strong>Extended Appliance Life</strong> – Prevent overheating that damages dryer components and shortens lifespan</li>
              <li><strong>Moisture Problem Prevention</strong> – Proper venting prevents humidity and mold issues in laundry areas</li>
              <li><strong>Vent Inspection & Repair</strong> – Check for damage, disconnections, or improper installation</li>
            </ul>
            <p className="mt-4 text-sm italic">
              The National Fire Protection Association recommends professional dryer vent cleaning at least once
              annually—more frequently for large families doing multiple loads per week.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to Enhance Your Home's Comfort & Efficiency?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            AMW Cooling & Heating serves Conroe, The Woodlands, Montgomery, Willis, Spring, Magnolia, and
            surrounding communities with professional HVAC services. Our veteran-owned company delivers
            honest pricing, expert service, and guaranteed satisfaction.
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
              📧 Schedule Service Online
            </Link>
            <Link
              to="/financing"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
            >
              💳 Financing Available
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Serving Montgomery County & Surrounding Areas
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            AMW Cooling & Heating proudly provides additional HVAC services throughout the greater Conroe area,
            including:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <ul className="list-disc list-inside space-y-1">
              <li>Conroe, TX</li>
              <li>The Woodlands, TX</li>
              <li>Montgomery, TX</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Willis, TX</li>
              <li>Spring, TX</li>
              <li>Magnolia, TX</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Tomball, TX</li>
              <li>Splendora, TX</li>
              <li>New Caney, TX</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Not sure if we service your area? Call us at <a href="tel:+19363311339" className="text-blue-600 hover:underline">(936) 331-1339</a> to
            confirm availability and schedule your service.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
