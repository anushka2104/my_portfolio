document.querySelectorAll('nav ul li a').forEach((link, index) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});
