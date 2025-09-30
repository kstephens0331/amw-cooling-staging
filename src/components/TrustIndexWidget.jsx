import { useEffect, useRef } from "react";

const ACCOUNT_KEY = "a04627c54ff806690f16450a19e"; // replace if Trustindex shows a different one
const WIDGET_ID  = "a04627c54ff806690f16450a19e";  // often same as account key

export default function TrustIndexWidget({ className = "" }) {
  const injectedRef = useRef(false);

useEffect(() => {
  if (document.getElementById('ti-loader')) { window?.Trustindex?.load?.(); return; }
  const s = document.createElement('script');
  s.id = 'ti-loader';
  s.async = true;
  s.defer = true;
  s.setAttribute('data-cfasync', 'false');
  s.src = 'https://cdn.trustindex.io/loader.js?a04627c54ff806690f16450a19e';
  document.body.appendChild(s);
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
