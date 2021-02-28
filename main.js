'Use Strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect();
alwaysDarkNav();

document.addEventListener("scroll",()=>{
  if(window.pageYOffset > navbarHeight.height){
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

//scroll to the section when the navbar menu items are clicked
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener("click",(event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return; 
  }
  //remove navbar menu item for small screen 
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});


// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener("click",()=>{
  navbarMenu.classList.toggle('open');
})
  
//Handle contact me button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener("click",()=>{
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



// show ArrowUp Btn when scroll down 
const arrowUpBtn = document.querySelector('.arrow-up');
document.addEventListener("scroll",()=>{
  if(window.scrollY < (homeHeight/2)){
    arrowUpBtn.classList.remove('visible');
  } else {
    arrowUpBtn.classList.add('visible');
  }
})


// Handle click on the "arrow up"button
const handleArrowUp = () => {
  scrollIntoView('#home');
  arrowUpBtn.removeEventListener('click', handleArrowUp);
  setTimeout(() => {
  arrowUpBtn.addEventListener('click', handleArrowUp);
  }, 1000);
};

arrowUpBtn.addEventListener('click', handleArrowUp);





// filtering project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener("click",(event)=>{
  const filter= event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  //remove selector from the previous and select the new one
  const active = document.querySelector('.category__btn.selected');
  const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  active.classList.remove('selected');
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(()=>{
    projects.forEach(project=>{
      if(project.dataset.type === filter || filter === '*'){
        project.classList.remove('invisible');
        
      }else{
        project.classList.add('invisible');
        projectContainer.classList.add('invisible');
      }
    })
    projectContainer.classList.remove('anim-out');
  },300);
})


// Make the menu item active when scroll down
// 1.스크롤 값이 섹션이 위에서부터 떨어져있는 값이랑 같아야한다
// 섹션이름 = 버튼의 데이터 셋 이름같으면 해당 버튼에 엑티브 클래스를 준다
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map( id => document.querySelector(id));
const navItems = sectionIds.map( id => document.querySelector(`[data-link="${id}"]`));
let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected){
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
}

// 처음에는 모든 entry가 찍힌다. (페이지가 만들어지자마자, 로드되자마자
// 그 섹션들이 밖으로 나가서)
const observerCallback = (entries,observer)=>{
  entries.forEach(entry => {
    if(!entry.isIntersecting && entry.intersectionRatio > 0){
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      if(entry.boundingClientRect.y < 0){
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
}

const observer = new IntersectionObserver(observerCallback,observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener("wheel",()=>{
  if(window.scrollY === 0){
    selectedNavIndex = 0;
  } else if(
    Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight
  ){selectedNavIndex = navItems.length-1;
  }
  selectNavItem(navItems[selectedNavIndex]);
})


function alwaysDarkNav(){
  if(window.pageYOffset > navbarHeight.height){
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
}

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
  selectNavItem(navItems[sectionIds.indexOf(selector)])
}