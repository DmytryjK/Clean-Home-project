'use strict';

/*How To clean*/
const tabButton = document.querySelectorAll('.js-clean_btn'),
		  navigation = document.querySelector('.how-we-clean__navigation'),
		  image = document.querySelectorAll('.js__image'),
		  imageAdapt = document.querySelectorAll('.js__image-adapt'),
		  listBlockadaptive = document.querySelector('.how-we-clean__adaptation-block'),
		  listItemAdaptive = listBlockadaptive.querySelectorAll('.how-we-clean__adaptation-list');


function navigate () {
	navigation.addEventListener('click', e => {
		const id = e.target.dataset.id;
		if (id) {
			tabButton.forEach(btn => {
				btn.classList.remove("navigation__link-active");
			});
			e.target.classList.add("navigation__link-active");
			
			image.forEach(image => {
				image.classList.remove("how-we-clean-active");
			});
			const imageElement = document.getElementById(id);
			imageElement.classList.add("how-we-clean-active");

			const ImageDataName = e.target.dataset.name,
			currentListItem = document.getElementsByClassName(ImageDataName);


			// Adaptation list block
			listItemAdaptive.forEach(e => {
				e.classList.remove('how-we-clean__adaptation-list_active');
			});

			currentListItem[0].classList.add("how-we-clean__adaptation-list_active");
		}
	})
}


function howToClean() {
	let btn = document.querySelectorAll('.image-button');
	btn.forEach((e) => {
		e.addEventListener('mouseover', () => {
			e.classList.add('image-button_active');
			e.previousElementSibling.classList.add('image-descr_active');
		});
		e.addEventListener('mouseleave', () => {
			e.classList.remove('image-button_active');
			e.previousElementSibling.classList.remove('image-descr_active');
		});
	});
};
navigate ();
howToClean();


/*Promo slider*/ 


const nextBtn = document.querySelector('.promotion__carousel__btn-next'),
	  prevBtn = document.querySelector('.promotion__carousel__btn-prev'),
	  prevBtnStyle = prevBtn.querySelector('svg path'),
	  wrapper = document.querySelector('.promotion__carousel-wrapper'),
	  images = document.querySelectorAll('.promotion__carousel-item'),
	  promoCirclesBlock = document.querySelector('.promotion__circles'),
	  wrapperCircles = document.querySelector('.promotion__circles');

let Circles;
let counter = 0;


checkWindowSize();


const promoCircles = document.querySelectorAll('.promotion__circles-item');

circles(counter);

nextBtn.addEventListener('click', () => {
	nextSlide();
	prevBtnStyle.style.stroke = '#151515';
	if (window.screen.width > 988) {
		if(counter >= images.length / 2) {
			images.forEach(e => {
				e.style.transform = 'translateX(0)';
			})
			counter = -1;
			prevBtnStyle.style.stroke = '';
		} 
		counter ++;
		circles(counter);
	} else {
		if(counter > images.length / 2) {
			images.forEach(e => {
				e.style.transform = 'translateX(0)';
			})
			counter = -1;
			prevBtnStyle.style.stroke = '';
		} 
		counter ++;
		circles(counter);
	}
})

prevBtn.addEventListener('click', () => {
	prevSlide();
	
	if(counter <= 0) {
		images.forEach(e => {
			e.style.transform = 'translateX(0)';
		})
		counter = 1;
	}
	counter --;

	if (counter === 0) {
		prevBtnStyle.style.stroke = '#C3C3C3';
	}
	circles(counter);
})



function checkWindowSize() {
	if (window.screen.width > 988) {
		for (let i = 0; i < images.length - 1; i ++) {
			Circles = promoCirclesBlock.appendChild(document.createElement('div'));
			Circles.classList.add('promotion__circles-item');
		}
	} else {
		for (let i = 0; i < images.length; i ++) {
			Circles = promoCirclesBlock.appendChild(document.createElement('div'));
			Circles.classList.add('promotion__circles-item');
		}
	}
}

