
/* backgournd */
#navbar__and__home{
  background-image: url(imgs/home-background.png.png);
  background-position: contain;
  background-repeat: no-repeat;
  background-clip:padding-box;
}

/* navbar and home */
#navbar__and__home{
  padding: 0px;
}

/* navbar */

#navbar{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--side-padding);
  color: var(--white-color);
}

.navbar__logo{
  flex-basis: 30%;
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  font-size: var(--large-size);
  height:100%;
  
}
.navbar__logo__icon{
  margin-right:  var(--side-margin);
  width: var(--favicon-size);
  height: var(--favicon-size);
}

.navbar__menu{
  flex-basis: 50%;
  display:flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: var(--small-size);
  height:100%;
}

.navbar__menu__item{
  margin: 0 var(--side-margin);
  flex-shrink: 0;
}


/* home */

#home{
  padding-top: var(--side-padding);
  padding-bottom: var(--side-padding);
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: var(--white-color);
}

.home__avatar{
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  border: 1px solid var(--white-color);
}

.home__title{
  text-align: center;
  
}

.home__contact{
  text-align: center;
  font-size: var(--micro-size);
  font-weight: bold;
  color: var(--white-color);
  border: 1px solid var(--white-color);
  padding: 3px 8px;
  border-radius: 4px;
}


/* About me */

#about{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}

.about__majors{
  display: flex;
  justify-content: space-around;
  margin: var(--content-margin) 0px;
  
}

.major{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  
}

.major__icon{
  width:100px;
  height:100px;
  border-radius: 50%;
  border: 1px solid var(--pink-color);
  padding: var(--icon-padding);
}

.major__icon i{
  font-size:  var(--icon-medium-size);
  color: var(--pink-color);
  
}

.major__title{
  font-weight: bold;
  font-size: var(--medium-size);
  margin: var(--side-margin);
}

.major__description{
  font-size: var(--micro-size);
}

.job{
  display: flex;
  align-items: center;
  padding: 0 var(--content-padding);
}

.job_logo{
  height: var(--logo-size);
  width: calc(var(--logo-size)*2);
  margin-right: var(--side-margin);
}

.job__description{
  display:flex;
  flex-direction: column;
  font-size: calc(var(--micro-size)/2);
}


/* skills */
h2{
  margin: var(--side-margin);
}

.skillset{
  margin-top: calc(var(--content-margin)/2);
  /* color: var(--white-color); */
  display: flex;
  justify-content: space-around;
  width: 800px;
  height:400px;
  
  
}

.skillset__left{
  background-color: var(--dark-grey-color);
  text-align: center;
  flex-basis: 50%;
}
/* 너 왜 색깔 안먹니.... */
.skillset__right{
  background-color: var(--ligh-grey-color);
  flex-basis: 50%;
}