/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);


/***/ }),

/***/ "./src/js/modules/formValidate.js":
/*!****************************************!*\
  !*** ./src/js/modules/formValidate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formClear": () => (/* binding */ formClear),
/* harmony export */   "forms": () => (/* binding */ forms)
/* harmony export */ });
/* harmony import */ var _openClosePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openClosePopup */ "./src/js/modules/openClosePopup.js");


function forms() {
    const formPopup = document.querySelector('.pop-up-thanks');

    if (document.querySelector('.main__page')) {
        formValidate('.discount__form', {tel: { required: true }});
        formValidate('.discount__form-adapt', {tel: { required: true }});
        formValidate('.pop-up-main__form', { number: { required: true }, fio: { required: true }, tel: { required: true }});
        formValidate('.footer__social-block__form', { email: { required: true, email: true }});
        formValidate('.footer__social-block__form-adaptive', { email: { required: true, email: true }});
    } else if (document.querySelector('.feedback-page')) {
        formValidate('.feedback-page__send-rightform', {fio: { required: true }, tel: { required: true }});
    }

    function formValidate(selector, rules) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function (form) {
                (0,_openClosePopup__WEBPACK_IMPORTED_MODULE_0__.openCurrentPopupWindow)(formPopup);
                (0,_openClosePopup__WEBPACK_IMPORTED_MODULE_0__.closeCurrentPopupWindow)(formPopup);

                formClear(form.querySelectorAll('input'));
            }
        });
    }
}

function formClear(inputs) {
    const errorValidate = document.querySelectorAll('.js-validate-error-label');

    errorValidate.forEach(itemError => {
        itemError.style.display = "none";
    });
    
    inputs.forEach(input => {

        if (input.type != 'submit') {
            input.value = "";
            input.style.border = "";
        }

    })
}




/***/ }),

/***/ "./src/js/modules/howToCleanCircleEffects.js":
/*!***************************************************!*\
  !*** ./src/js/modules/howToCleanCircleEffects.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function howToCleanCircle() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (howToCleanCircle);


/***/ }),

/***/ "./src/js/modules/humburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/humburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (humburgerMenu);


/***/ }),

/***/ "./src/js/modules/openClosePopup.js":
/*!******************************************!*\
  !*** ./src/js/modules/openClosePopup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeCurrentPopupWindow": () => (/* binding */ closeCurrentPopupWindow),
/* harmony export */   "openCurrentPopupWindow": () => (/* binding */ openCurrentPopupWindow)
/* harmony export */ });
/* harmony import */ var _formValidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidate */ "./src/js/modules/formValidate.js");


function openCurrentPopupWindow(window) {

    const body = document.querySelector('body');
    window.classList.add('pop-up_active');
    body.style.overflow = 'hidden';

}

function closeCurrentPopupWindow(window) { 

    const body = document.querySelector('body');
    const close = document.querySelectorAll('.pop-up__close');
    
    close.forEach(currentClose => {

        currentClose.addEventListener('click', () => {
            window.classList.remove('pop-up_active');
            body.style.overflow = 'visible';
        });

    });

    document.addEventListener('keydown', event => {

        if (event.keyCode == 27) {
            window.classList.remove('pop-up_active');
            body.style.overflow = 'visible';
        };

    });

    document.addEventListener('click', element => {

        if (element.target.classList.contains('pop-up_active')) {
            window.classList.remove('pop-up_active');
            body.style.overflow = 'visible';
        };

    });

    (0,_formValidate__WEBPACK_IMPORTED_MODULE_0__.formClear)(window.querySelectorAll('input'));
    
}




/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _openClosePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openClosePopup */ "./src/js/modules/openClosePopup.js");


function popup() {

    const activeElementsForPopUp = document.querySelectorAll('[data-popupname]');
    const popWindowsDataNames = document.querySelectorAll('[data-popup]');
    let activeButtonPopUpName = '';

    activeElementsForPopUp.forEach(currentItem => {
        currentItem.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('.prices__cards') && target.className != 'prices__cards prices__cards-active') {
                activeButtonPopUpName = target.closest('.prices__cards').getAttribute('data-popupname');
            } else if (target.className === 'prices__cards prices__cards-active'){
                activeButtonPopUpName = '';
                return;
            }
            
            if (target.closest('.btn-circle')) {
                activeButtonPopUpName = target.closest('.btn-circle').getAttribute('data-popupname');
            } else if (target.closest('.promotion__carousel-item')) {
                activeButtonPopUpName = target.closest('.promotion__carousel-item').getAttribute('data-popupname');
            } else if (target.getAttribute('data-popupname') != null) {
                activeButtonPopUpName = target.getAttribute('data-popupname');
            }

            popWindowsDataNames.forEach(currentPopUpName => {

                if (activeButtonPopUpName === currentPopUpName.getAttribute(['data-popup'])) {
                    (0,_openClosePopup__WEBPACK_IMPORTED_MODULE_0__.openCurrentPopupWindow)(currentPopUpName);
                    (0,_openClosePopup__WEBPACK_IMPORTED_MODULE_0__.closeCurrentPopupWindow)(currentPopUpName);
                }
                
            });
        });
    });
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);


/***/ }),

/***/ "./src/js/modules/promoSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/promoSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {

    const nextBtn = document.querySelector('.promotion__carousel__btn-next'),
          prevBtn = document.querySelector('.promotion__carousel__btn-prev'),
          prevBtnStyle = prevBtn.querySelector('svg path'),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./src/js/modules/tabNavigation.js":
/*!*****************************************!*\
  !*** ./src/js/modules/tabNavigation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabNavigation(selectorOfTabs, selectorOfContents, contentActiveClass, tabActiveClass) {
    
    const tabs = document.querySelectorAll(selectorOfTabs);
    const contents = document.querySelectorAll(selectorOfContents);

    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            const target = event.target;
            event.preventDefault();

            tabs.forEach(tab => tab.classList.remove(tabActiveClass));

            contents.forEach(content => {
                content.classList.remove(contentActiveClass);

                if (target.getAttribute(['data-id']) === content.id) {
                    target.classList.add(tabActiveClass);
                    content.classList.add(contentActiveClass);
                } 

            });
        });
    });
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabNavigation);


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
/* harmony import */ var _modules_humburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/humburger */ "./src/js/modules/humburger.js");
/* harmony import */ var _modules_promoSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/promoSlider */ "./src/js/modules/promoSlider.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup */ "./src/js/modules/popup.js");
/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidate */ "./src/js/modules/formValidate.js");
/* harmony import */ var _modules_tabNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabNavigation */ "./src/js/modules/tabNavigation.js");
/* harmony import */ var _modules_howToCleanCircleEffects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/howToCleanCircleEffects */ "./src/js/modules/howToCleanCircleEffects.js");








window.addEventListener('DOMContentLoaded', () => {
	const promotion = document.querySelector('.promotion');
	const aboutUs = document.querySelector('.about-us');

	if (promotion && aboutUs) {
		(0,_modules_promoSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
		(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_2__["default"])();
	} 

	(0,_modules_humburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_popup__WEBPACK_IMPORTED_MODULE_3__["default"])();
	(0,_modules_howToCleanCircleEffects__WEBPACK_IMPORTED_MODULE_6__["default"])();
	(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_4__.forms)();

	(0,_modules_tabNavigation__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-prices-tab', '.prices__cards', 'prices__cards-active', 'navigation__link-active');
	(0,_modules_tabNavigation__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-clean_btn', '.js__image', 'how-we-clean-active', 'navigation__link-active');
	
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map