function tabs() {
    const cardsBlock = document.querySelectorAll('.prices__cards'),
        tabNavigation = document.querySelectorAll('.js-prices-tab');

    let i = 0,
        active = '';

    tabs(i);

    function tabs(i) {
        cardsBlock[i].classList.add('prices__cards-active');
        tabNavigation[i].classList.add('navigation__link-active');

        tabNavigation.forEach((currentTab, index) => {
            currentTab.addEventListener('click', (event) => {
                event.preventDefault();
                tabNavigation.forEach(e => {
                    e.classList.remove('navigation__link-active');
                })
                currentTab.classList.add('navigation__link-active');

                cardsBlock.forEach(e => {
                    e.classList.remove('prices__cards-active');

                });
                cardsBlock[index].classList.add('prices__cards-active');
            })
        })
    }
}

export default tabs;
