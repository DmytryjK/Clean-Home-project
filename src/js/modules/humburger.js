function humburgerMenu() {
    const hamburger = document.querySelector('.header__hamburger-menu_icon'),
	hamburgerMenu = document.querySelector('.header__hamburger-menu_nav'),
	navigationLinks = document.querySelectorAll('.header__hamburger-menu_link');

    hamburger.addEventListener('click', e => {
        if (hamburgerMenu.classList.contains('header__hamburger-menu_nav-active')) {
            hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');
            hamburger.classList.remove('header__hamburger-menu_icon-active');
            body.style.overflow = "visible";
        } else {
            hamburgerMenu.classList.add('header__hamburger-menu_nav-active');
            hamburger.classList.add('header__hamburger-menu_icon-active');
            body.style.overflow = "hidden";
        }
    });

    navigationLinks.forEach(e => {
        e.addEventListener('click', element => {
            hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');
            hamburger.classList.remove('header__hamburger-menu_icon-active');
            body.style.overflow = "visible";
        })
    });
}

export default humburgerMenu;
