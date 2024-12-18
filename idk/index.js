const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.pageYOffset;

    if (scrollY > sectionTop - sectionHeight * 0.75 && scrollY < sectionTop + sectionHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});