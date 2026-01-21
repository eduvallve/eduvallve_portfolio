export const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

export const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
  }
};