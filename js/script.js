// ======= DARK THEME =======
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sum';

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-them');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>document.body.classList.contains(darkTheme)?'dark':'light'
const detCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sum'

// We need to validate if the use has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme == 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'uil-moon'?'add':'remove'](darkTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //Add or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-them', getCurrentTheme())
})
console.log("THEME SETTING IS WORKING!")

// ======= MENU SHOW Y HIDDEN =======
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ======= MENU SHOW =======
/* Validat if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// ======= MENU HIDE =======
/* Validat if the constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

console.log("MENU Y SETTING WORKING!")

// ======= REMOVE MENU PROFILE =======
const navlink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav_links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")


// ======= TYPEWRITER EFFECT =======

new Typewriter('#typewriter', {
  strings: ['Theodore.', 'Office-Staff.', 'Computer-Teacher.', 'Web-Developer.'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working!");

// ======= PORTFOLIO SWIPER =======
var swiper = new Swiper(".blog-slider", {
    //cssMode: true,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    //navigation: {
      //nextEl: ".swiper-button-next",
      //prevEl: ".swiper-button-prev",
    //},
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    //mousewheel: true,
    keyboard: true,
  });
console.log("Portfolio Swiper is working!")

// ======= SCROLL UP =======
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint / height, then the scroll up icon showId appear and on clicking should reach top the page
    if(this.scrollY >= 560 ){
        scrollup.classList.add('show-scroll');
    }else{
        scrollup.classList.remove('show-scroll');
    }
    console.log("Scroll up being called and working!");
}

window.addEventListener('scroll', scrollUp)

// ======= SCROLL SECTION ACTIVE HIGHLIGHT =======

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

    console.log("Section highlight working!");
}
window.addEventListener('scroll', scrollActive)