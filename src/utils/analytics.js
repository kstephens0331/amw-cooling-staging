import { logger } from './logger';

export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-PHMH5V5651', {
      page_path: url,
      client_storage: 'none',
    });
  } else {
    logger.debug('pageview', url);
  }
};

// Track a custom event
export const event = (action, params = {}) => {
  if (window.gtag) {
    window.gtag('event', action, params);
  } else {
    logger.debug('event', action, params);
  }
};

export const initGA = () => {
  if (!window.gtag) return;
  window.gtag('js', new Date());
  window.gtag('config', 'G-PHMH5V5651', { client_storage: 'none' });
};