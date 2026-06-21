export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return (scrollTop / docHeight) * 100;
};

export const getCurrentSection = (sectionIds) => {
  const scrollPosition = window.scrollY + 100;

  for (let id of sectionIds) {
    const element = document.getElementById(id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        return id;
      }
    }
  }
  return sectionIds[0];
};
