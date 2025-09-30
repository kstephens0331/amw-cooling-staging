// src/components/TrustIndexWidget.jsx
import { useEffect, useRef } from "react";

const ACCOUNT_KEY = "a04627c54ff806690f16450a19e"; // your key from Trustindex snippet
const WIDGET_ID  = "a04627c54ff806690f16450a19e";  // often same as key; if Trustindex shows a different widget id, paste that here

export default function TrustIndexWidget({ className = "" }) {
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) {
      // script already present: ask Trustindex to scan DOM again (SPA-friendly)
      window?.Trustindex?.load?.();
      return;
    }
    const s = document.createElement("script");
    s.src = `https://cdn.trustindex.io/loader.js?${ACCOUNT_KEY}`;
    s.defer = true;
    s.async = true;
    document.body.appendChild(s);
    injectedRef.current = true;

    return () => {
      // keep the script for other routes; removing can break subsequent loads
    };
  }, []);

  return (
    <div className={className}>
      {/* This div must include the widget id */}
      <div className="ti-widget" data-widget-id={WIDGET_ID}></div>
      <noscript>
        <a href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+LLC+reviews">
          Read our Google reviews
        </a>
      </noscript>
    </div>
  );
}
