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

// scroll  to the section when the menu items are clicked
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener("click",(event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return; 
  }
  scrollIntoView(link);
});


//Handle contact me button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener("click",(event)=>{
  scrollIntoView('#contact');
})

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}