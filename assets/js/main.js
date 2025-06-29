/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content, .form-container, .testimonial-track, .section-title, .section-subtitle`, {
    interval: 200
})

// FONT CNAHE EVENT HERO SECTION
  document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typed-text", {
      strings: ["Websites", "Designs", "Branding", "Everything"],
      typeSpeed: 100,       // typing speed
      backSpeed: 50,        // backspacing speed
      backDelay: 1500,      // delay before backspacing
      loop: true            // loop forever
    });
  });


  //client review testomonials
  const track = document.querySelector('.testimonial-track');
  track.innerHTML += track.innerHTML;
//client review testomonials


//Service Section Icons Chage Effect
 const iconLoops = {
    'graphic-icon': [
      'icons/photoshop.png', 'icons/illustrator.png', 'icons/indesign.png', 'icons/lightroom.png', 'icons/figma.png', 'icons/xd.png', 'icons/canva.png', 'icons/coreldraw.png','icons/premiere.png',  'icons/aftereffects.png'
    ],
    'webdev-icon': [
      'icons/html.png', 'icons/css.png', 'icons/js.png', 'icons/php.png', 'icons/angular.png', 'icons/react.png',  'icons/mysql.png'
    ],
    'typeset-icon': [
      'icons/indesign.png', 'icons/illustrator.png', 'icons/excel.png', 'icons/powerpoint.png', 'icons/word.png'
    ],
    'video-icon': [
      'icons/premiere.png', 'icons/capcut.png', 'icons/aftereffects.png'
    ],
    'photo-icon': [
      'icons/photoshop.png', 'icons/lightroom.png'
    ]
  };

  // for (let key in iconLoops) {
  //   let index = 0;
  //   const element = document.getElementById(key);
  //   element.style.backgroundImage = `url(${iconLoops[key][index]})`;

  //   setInterval(() => {
  //     element.style.opacity = 0;
  //     setTimeout(() => {
  //       index = (index + 1) % iconLoops[key].length;
  //       element.style.backgroundImage = `url(${iconLoops[key][index]})`;
  //       element.style.opacity = 1;
  //     }, 500);
  //   }, 1500);
  // }

  //Service Section Icons Chage Effect



  for (let key in iconLoops) {
  let index = 0;
  const element = document.getElementById(key);

  if (!element) {
    console.warn(`Element with ID '${key}' not found.`);
    continue; // Skip this key if no element is found
  }

  element.style.backgroundImage = `url(${iconLoops[key][index]})`;

  setInterval(() => {
    element.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % iconLoops[key].length;
      element.style.backgroundImage = `url(${iconLoops[key][index]})`;
      element.style.opacity = 1;
    }, 500);
  }, 1500);
}



function openWhatsApp(serviceName) {
  const phoneNumber = '94714695753'; // replace with your number
  const message = `Hi, ${serviceName}?`;
  const encodedMessage = encodeURIComponent(message);

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, '_blank');
}





//email js Contact us now


//  window.onload = function () {
//     emailjs.init("mvWd6lGac7-wv9iRh"); 

//     document.getElementById("Form").addEventListener("submit", function (e) {
//       e.preventDefault();

//       emailjs.sendForm("service_nkpzk3o", "template_fvgi4av", this)
//         .then(() => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Message Sent!',
//             text: '✅ We received your message. We will reply soon.',
//             background: isDarkMode() ? '#1e1e1e' : '#ffffff',
//             color: isDarkMode() ? '#ffffff' : '#d32f2f',
//             confirmButtonColor: '#d32f2f'
//           });
//           this.reset();
//         }, (error) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops!',
//             text: '❌ Failed to send message. Please try again later.',
//             background: isDarkMode() ? '#1e1e1e' : '#ffffff',
//             color: isDarkMode() ? '#ffffff' : '#d32f2f',
//             confirmButtonColor: '#d32f2f'
//           });
//           console.error("EmailJS error:", error);
//         });
//     });

//     function isDarkMode() {
//       return document.documentElement.classList.contains("dark") || 
//              window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//   };



function isValidEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!isValidEmail(email)) {
    Swal.fire({
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
      icon: 'warning',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
    return;
  }

  var params = {
    name: name,
    email: email,
    user_message: message
  };

  emailjs.send("service_nkpzk3o", "template_fvgi4av", params)
    .then(function (res) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent.',
        icon: 'success',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      clearForm(); // 🧼 Clear the form
    }, function (error) {
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong!',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    });
}



/*==================== Start INtro ANIMATION ====================*/

function startWebsite() {
  const intro = document.getElementById('introScreen');
  const content = document.getElementById('mainContent');
  const body = document.body;

  window.scrollTo(0, 0); // ⬆️ Fix: ensure scroll goes to top before animation ends

  intro.classList.add('fade-out');

  setTimeout(() => {
    intro.style.display = 'none';
    content.style.display = 'block';
    body.style.backgroundColor = "#f8f8f8";
    body.style.color = "#222";

    // 🔧 Fix layout not updating
    content.offsetHeight;
    window.dispatchEvent(new Event('resize'));
  }, 1000);
}