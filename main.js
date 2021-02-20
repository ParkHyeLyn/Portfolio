'Use Strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect();

document.addEventListener("scroll",()=>{
  if(window.pageYOffset > navbarHeight.height){
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// scroll  to the section when the button is clicked
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener("click",(event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return; 
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
});

