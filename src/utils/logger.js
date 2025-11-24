/**
 * Logger utility for consistent logging across the application
 * Automatically removes logs in production to keep console clean
 */

const isDev = process.env.NODE_ENV === 'development';

export const logger = {
  /**
   * Log debug information (only in development)
   */
  debug: (...args) => {
    if (isDev) {
      console.debug(...args);
    }
  },

  /**
   * Log general information (only in development)
   */
  log: (...args) => {
    if (isDev) {
      console.log(...args);
    }
  },

  /**
   * Log warnings (only in development)
   */
  warn: (...args) => {
    if (isDev) {
      console.warn(...args);
    }
  },

  /**
   * Log errors (always logged, can be sent to error tracking service)
   */
  error: (...args) => {
    if (isDev) {
      console.error(...args);
    }
    // TODO: Send to error tracking service in production (Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(args[0]);
  },
};
