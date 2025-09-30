export default function TrustIndexWidget({ height = 360 }) {
  const src =
    "https://cdn.trustindex.io/amp-widget.html#a04627c54ff806690f16450a19e"; // your key

  return (
    <iframe
      title="AMW Cooling & Heating — Reviews"
      src={src}
      loading="lazy"
      style={{ width: "100%", height, border: 0 }}
      sandbox="allow-scripts allow-same-origin"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}