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


// Make Home transparent slowly as scroll down
// 1.스크롤 이벤트(스크롤이 홈의 2분의 1이 되었을 때) 2.opacity: 0.5 3.애니메이션 효과

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
  const opacity = 1- (window.scrollY / homeHeight);
  home.style.opacity= opacity;
  homeContactBtn.style.opacity= opacity;
  homeContactBtn.addEventListener("mouseover",()=>{
    homeContactBtn.style.opacity= 1;
  });
  homeContactBtn.addEventListener("mouseleave",()=>{
    homeContactBtn.style.opacity= opacity;
  });
})





function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}
