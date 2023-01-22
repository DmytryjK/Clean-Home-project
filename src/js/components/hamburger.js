import {userScrollbarWidth} from '../services/userScrollWidth/userScrollWidth';

function hamburger() {

    const hamburger = document.querySelector('.header__hamburger-menu_icon'),
        hamburgerMenu = document.querySelector('.header__hamburger-menu_nav'),
        navigationLinks = document.querySelectorAll('.header__hamburger-menu_link'),
        body = document.querySelector('body'),
        html = document.querySelector('html');

    hamburger.addEventListener('click', e => {
        if (hamburgerMenu.classList.contains('header__hamburger-menu_nav-active')) {
            hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');
            hamburger.classList.remove('header__hamburger-menu_icon-active');
            body.style.cssText = "overflow: visible";
            html.style.cssText = "padding-right: 0px";
        } else {
            hamburgerMenu.classList.add('header__hamburger-menu_nav-active');
            hamburger.classList.add('header__hamburger-menu_icon-active');
            body.style.cssText = "overflow: hidden";
            html.style.cssText = `padding-right: ${userScrollbarWidth()}px`;
        }
    })

    navigationLinks.forEach(e => {
        e.addEventListener('click', element => {
            hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');
            hamburger.classList.remove('header__hamburger-menu_icon-active');
            body.style.overflow = "visible";
        })
    })
}

export default hamburger;
