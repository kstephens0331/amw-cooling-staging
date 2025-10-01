import React, { useEffect, useMemo, useState } from 'react';
import { IoClose } from 'react-icons/io5';

// 🔧 Set your Calendly/service booking link here
const CALENDLY_URL = 'https://calendly.com/admin-amwairconditioning?embed_domain=www.amwairconditioning.com&embed_type=Inline'; // <-- replace

// Helper: within September 2025 (local time)
const isActivePromoWindow = (now = new Date()) => {
  const start = new Date(2025, 9, 1, 0, 0, 0);  // Sep 1, 2025
  const end   = new Date(2025, 10, 1, 0, 0, 0);  // Oct 1, 2025 (exclusive)
  return now >= start && now < end;
};

const IncentiveBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const active = useMemo(() => isActivePromoWindow(), []);

  useEffect(() => {
    const flag = window.localStorage.getItem('amw_promo_sep2025_dismissed');
    if (flag === '1') setDismissed(true);
  }, []);

  const handleClose = () => {
    setDismissed(true);
    window.localStorage.setItem('amw_promo_sep2025_dismissed', '1');
  };

  // Countdown to Oct 1, 2025
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const deadline = new Date(2025, 10, 1, 0, 0, 0);
  const remainingMs = Math.max(0, deadline - now);
  const days    = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((remainingMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingMs / (1000 * 60)) % 60);

  if (!active || dismissed) return null;

  return (
    <div className="w-full bg-orange-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        {/* Copy */}
        <div className="flex-1">
          <p className="text-sm md:text-base font-semibold">
            🔥 September Special: <span className="underline decoration-white/60">Get a free dryer vent inspection/cleaning with the purhcase of a yearly maintenance plan!</span>
          </p>
          <p className="text-[12px] md:text-sm text-white/90">
            Book by Sep 30 · Conroe, The Woodlands, Spring & nearby · Licensed & insured · Veteran-owned
          </p>
        </div>

        {/* Countdown */}
        <div className="hidden md:flex items-center text-sm font-medium bg-white/10 rounded-full px-3 py-1">
          Ends in&nbsp;
          <span className="font-bold">{days}d {hours}h {minutes}m</span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={CALENDLY_URL}
            className="rounded-md bg-white text-orange-700 text-sm md:text-base font-semibold px-3 py-2 hover:bg-white/90 transition"
          >
            Book Online
          </a>
          <a
            href="tel:19365877612"
            className="rounded-md bg-orange-800 text-white text-sm md:text-base font-semibold px-3 py-2 hover:bg-orange-900 transition"
          >
            Call Now
          </a>
        </div>

        {/* Dismiss */}
        <button
          aria-label="Dismiss promotion"
          onClick={handleClose}
          className="ml-2 p-1 rounded-full hover:bg-white/10 transition"
        >
          <IoClose size={22} />
        </button>
      </div>
    </div>
  );
};

export default IncentiveBanner;