function circles(i) {
	promoCircles.forEach(e => {
		e.classList.remove('active');
	});

	promoCircles[i].classList.add('active');

	wrapperCircles.addEventListener('click', (event) => {
		const target = event.target;
	
		if(target && target.classList.contains('promotion__circles-item')) {
			promoCircles.forEach((item, index) => {

				if(target == item) {
					promoCircles.forEach(e => {
						e.classList.remove('active');
					})
					target.classList.add('active');

					if (index <= images.length / 2) {
						images.forEach(element => {
							element.style.transform = `translateX(calc(${index}*(-100% - ${window.getComputedStyle(element).getPropertyValue("margin-right")})))`;
						});
						
						if (index <= images.length / 2) {
							index++;
							prevBtnStyle.style.stroke = '#151515';
						} else {
							index = 0;
						}
						counter = index - 1;
						if (counter == 0) {
							prevBtnStyle.style.stroke = '#C3C3C3';
						}
					}
				}
			})
		}
	})
}

function prevSlide() {
	images.forEach(e => {
		e.style.transform += `translateX(calc(100% + ${window.getComputedStyle(e).getPropertyValue("margin-right")}))`;
	})
}
function nextSlide() {
	images.forEach(e => {
		e.style.transform += `translateX(calc(-100% - ${window.getComputedStyle(e).getPropertyValue("margin-right")}))`;
	});
}


/*Accordion*/
function accordion() {
	let btn = document.querySelectorAll('.about-us__accordion-btn');
	btn.forEach((e) => {
		e.addEventListener('click', () => {
			e.classList.toggle('about-us__accordion-btn_active');
			let text = e.nextElementSibling;
			if (text.style.maxHeight) {
				text.style.maxHeight = null;
				text.classList.remove('about-us__accordion-text_active');
			} else {
				text.style.maxHeight = text.scrollHeight + "px";
				text.classList.add('about-us__accordion-text_active');
			}
		});
	});
}

accordion();


/**** POP-UP-WINDOW Settings ****/

const popUp = document.querySelector('.pop-up-main'),
	  body = document.querySelector('body'),
	  close = document.querySelectorAll('.pop-up__close'),
	  wrapperModal = document.querySelector('.pop-up-main__wrapper'),
	  popUpMainInput = document.querySelectorAll('.pop-up-main__input'),
	  popUpConnectWithUs = document.querySelector('.pop-up-connectWithUs'),
	  sendRequestPopUpBtn = document.querySelector('.pop-up-main__btn');

function popUpWindow (event, modalWindow, input = popUpMainInput, emailInput = popUpMainInput) {
	event.preventDefault();
	modalWindow.classList.add('pop-up_active');
	body.style.overflow = 'hidden';
	popUpClose(modalWindow, input, emailInput);
	
	document.addEventListener('click', element => {
		if (element.target.classList.contains('pop-up_active')) {
			modalWindow.classList.remove('pop-up_active');
			body.style.overflow = 'visible';
		}
	});
}

function popUpClose(modalWindow, input, emailInput) {	

	close.forEach(currentClose => {
		currentClose.addEventListener('click', () => {
			modalWindow.classList.remove('pop-up_active');
			body.style.overflow = 'visible';
		})
	})

	document.onkeydown = (evt) => {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			modalWindow.classList.remove('pop-up_active');
			body.style.overflow = 'visible';
		}
	}	
	
	formClear(input);
	formClear(emailInput);
}

function formClear(input) {
	const errorValidate = document.querySelectorAll('.js-validate-error-label');
	errorValidate.forEach(itemError => {
		itemError.style.display = "none";
	});
	input.forEach(e => {
		e.value = "";
		e.style.border = "";
	})	
	
}

// ***** Отключаем для корректной валидации форм!!!!
// sendRequestPopUpBtn.addEventListener('click', (e) => {
// 	popUpWindow(e, popUpThanks);
// 	popUp.classList.remove('pop-up_active');
// })

	/*---Main Page POP-UP---*/

