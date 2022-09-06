import humburgerMenu from './modules/humburger';
import slider from './modules/promoSlider';
import accordion from './modules/accordion';
import popup from './modules/popup';
import {forms, formClear} from './modules/formValidate';
import tabNavigation from './modules/tabNavigation';
import howToCleanCircle from './modules/howToCleanCircleEffects';

window.addEventListener('DOMContentLoaded', () => {
	const promotion = document.querySelector('.promotion');
	const aboutUs = document.querySelector('.about-us');

	if (promotion && aboutUs) {
		slider();
		accordion();
	} 

	humburgerMenu();
	popup();
	howToCleanCircle();
	forms();

	tabNavigation('.js-prices-tab', '.prices__cards', 'prices__cards-active', 'navigation__link-active');
	tabNavigation('.js-clean_btn', '.js__image', 'how-we-clean-active', 'navigation__link-active');
	
});