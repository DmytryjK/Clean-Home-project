import { howToCleanCircle } from './components/howWeCleanCircle';
import { slider } from './components/slider';
import { accordion } from './components/accordion';
import validateForms from './components/formValidation';
import tabs from './components/tabs';
import hamburger from './components/hamburger';
import Popup from './components/popup';
import initSiteAnimations from './components/initAnimations';

const pageName = window.location.pathname.split('/').pop();

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	//General scripts
	hamburger();
	initSiteAnimations();

	//Footer validation email
	validateForms({ email: { required: true, email: true } }, { email: { email: 'Введите почту формата: example@mail.com' } }, '.footer__social-block__form', '.pop-up-thanks', '.btn-circle_opacity-footer');
	validateForms({ email: { required: true, email: true } }, { email: { email: 'Введите почту формата: example@mail.com' } }, '.footer__social-block__form-adaptive', '.pop-up-thanks', '.btn-circle_opacity-footer');

	if (pageName === 'review.html') {

		validateForms({ fio: { required: true }, tel: { required: true, phone: true }, email: { required: true, email: true } }, { tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' }, email: { email: 'Введите почту формата: example@mail.com' } },
			'.feedback-page__send-rightform', '.pop-up-thanks', '.feedback-page__submit-btn');
		
	} else {

		howToCleanCircle();
		slider();
		accordion();
		
		tabs('.js-prices-tab', '.prices__cards', 'prices__cards-active', 'navigation__link-active');
		tabs('.js-clean_btn', '.js__image', 'how-we-clean-active', 'navigation__link-active');

		//Popup(modalWindowSelector, targetSelector)
		new Popup('.pop-up-main', '[data-name="main_send-request"]').render();
		new Popup('.pop-up-main', '[data-name="main_send-request_adapt"]').render();
		new Popup('.pop-up-connectWithUs', '[data-name="main_connect_with_us"]').render();
		new Popup('.pop-up-connectWithUs', '[data-name="main_connect_with_us_adapt"]').render();
		new Popup('.pop-up-main', '.prices__cards-item').render();
		new Popup('.pop-up-main', '[data-name="moreServiceBtn"]').render();
		new Popup('.pop-up-main', '[data-name="servicesBtnNav"]').render();
		new Popup('.pop-up-main', '.promotion__carousel-item').render();
		new Popup('.pop-up-connectWithUs', '[data-name="send-a-question"]').render();

		// validations
		validateForms(
			{ tel: { required: true, phone: true } },
			{ tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },
			'.discount__form', '.pop-up-thanks', '.discount__submit-btn');

		validateForms(
			{ tel: { required: true, phone: true } },
			{ tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },
			'.discount__form-adapt', '.pop-up-thanks');

		validateForms({ number: { required: true }, fio: { required: true }, tel: { required: true, phone: true } }, { tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },
			'.pop-up-main__form', '.pop-up-thanks', '.pop-up-main__btn');
			
	}
})
