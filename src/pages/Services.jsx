import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import Footer from '../components/Footer';
import heating from '../assets/images/IMG_1163.webp';
import cooling from '../assets/images/DSC_2035.webp';
import ventilation from '../assets/images/IMG_6338.webp';
import repairs_maintenance from '../assets/images/DSC_2058.webp';
import air from '../assets/images/air-quality.webp'
import emergency from '../assets/images/emergency.webp'
import ReactCompareImage from 'react-compare-image';
import newInstallBefore from '../assets/images/6392-old_unit.webp';
import newInstallAfter from '../assets/images/6387-new_install.webp';


export default function Services() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>HVAC Services | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Explore our expert HVAC services, including installation, repair, and maintenance for residential and commercial clients across Conroe, The Woodlands, and beyond."
        />
        <meta
          name="keywords"
          content="HVAC services, AC installation, heater repair, air conditioning Conroe TX, The Woodlands HVAC, AMW Cooling"
        />
      </Helmet>

      {/* Title Section with CTA */}
      <section className="text-center bg-gradient-to-br from-blue-50 to-white py-10 md:py-12 mb-8 rounded shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Our Services</h1>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-4">
          From heating to cooling and everything in between, we provide comprehensive solutions to keep you comfortable year-round.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="tel:+19363311339"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-xs md:text-sm"
          >
            📞 Call Now
          </a>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm"
          >
            📧 Contact Us
          </a>
        </div>
      </section>

            <section className="container mx-auto px-4 space-y-16 py-12">
        {/* 1️⃣ Heating Services - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'><img src={heating} alt="Heating services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🔥 Heating Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>New Heater Installations</strong> – Efficient furnaces, heat pumps, and hybrid systems.</li>
              <li><strong>Heater Repairs</strong> – Quick, reliable fixes for all heating units.</li>
              <li><strong>Seasonal Maintenance</strong> – Keep your system running at peak efficiency.</li>
              <li><strong>System Upgrades</strong> – Modern performance and energy savings.</li>
              <li><strong>Thermostat Services</strong> – Precision controls for comfort and economy.</li>
            </ul>
          </div>
        </div>

        {/* 2️⃣ Cooling Services - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
  <img src={cooling} alt="Cooling services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
</div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">❄️ Air Conditioning Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>AC Installations</strong> – Energy-efficient air conditioning systems.</li>
              <li><strong>AC Repairs</strong> – Fast service to restore cool air quickly.</li>
              <li><strong>Seasonal Tune-Ups</strong> – Prevent breakdowns and maintain performance.</li>
              <li><strong>Humidity Management</strong> – Keep your indoor air comfortable.</li>
              <li><strong>Smart Thermostats</strong> – Control cooling from anywhere.</li>
            </ul>
          </div>
        </div>

        {/* 3️⃣ Ventilation Services - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'><img src={ventilation} alt="Ventilation services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🌬️ Ventilation Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Ductwork Installation</strong> – Balanced airflow in every room.</li>
              <li><strong>Ventilation Repairs</strong> – Remove blockages and fix leaks.</li>
              <li><strong>Airflow Balancing</strong> – Even temperatures throughout your space.</li>
              <li><strong>Whole-House Ventilation</strong> – Remove stale air, bring in fresh air.</li>
              <li><strong>Exhaust Systems</strong> – Proper moisture control and ventilation.</li>
            </ul>
          </div>
        </div>


      <section className="container mx-auto px-4 space-y-16 py-12">
        {/* 4️⃣ New Installations - IMAGE LEFT with Compare Slider Styled to Match Others */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
              <div className="w-full h-full -rotate-45 scale-[0.85]">
                <ReactCompareImage
                  leftImage={newInstallBefore}
                  rightImage={newInstallAfter}
                  sliderLineColor="black"
                  sliderPositionPercentage={0.5}
                  aspectRatio="1"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🆕 New Installations</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>New Construction HVAC</strong> – Tailored systems for your building.</li>
              <li><strong>System Replacements</strong> – Upgrade outdated equipment.</li>
              <li><strong>Load Calculations</strong> – Optimal sizing for peak efficiency.</li>
              <li><strong>Smart Integration</strong> – Modern, connected controls.</li>
              <li><strong>Post-Install Testing</strong> – Ensure perfect operation.</li>
            </ul>
          </div>
        </div>
      </section>

        {/* 5️⃣ Repairs and Maintenance - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto'><img src={repairs_maintenance} alt="Maintenance services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🛠️ Repairs & Maintenance</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Emergency Repairs</strong> – Quick fixes for urgent issues.</li>
              <li><strong>Preventative Maintenance</strong> – Keep your system running smoothly.</li>
              <li><strong>Seasonal Tune-Ups</strong> – Maximize lifespan and performance.</li>
              <li><strong>Inspections & Diagnostics</strong> – Identify and fix issues early.</li>
              <li><strong>Efficiency Optimization</strong> – Save on energy bills year-round.</li>
            </ul>
          </div>
        </div>

        {/* 6️⃣ Indoor Air Quality - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <Link to="/services/indoor-air-quality" className="w-full lg:w-1/2 hover:opacity-80 transition">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto cursor-pointer'>
              <img src={air} alt="Indoor air quality services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </Link>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <Link to="/services/indoor-air-quality" className="hover:text-blue-700 transition">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2 cursor-pointer">🌿 Indoor Air Quality Solutions</h2>
            </Link>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Advanced Air Filtration</strong> – HEPA filters capture 99.97% of particles.</li>
              <li><strong>Whole-Home Dehumidifiers</strong> – Control humidity in Conroe's climate.</li>
              <li><strong>UV Air Purification</strong> – Eliminate bacteria, viruses, and mold.</li>
              <li><strong>Ventilation Systems</strong> – Fresh air exchange with energy recovery.</li>
              <li><strong>Allergen Reduction</strong> – Solutions for pollen, dust, and pet dander.</li>
            </ul>
            <Link
              to="/services/indoor-air-quality"
              className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* 7️⃣ Smart Thermostats - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <Link to="/services/smart-thermostats" className="w-full lg:w-1/2 hover:opacity-80 transition">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto cursor-pointer'>
              <img src={cooling} alt="Smart thermostat installation" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </Link>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <Link to="/services/smart-thermostats" className="hover:text-blue-700 transition">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2 cursor-pointer">📱 Smart Thermostat Installation</h2>
            </Link>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Expert Installation</strong> – Nest, Ecobee, Honeywell, and more.</li>
              <li><strong>Complete Setup</strong> – Wi-Fi configuration and app account creation.</li>
              <li><strong>Energy Savings</strong> – Save 10-23% on heating and cooling costs.</li>
              <li><strong>Remote Control</strong> – Adjust temperature from anywhere.</li>
              <li><strong>Voice Integration</strong> – Works with Alexa, Google, and Siri.</li>
            </ul>
            <Link
              to="/services/smart-thermostats"
              className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* 8️⃣ Dryer Vent Cleaning - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <Link to="/services/dryer-vent-cleaning" className="w-full lg:w-1/2 hover:opacity-80 transition">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto cursor-pointer'>
              <img src={ventilation} alt="Dryer vent cleaning services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </Link>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <Link to="/services/dryer-vent-cleaning" className="hover:text-blue-700 transition">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2 cursor-pointer">🔥 Professional Dryer Vent Cleaning</h2>
            </Link>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Fire Prevention</strong> – Prevent 15,000+ annual dryer fires.</li>
              <li><strong>Energy Savings</strong> – Reduce runtime by 30-50%.</li>
              <li><strong>Improved Efficiency</strong> – Faster drying, lower utility bills.</li>
              <li><strong>Complete Cleaning</strong> – Full vent system, not just lint trap.</li>
              <li><strong>Safety Inspection</strong> – Check for damage and proper installation.</li>
            </ul>
            <Link
              to="/services/dryer-vent-cleaning"
              className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* 7️⃣ Emergency Services - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto'><img src={emergency} alt="Emergency services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🚨 Emergency Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>After Hours Service</strong> – Emergency services provided between 5pm–9pm and weekends.*</li>
              <li><strong>Immediate Response</strong> – Fast action to restore comfort.</li>
              <li><strong>Emergency Repairs</strong> – Rapid, effective fixes when it matters.</li>
              <li><strong>Direct Support</strong> – Call us anytime for urgent needs.</li>
              <li><strong>Peace of Mind</strong> – Your comfort and safety are our top priorities.</li>
              <li className="italic text-xs">*Additional charges may apply for after hours services.</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <ManufacturerCarousel />
        </div>
      </section>
<Footer />
    </main>
  );
}