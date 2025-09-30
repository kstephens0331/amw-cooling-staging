// src/components/TrustIndexWidget.jsx
import { useEffect } from "react";

const KEY = "a04627c54ff806690f16450a19e"; // your widget/account key

function inject(src, id) {
  if (document.getElementById(id)) return Promise.resolve("already");
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.defer = true;
    s.setAttribute("data-cfasync", "false");
    s.src = src;
    s.onload = () => resolve("loaded");
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export default function TrustIndexWidget() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        // Try main loader first
        await inject(`https://cdn.trustindex.io/loader.js?${KEY}`, "ti-loader");
        // Give Trustindex a moment to register, then (re)scan
        setTimeout(() => !cancelled && (window.Trustindex?.load?.()), 50);

        // If still no global after a short delay, try the certificate loader
        setTimeout(async () => {
          if (!cancelled && !window.Trustindex) {
            await inject(`https://cdn.trustindex.io/loader-cert.js?${KEY}`, "ti-loader-cert");
            setTimeout(() => !cancelled && (window.Trustindex?.load?.()), 50);
          }
        }, 500);
      } catch (e) {
        // Optional: log for debugging
        console.warn(e);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return <div className="ti-widget" data-widget-id={KEY} />;
}
