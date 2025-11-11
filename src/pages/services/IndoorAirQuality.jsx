import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const IndoorAirQuality = () => {
  return (
    <>
      <SEO
        title="Indoor Air Quality Conroe TX | Air Purification & Filtration | AMW"
        description="Improve indoor air quality in Conroe, TX with HEPA filtration, UV purification, dehumidifiers. Remove allergens, mold, bacteria. Call (936) 331-1339!"
        canonical="https://amwairconditioning.com/services/indoor-air-quality"
        keywords="indoor air quality Conroe, air purification Conroe TX, HEPA filter installation, UV air purifier, whole home dehumidifier, air quality testing Conroe"
      />

      <ServiceSchema
        service={{
          name: "Indoor Air Quality Solutions",
          description: "Comprehensive indoor air quality solutions including filtration, purification, and humidity control in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Indoor Air Quality", path: "/services/indoor-air-quality" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Indoor Air Quality Solutions in Conroe, TX
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Breathe cleaner, healthier air with professional air quality solutions
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
              Professional Indoor Air Quality Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The EPA states that indoor air can be 2-5 times more polluted than outdoor air. In Conroe's humid
              climate with high pollen counts, seasonal allergens, and occasional air quality issues from nearby
              Houston, maintaining healthy indoor air is critical for your family's wellbeing. AMW Cooling & Heating
              provides comprehensive solutions to ensure you breathe clean, comfortable air year-round.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Indoor Air Quality Matters in Conroe
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Montgomery County faces unique air quality challenges: oak pollen in spring, ragweed in fall,
              high humidity that promotes mold growth, and proximity to Houston's urban air quality issues.
              Poor indoor air quality can trigger allergies, worsen asthma, cause respiratory irritation,
              and lead to fatigue and headaches. Children, elderly family members, and those with existing
              respiratory conditions are especially vulnerable.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Signs You Need Indoor Air Quality Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Family members experiencing increased allergy or asthma symptoms</li>
              <li>Frequent respiratory infections, colds, or sinus problems</li>
              <li>Musty or stale odors in your home</li>
              <li>Excessive dust accumulation shortly after cleaning</li>
              <li>Condensation on windows or visible mold growth</li>
              <li>Home feels humid or stuffy despite running AC</li>
              <li>Pet dander affecting family members</li>
              <li>New construction or recent renovation</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Our Indoor Air Quality Solutions
            </h3>

            <h4 className="font-semibold text-blue-800 mb-2 mt-4">Advanced Air Filtration Systems</h4>
            <p className="text-gray-700 mb-3">
              Standard HVAC filters only capture large particles. Our advanced filtration systems remove microscopic
              contaminants for dramatically cleaner air:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>HEPA Filtration</strong> - Captures 99.97% of particles as small as 0.3 microns including pollen, dust mites, pet dander, and mold spores</li>
              <li><strong>High-MERV Filters</strong> - MERV 11-16 rated filters for superior particle capture without restricting airflow</li>
              <li><strong>Media Air Cleaners</strong> - Whole-home filtration with large surface area for maximum efficiency</li>
              <li><strong>Electronic Air Cleaners</strong> - Use electrical charge to capture particles too small for standard filters</li>
              <li><strong>Carbon Filters</strong> - Remove odors, VOCs (volatile organic compounds), and chemical fumes</li>
            </ul>

            <h4 className="font-semibold text-blue-800 mb-2 mt-4">UV Air Purification Systems</h4>
            <p className="text-gray-700 mb-3">
              Germicidal UV lights installed in your HVAC system destroy biological contaminants at the DNA level:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Bacteria & Virus Elimination</strong> - UV-C light neutralizes airborne pathogens before they circulate</li>
              <li><strong>Mold Prevention</strong> - Prevents mold growth on evaporator coils in Conroe's humid climate</li>
              <li><strong>24/7 Protection</strong> - Continuous purification whenever your HVAC system operates</li>
              <li><strong>Chemical-Free</strong> - No ozone or chemical byproducts, safe for all family members</li>
              <li><strong>Reduced Maintenance</strong> - Keeps coils cleaner, improving system efficiency</li>
            </ul>

            <h4 className="font-semibold text-blue-800 mb-2 mt-4">Whole-Home Dehumidification</h4>
            <p className="text-gray-700 mb-3">
              Conroe's humidity often exceeds comfortable levels even with AC running. Excess moisture promotes
              mold growth, dust mites, and discomfort:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Precise Humidity Control</strong> - Maintain ideal 30-50% humidity levels automatically</li>
              <li><strong>Mold & Mildew Prevention</strong> - Eliminate conditions that allow biological growth</li>
              <li><strong>Improved Comfort</strong> - Lower humidity makes your home feel cooler at higher temperatures</li>
              <li><strong>Energy Savings</strong> - More comfortable at 76°F with low humidity vs. 72°F with high humidity</li>
              <li><strong>Protects Your Home</strong> - Prevents wood damage, paint peeling, and musty odors</li>
              <li><strong>Allergen Reduction</strong> - Dust mites can't survive in properly controlled humidity</li>
            </ul>

            <h4 className="font-semibold text-blue-800 mb-2 mt-4">Ventilation & Fresh Air Systems</h4>
            <p className="text-gray-700 mb-3">
              Modern homes are sealed tight for energy efficiency, but this traps contaminants inside. Fresh air
              ventilation solves this problem:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Energy Recovery Ventilators (ERV)</strong> - Bring in fresh outdoor air while recovering heating/cooling energy</li>
              <li><strong>Heat Recovery Ventilators (HRV)</strong> - Exchange stale indoor air for fresh outdoor air efficiently</li>
              <li><strong>Balanced Ventilation</strong> - Controlled air exchange prevents negative pressure issues</li>
              <li><strong>VOC Removal</strong> - Eliminate off-gassing from furniture, carpets, and building materials</li>
              <li><strong>Continuous Fresh Air</strong> - Maintain healthy air quality without wasting energy</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Benefits of Improved Indoor Air Quality
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Healthier Family</strong> - Reduce allergy and asthma symptoms, fewer respiratory infections</li>
              <li><strong>Better Sleep</strong> - Cleaner air and proper humidity improve sleep quality</li>
              <li><strong>Odor Elimination</strong> - Remove pet, cooking, and musty odors</li>
              <li><strong>Mold Prevention</strong> - Critical in Conroe's humid climate</li>
              <li><strong>Cleaner Home</strong> - Less dust means less cleaning</li>
              <li><strong>Protected HVAC System</strong> - Cleaner air means less strain on equipment</li>
              <li><strong>Improved Comfort</strong> - Humidity control makes your home feel more comfortable</li>
              <li><strong>Higher Home Value</strong> - Air quality systems are attractive to buyers</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Custom Solutions for Your Home
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Every home has unique air quality needs. During your consultation, our technicians assess your
              specific concerns—whether it's allergies, humidity, odors, or general air quality—and recommend
              the most effective combination of solutions. We work with all major HVAC systems and can retrofit
              air quality equipment into existing setups or integrate it into new installations.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Why Choose AMW for Air Quality Solutions?
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Expert assessment of your home's specific air quality needs</li>
              <li>Installation of all major air quality brands and systems</li>
              <li>Licensed, insured HVAC technicians</li>
              <li>Custom solutions tailored to Conroe's climate</li>
              <li>Transparent pricing with free estimates</li>
              <li>Ongoing maintenance and filter replacement services</li>
              <li>100% satisfaction guarantee</li>
              <li>Veteran-owned and locally operated</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                Ready to Breathe Cleaner Air?
              </h2>
              <p className="text-gray-700 mb-4">
                Don't let poor air quality affect your family's health and comfort. Contact AMW Cooling & Heating
                for professional indoor air quality solutions in Conroe, TX.
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
                  Schedule Consultation
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

export default IndoorAirQuality;
