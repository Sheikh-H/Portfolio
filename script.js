  window.addEventListener('load', () => {
    const header = document.querySelector('header');
    setTimeout(() => {
      header.classList.add('expanded');
    }, 2000); // after animation ends
  });





  document.addEventListener("DOMContentLoaded", () => {
  const section1 = document.querySelector(".section1");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section1.classList.add("reveal");
        observer.unobserve(section1); // Ensures it only runs once
      }
    });
  }, {
    threshold: 0.5 // Adjust how much is visible before it triggers "only run when the item is 50% in view"
  });

  observer.observe(section1);
});
