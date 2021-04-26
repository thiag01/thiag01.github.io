const sections = document.querySelectorAll('.js-scroll');



function animaScroll() {
     sections.forEach((section) => {
        const windowMetade = window.innerHeight * 0.8;
        const sectionTop = section.getBoundingClientRect().top - windowMetade;

        if (sectionTop < 0) {
            section.classList.add('ativo')
        }

     });

    }

window.addEventListener('scroll', animaScroll);
