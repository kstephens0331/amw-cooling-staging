import { Link } from 'react-router-dom';
import hero from '../assets/images/DSC_2135-1920.webp';
import hero400 from '../assets/images/DSC_2135-400.webp';
import hero769 from '../assets/images/DSC_2135-769.webp';
import hero800 from '../assets/images/DSC_2135-800.webp';

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
<img
        src={hero}
        srcSet={`${hero400} 400w, ${hero769} 769w, ${hero800} 800w, ${hero} 1920w`}
        sizes="100vw"
        alt="AMW Cooling & Heating HVAC service truck in Conroe TX at sunset - veteran-owned AC repair and heating company - call (936) 331-1339"
        width="1920"
        height="1027"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-10" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 h-full w-full flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 py-6 gap-y-6 md:gap-y-0">
        {/* LEFT CTA */}
        <div className="self-start text-black text-left max-w-md md:max-w-lg animate-fade-in-down">
            <h1 className="text-lg md:text-4xl font-bold">Your Trusted HVAC Experts in Texas</h1>
            <p className="text-xs md:text-base font-medium mt-2 mb-4">
            Reliable installations, repairs, and maintenance to keep your home comfortable year-round.
          </p>
          <Link
            to="/contact"
            className="inline-block px-3 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs font-semibold"
          >
            Schedule Your Consultation
          </Link>
        </div>

        {/* RIGHT REVIEW CTA */}
        <div className="self-start text-black text-left md:text-right max-w-md md:max-w-lg md:ml-8 animate-fade-in-up-delay">
          <h2 className="text-base md:text-2xl font-bold mb-1">Enjoyed Our Service?</h2>
          <p className="text-xs md:text-base font-medium mb-3">
            Help other homeowners find us — leave a review on Google!
          </p>
          <a
            href="https://g.page/r/CS99Sm7SPdvPEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-sm md:text-base font-bold"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
