//IMPROVING UI EXP
const title = document.querySelector('.title-bar h2');
const imgOffsetTop = document.querySelector('.text-content h1').offsetTop;
const aboutTop = document.querySelector('.dev-info').offsetTop;

//about me autotype feature
const autoType = () => {
    let para = document.querySelector('article p');
    const text = `
    Thanks for taking time to look through my site! I'm a self taught Frontend Dev looking for my first junior role. 

    My skills lie in HTML, CSS and vanilla JS three core languages I am profficent in and love using. Complimented by a solid knowledge of Bootstrap and a basic understanding of Google Firestore. (A temporary solution until I sink my teeth in to backend programming!).
    
    My background is as an engineer in the manufacturing industry for 7 years, the nuclear sector to be precise.  Here I learned to love programming and solving problems creatively. Inevitably this lead me to Web Development due to desire for more complexity, challenge and progression. 

    Look through my site/projects if you like what you see and would like to hire me, get in touch and lets talk!`;

    const letters = text.split('');
        let i=0;
    setInterval(() => {
    if(i<letters.length){
        para.textContent += letters[i];
        i++;
    }
    }, 30);
};
let allowAutoType = true;

window.addEventListener('scroll', () => {
    if(scrollY >= imgOffsetTop){
        title.style.left = '-1000px';
        title.style.transition = 'all ease-in-out .4s'
    } else {
        title.style.left = '0px';
    }

    if(scrollY > aboutTop && allowAutoType === true){
        allowAutoType = false;
        autoType();
    }
});

//NAVIGATION
const nav = document.querySelector('.menuRight');
const menuBar = document.querySelector('.menu-bar');
const menuIcon = document.querySelector('.menu-icon')
const body = document.querySelector('body');
//Menu Nav

menuIcon.addEventListener('click', () => {
    if(nav.classList.contains('menuRight')) {
        menuIcon.style.transform = 'rotate(-40deg)';
        nav.classList.remove('menuRight');
        nav.classList.add('menuLeft');
        menuBar.classList.remove('left');
        menuBar.classList.add('right');
        body.classList.remove('scroll');
        body.classList.add('no-scroll');
    } else if (nav.classList.contains('menuLeft')) {
        menuIcon.style.transform = 'rotate(0deg)';
        nav.classList.remove('menuLeft');
        nav.classList.add('menuRight');
        menuBar.classList.remove('right');
        menuBar.classList.add('left');
        body.classList.remove('no-scroll');
        body.classList.add('scroll');
    } 
});


window.addEventListener('click', (e)=> {
    if(!e.target.contains(menuIcon, nav)){
        menuIcon.style.transform = 'rotate(0deg)';
        nav.classList.remove('menuLeft');
        nav.classList.add('menuRight');
        menuBar.classList.remove('right');
        menuBar.classList.add('left');
        body.classList.remove('no-scroll');
        body.classList.add('scroll');
    }
});


//Nav button controls
const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.scroll')
navBtns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        const eTarg = e.target.className;
        switch (eTarg) {
            case 'landing-page scroll':
            scrollTo({
                top: sections[0].offsetTop,
                behavior: 'smooth'
                });
            break;
            case 'about-Me scroll':
            scrollTo({
                top: sections[1].offsetTop,
                behavior: 'smooth'
                });
            break;
            case 'project scroll':
            scrollTo({
                top: sections[2].offsetTop,
                behavior: 'smooth'
                });
            break;
            case 'contacts scroll':
            scrollTo({
                top: sections[3].offsetTop,
                behavior: 'smooth'
                });
            break;
            case 'to-top scroll':
            scrollTo({
                top: sections[0].offsetTop,
                behavior: 'smooth'
                });
            break;
            case 'lets-talk scroll':
            scrollTo({
                top: sections[3].offsetTop,
                behavior: 'smooth'
                });
            break;
            default:
            console.log('ERROR in menu navigation controls');   
        }
    });
});