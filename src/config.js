/**
 * Dynamic configuration for the application environment.
 * Detects if the app is running in a subdirectory (like GitHub Pages or Local Development with basename)
 * or at the root domain (like Vercel Production).
 */

const isSubdirectoryPath = 
  window.location.hostname === 'localhost' || 
  window.location.hostname.includes('github.io');

export const BASE_PATH = isSubdirectoryPath ? '/eduvallve_portfolio' : '';

export const ADMIN_BASE_PATH = `${BASE_PATH}/admin`;
