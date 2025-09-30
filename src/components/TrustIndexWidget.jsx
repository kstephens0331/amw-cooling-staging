import { useEffect } from "react";

export default function TrustIndexWidget() {
  useEffect(() => {
    if (document.getElementById("ti-loader")) {
      window?.Trustindex?.load?.();
      return;
    }
    const s = document.createElement("script");
    s.id = "ti-loader";
    s.async = true;
    s.defer = true;
    s.setAttribute("data-cfasync", "false");
    s.src = "https://cdn.trustindex.io/loader.js?a04627c54ff806690f16450a19e";
    document.body.appendChild(s);
  }, []);

  return <div className="ti-widget" data-widget-id="a04627c54ff806690f16450a19e" />;
}