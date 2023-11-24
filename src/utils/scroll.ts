export const calculateScrollPercentage = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const documentHeight = document.documentElement.scrollHeight;

  const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

  return scrollPercentage;
};
