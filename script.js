/* Toggle Navbar Icon */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* Scroll Section Active Link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when navbar link clicked */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



 
/* Typed JS */

const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
  }); 