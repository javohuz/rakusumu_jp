document.addEventListener("DOMContentLoaded", function() {
  const logosContainer = document.querySelector('.logos');
  const logos = Array.from(logosContainer.children);
  
  const duplicatesNeeded = 10; // Number of times to duplicate logos

  // Duplicate the logos
  for (let i = 0; i < duplicatesNeeded; i++) {
      logos.forEach(logo => {
          const clone = logo.cloneNode(true);
          logosContainer.appendChild(clone);
      });
  }

  // Update the animation duration based on total logos
  const totalItems = logos.length * duplicatesNeeded;
  const slideWidth = 100 / totalItems; // Each logo takes equal width

  // Set keyframes dynamically
  const styleSheet = document.styleSheets[0];
  const keyframes = `
      @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${slideWidth * totalItems}%); }
      }
  `;
  
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
});


document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});
