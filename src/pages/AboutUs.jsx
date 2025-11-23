import SEO from '../components/SEO';
import nateLogo from '../assets/images/nate.webp';
import Anjelica from '../assets/images/DSC_2077.webp'
import Josh from '../assets/images/DSC_2157.webp'
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <SEO
        title="About AMW Cooling & Heating | Veteran-Owned HVAC Conroe TX"
        description="Learn about AMW Cooling & Heating, a veteran-owned HVAC company serving Conroe, TX. Meet our team and discover our commitment to quality service."
        canonical="https://amwairconditioning.com/about"
        keywords="about AMW, veteran owned HVAC Conroe, HVAC company Conroe, AMW team"
      />

      {/* Page Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-8">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">About Us</h1>
            <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
              Discover the dedicated team and the unwavering mission behind AMW Cooling & Heating LLC.
            </p>
          </div>
        </section>

      {/* Story + Josh */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-12 animate-fade-in-up">
        <div className="order-2 lg:order-2 text-sm md:text-base text-gray-700">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Story</h3>
          <p>
            AMW Cooling & Heating LLC was founded with a clear mission: to provide reliable, high-quality HVAC services across Texas, with a strong focus on the needs of residential and light commercial customers. As a family- and veteran-owned business with over eight years of experience, Joshua and Anjelica are dedicated to ensuring that every home and business they serve enjoys year-round comfort and efficiency.
          </p>
        </div>
        <div className="order-1 lg:order-1">
          <div className="w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto">
            <img src={Josh} 
            alt="Joshua" 
              width="300"
             height="300"
            className="aspect-[1/1] max-w-[300px] object-cover -rotate-45"  loading="lazy" />
          </div>
        </div>
      </div>

      {/* Anjelica Bio */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 pb-12 animate-fade-in-up">
                  <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
          <img src={Anjelica}
          alt="Anjelica - co-owner of AMW Cooling & Heating" 
          width="300"
          height="300"
          className='object-cover -rotate-45 w-[300-px] h-[300-px]' loading="lazy"/>
        </div>
                  </div>
        <div className="order-1 lg:order-2 text-sm md:text-base text-gray-700">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Meet The Owners</h3>
          <p>
            As veterans, Josh and Anjelica have always lived by a strong sense of service—first to their country, and now to their community. With more than eight years of HVAC experience, Josh envisioned creating a company built on honesty, expertise, and unwavering dedication to customer care. Their business is founded on the same core values that guided them in the military: integrity, dedication, and a commitment to delivering the highest quality of service. Beyond their work, Josh enjoys quality time with family and exploring the great outdoors. Anjelica shares that same passion for family and giving back to the community.
          </p>
        </div>
      </div>

      {/* Credentials */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 pb-10 animate-fade-in-up">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Expertise and Credentials</h3>
          <p className="text-gray-700 max-w-xl mx-auto lg:mx-0">
            Our reputation as a trusted HVAC provider is built on a solid foundation of experience, industry certifications, and a relentless commitment to quality.
            When you choose AMW Cooling & Heating LLC, you're choosing a family-owned business dedicated to providing efficient, effective solutions that prioritize your comfort, safety, and satisfaction.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto">
            <img src={nateLogo} alt="NATE Certified" className="w-full h-full object-cover -rotate-45" loading="lazy"/>
          </div>
        </div>
      </div>

        {/* CTA */}
<div className="text-center pt-12 pb-24 animate-fade-in-up">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Schedule Your Consultation</h3>
        <p className="text-gray-800 max-w-lg mx-auto mb-4">
          At AMW Cooling & Heating, we specialize in a full range of HVAC solutions. Let Josh and Anjelica guide you through the process and deliver results you can rely on.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          Schedule a Consultation
        </button>
      </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
