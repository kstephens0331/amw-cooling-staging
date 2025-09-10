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

export const initGA = (mode = "firstparty") => {
  if (!window.gtag) return;

  const base = { };
  if (mode === "firstparty") {
    base.cookie_domain = "amwaircondition.com";
    base.cookie_flags = "SameSite=Lax;Secure";
  } else if (mode === "cookieless") {
    base.client_storage = "none";
  }

  window.gtag("config", "G-PHMH5V5651", base);
};