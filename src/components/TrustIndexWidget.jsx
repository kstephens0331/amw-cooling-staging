import { useEffect, useRef } from "react";

const ACCOUNT_KEY = "a04627c54ff806690f16450a19e"; // replace if Trustindex shows a different one
const WIDGET_ID  = "a04627c54ff806690f16450a19e";  // often same as account key

export default function TrustIndexWidget({ className = "" }) {
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) {
      // Re-scan on SPA navigations
      if (window?.Trustindex?.load) window.Trustindex.load();
      return;
    }
    const s = document.createElement("script");
    s.src = `https://cdn.trustindex.io/loader.js?${ACCOUNT_KEY}`;
    s.defer = true;
    s.async = true;
    s.setAttribute('data-cfasync', 'false'); // prevent Rocket Loader meddling
    document.body.appendChild(s);
    injectedRef.current = true;
  }, []);

  return (
    <div className={className}>
      <div className="ti-widget" data-widget-id={WIDGET_ID} />
      <noscript>
        <a href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+LLC+reviews">
          Read our Google reviews
        </a>
      </noscript>
    </div>
  );
}
