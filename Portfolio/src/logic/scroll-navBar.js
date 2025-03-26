document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log("EJECUTO")
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const navbarHeight = document.querySelector('header').offsetHeight;
      const offsetTop = target.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });