/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordion": () => (/* binding */ accordion)
/* harmony export */ });
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




/***/ }),

/***/ "./src/js/components/formValidation.js":
/*!*********************************************!*\
  !*** ./src/js/components/formValidation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/js/components/popup.js");


function validateForms(rules, messages, selector, popUpSelector, targetSelector) {

    const checkedForm = document.querySelector(selector);
    let formChildren = Array.from(checkedForm.children);

    formChildren.forEach(child => {
        if (child.type === 'tel') {
            const im = new Inputmask('+38 (099) 999-99-99');
            im.mask(child);
        }
    });

    new window.JustValidate(selector, {
        rules,
        messages,
        submitHandler: () => {
            console.log('handle');
            const currentForm = document.querySelector(selector), 
                  currentFormList = Array.from(currentForm.children);
            const modalWindow = currentForm.closest('section');

            if (modalWindow) {
                modalWindow.classList.remove('pop-up_active');
            }

            currentFormList.forEach(currentItem => {
                if (currentItem.closest('input') && currentItem.type !== 'submit') {
                    currentItem.value = '';
                }
            })

            const popup = new _popup__WEBPACK_IMPORTED_MODULE_0__["default"](popUpSelector, targetSelector).popUpOpen();
    	}
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForms);


/***/ }),

/***/ "./src/js/components/hamburger.js":
/*!****************************************!*\
  !*** ./src/js/components/hamburger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userScrollWidth/userScrollWidth */ "./src/js/services/userScrollWidth/userScrollWidth.js");


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
            html.style.cssText = `padding-right: ${(0,_services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__.userScrollbarWidth)()}px`;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);


/***/ }),

/***/ "./src/js/components/howWeClean.js":
/*!*****************************************!*\
  !*** ./src/js/components/howWeClean.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "howToClean": () => (/* binding */ howToClean),
/* harmony export */   "navigate": () => (/* binding */ navigate)
/* harmony export */ });
function navigate () {
	const 	tabButton = document.querySelectorAll('.js-clean_btn'),
		navigation = document.querySelector('.how-we-clean__navigation'),
		image = document.querySelectorAll('.js__image'),
		imageAdapt = document.querySelectorAll('.js__image-adapt'),
		listBlockadaptive = document.querySelector('.how-we-clean__adaptation-block'),
		listItemAdaptive = listBlockadaptive.querySelectorAll('.how-we-clean__adaptation-list');

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

	howToClean();
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



/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userScrollWidth/userScrollWidth */ "./src/js/services/userScrollWidth/userScrollWidth.js");


class Popup {

    constructor(modalWindowSelector, targetSelector) {
        this.modalWindow = document.querySelector(modalWindowSelector),
        this.targets = document.querySelectorAll(targetSelector),
        this.body = document.querySelector('body'),
        this.close = document.querySelectorAll('.pop-up__close'),
        this.html = document.querySelector('html'),
        this.inputs = this.modalWindow.querySelectorAll('input');
    }

    popUpOpen = (e = null) => { 

        if (e) {
            e.preventDefault();
        }

        this.addDefaultStyles();
        this.popUpClose();
    }
  
    popUpClose = () => {

        this.close.forEach(currentClose => {
            currentClose.addEventListener('click', () => {
                this.resetDefaultStyles();
            })
        })

        document.addEventListener('click', element => {
            if (element.target.classList.contains('pop-up_active')) {
                this.resetDefaultStyles();
            }
        });

        document.onkeydown = (evt) => {
            evt = evt || window.event;

            if (evt.keyCode == 27) {
                this.resetDefaultStyles();
            }
        }

        this.formClear();
    }

    resetDefaultStyles = () => {
        this.modalWindow.classList.remove('pop-up_active');
        this.body.style.overflow = 'visible';
        this.html.style.cssText = `padding-right: 0px`;
    }

    addDefaultStyles = () => {
        this.modalWindow.classList.add('pop-up_active');
        this.body.style.overflow = 'hidden';
        this.html.style.cssText = `padding-right: ${(0,_services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__.userScrollbarWidth)()}px`;
    }

    formClear = () => {
        this.errorValidate = document.querySelectorAll('.js-validate-error-label');

        this.errorValidate.forEach(itemError => {
            itemError.style.display = "none";
        });

        this.inputs.forEach(input => {
            
            if (input.type !== 'submit') {
                input.value = "";
                input.style.border = "";
            }
    
        })
    }

    render() {
        this.targets.forEach(target => target.addEventListener('click', this.popUpOpen));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
function slider() {
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
}




/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./src/js/services/userScrollWidth/userScrollWidth.js":
/*!************************************************************!*\
  !*** ./src/js/services/userScrollWidth/userScrollWidth.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userScrollbarWidth": () => (/* binding */ userScrollbarWidth)
/* harmony export */ });
function userScrollbarWidth() {
    
    const temporaryElement = document.createElement("div");
    temporaryElement.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(temporaryElement);

    const userScrollwidth = temporaryElement.offsetWidth - temporaryElement.clientWidth;

    temporaryElement.remove();
    return userScrollwidth;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_howWeClean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/howWeClean */ "./src/js/components/howWeClean.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _components_formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formValidation */ "./src/js/components/formValidation.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hamburger */ "./src/js/components/hamburger.js");
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popup */ "./src/js/components/popup.js");








const pageName = window.location.pathname.split('/').pop();

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	//General scripts
	(0,_components_hamburger__WEBPACK_IMPORTED_MODULE_5__["default"])();

	//Footer validation email
	(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])({ email: { required: true, email: true } }, { email: { email: 'Введите почту формата: example@mail.com' } }, '.footer__social-block__form', '.pop-up-thanks', '.btn-circle_opacity-footer');
	(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])({ email: { required: true, email: true } }, { email: { email: 'Введите почту формата: example@mail.com' } }, '.footer__social-block__form-adaptive', '.pop-up-thanks', '.btn-circle_opacity-footer');

	if (pageName === 'review.html') {

		(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])({ fio: { required: true }, tel: { required: true, phone: true }, email: { required: true, email: true } }, { tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' }, email: { email: 'Введите почту формата: example@mail.com' } },
			'.feedback-page__send-rightform', '.pop-up-thanks', '.feedback-page__submit-btn');
		
	} else {
		console.log('yep')
		;(0,_components_howWeClean__WEBPACK_IMPORTED_MODULE_0__.navigate)();
		(0,_components_howWeClean__WEBPACK_IMPORTED_MODULE_0__.howToClean)();
		(0,_components_slider__WEBPACK_IMPORTED_MODULE_1__.slider)();
		(0,_components_accordion__WEBPACK_IMPORTED_MODULE_2__.accordion)();
		(0,_components_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])();

		//Popup(modalWindowSelector, targetSelector)
		const sendRequestModal = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-main', '[data-name="main_send-request"]').render();
		const sendRequestModalAdapt = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-main', '[data-name="main_send-request_adapt"]').render();
		const connectModal = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-connectWithUs', '[data-name="main_connect_with_us"]').render();
		const connectModalAdapt = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-connectWithUs', '[data-name="main_connect_with_us_adapt"]').render();
		const pricesCards = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-main', '.prices__cards-item').render();
		const moreServiceBtn = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-main', '[data-name="moreServiceBtn"]').render();
		const servicesBtnNav = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-main', '[data-name="servicesBtnNav"]').render();
		const carouselItem = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-main', '.promotion__carousel-item').render();
		const sendAquestion = new _components_popup__WEBPACK_IMPORTED_MODULE_6__["default"]('.pop-up-connectWithUs', '[data-name="send-a-question"]').render();

		// validations
		(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])(
			{ tel: { required: true, phone: true } },
			{ tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },
			'.discount__form', '.pop-up-thanks', '.discount__submit-btn');

		(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])(
			{ tel: { required: true, phone: true } },
			{ tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },
			'.discount__form-adapt', '.pop-up-thanks');

		(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__["default"])({ number: { required: true }, fio: { required: true }, tel: { required: true, phone: true } }, { tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },
			'.pop-up-main__form', '.pop-up-thanks', '.pop-up-main__btn');
			
	}
})

})();

/******/ })()
;