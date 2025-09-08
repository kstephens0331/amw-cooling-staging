export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-PHMH5V5651', {
      page_path: url,
    });
  } else {
    console.debug('pageview', url);
  }
};

// Track a custom event
export const event = (action, params = {}) => {
  if (window.gtag) {
    window.gtag('event', action, params);
  } else {
    console.debug('event', action, params);
  }
};
export const initGA = () => {
  if (!window.gtag) return;
  window.gtag('config', 'G-PHMH5V5651', {
    cookie_domain: 'amwaircondition.com',
    cookie_flags: 'SameSite=Lax;Secure',
    // GA4 anonymize_ip is on by default; no need to set
  });
};