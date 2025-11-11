import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "AMW Cooling & Heating | HVAC Services Conroe TX",
  description = "Expert HVAC, AC repair & heating services in Conroe, TX. Veteran-owned, licensed & insured. 24/7 emergency service.",
  canonical = "https://amwairconditioning.com",
  keywords = "HVAC Conroe, AC repair Conroe, heating repair Conroe, air conditioning Conroe TX",
  image = "https://amwairconditioning.com/assets/images/DSC_2135-1920.webp"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
