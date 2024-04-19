window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { // Change 100 to the desired pixel value
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  