const mainConnectBtn = document.querySelector('[data-name="main_connect_with_us"]'),
	sendRequestBtn = document.querySelector('[data-name="main_send-request"]'),
	mainConnectBtnAdapt = document.querySelector('[data-name="main_connect_with_us_adapt"]'),
	sendRequestBtnAdapt = document.querySelector('[data-name="main_send-request_adapt"]');

mainConnectBtn.addEventListener('click', (event) => {
	popUpWindow(event, popUpConnectWithUs);
});
sendRequestBtn.addEventListener('click', (event) => {
	popUpWindow(event, popUp);
});

// Adaptation block
mainConnectBtnAdapt.addEventListener('click', (event) => {
	popUpWindow(event, popUpConnectWithUs);
});
sendRequestBtnAdapt.addEventListener('click', (event) => {
	popUpWindow(event, popUp);
});

	/*--- More-Service POP-UP---*/
const moreServiceBtn = document.querySelectorAll('[data-name="moreServiceBtn"]');

moreServiceBtn.forEach(e => {
	e.addEventListener('click', (event) => {
		popUpWindow(event, popUp);
	})
});


	/*--- Prices Cards Navigation & POP-UP ---*/ 

const cardsBlock = document.querySelectorAll('.prices__cards'),
	tabNavigation = document.querySelectorAll('.js-prices-tab'),
	cards = document.querySelectorAll('.prices__cards-item');
	  
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

cards.forEach(currentCard => {
	currentCard.addEventListener('click', (event) => {
		popUpWindow(event, popUp);
	})
})

	/*--- Services POP-UP ---*/ 

const servicesBtnNav = document.querySelectorAll('[data-name="servicesBtnNav"]');

servicesBtnNav.forEach(currentCard => {
	currentCard.addEventListener('click', (event) => {
		popUpWindow(event, popUp);
	})
})


	/*--- Promotion POP-UP ---*/

const promotionCardItem = document.querySelectorAll('.promotion__carousel-item'),
	promotionCardBtn = document.querySelectorAll('[data-name="promotionBtnNav"]');

	promotionCardItem.forEach(currentCard => {
		currentCard.addEventListener('click', (event) => {
			popUpWindow(event, popUp);
		})
	})
	promotionCardBtn.forEach(currentCard => {
		currentCard.addEventListener('click', (event) => {
			popUpWindow(event, popUp);
		})
	})


	/*--- About-Us POP-UP ---*/
	const aboutUsNavBtn = document.querySelectorAll('[data-name="send-a-question"]');

aboutUsNavBtn.forEach(currentCard => {
	currentCard.addEventListener('click', (event) => {
		popUpWindow(event, popUpConnectWithUs);
	})
})


// Discount Form Submit

const discountSubmitBtn = document.querySelector('.discount__submit-btn'),
	popUpThanks = document.querySelector('.pop-up-thanks'),
	inputPhoneNumber = document.querySelectorAll('.discount__phone-number'),
	inputEmailFooter = document.querySelectorAll('.footer__social-block__input');


let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+38 (099) 999-99-99');
im.mask(inputs);


// validate

function validateForms(selector, rules) {

    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            popUpWindow(event, popUpThanks, inputPhoneNumber, inputEmailFooter);
			popUp.classList.remove('pop-up_active');
		}
	})
}

validateForms('.discount__form', {tel: { required: true }});
validateForms('.discount__form-adapt', {tel: { required: true }});
validateForms('.pop-up-main__form', { number: { required: true }, fio: { required: true }, tel: { required: true }});
validateForms('.footer__social-block__form', { email: { required: true, email: true }});
validateForms('.footer__social-block__form-adaptive', { email: { required: true, email: true }});

// validateForms('.feedback-page__send-rightform', {tel: { required: true }});


//hamburger menu
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
})

navigationLinks.forEach(e => {
	e.addEventListener('click', element => {
		hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');
		hamburger.classList.remove('header__hamburger-menu_icon-active');
		body.style.overflow = "visible";
	})
})