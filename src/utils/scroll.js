// Utility functions for scrolling behavior in the application.

/**
 * scrollUp
 * - Scrolls the window to the top of the page instantly.
 * - Uses `window.scrollTo` with `behavior: 'instant'` for immediate scrolling.
 */
export const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

/**
 * scrollTo
 * - Scrolls to a specific element on the page by its ID.
 * - Finds the element using `document.getElementById`.
 * - If the element exists, uses `setTimeout` to delay the scroll by 100ms,
 *   then calls `scrollIntoView` with smooth behavior.
 *
 * @param {string} id - The ID of the element to scroll to.
 */
export const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
  }
};