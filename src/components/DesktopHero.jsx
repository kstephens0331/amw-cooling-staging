import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hero from '../assets/images/DSC_2135-1920.webp';

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
<img
        src={hero}
        alt="AMW Cooling & Heating HVAC service truck in Conroe TX at sunset - veteran-owned AC repair and heating company - call (936) 331-1339"
        width="1920"
        height="1080"
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
           className="self-start text-black text-left max-w-md md:max-w-lg"
        >
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
        </motion.div>

        {/* RIGHT REVIEW CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="self-start text-black text-left md:text-right max-w-md md:max-w-lg md:ml-8"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
