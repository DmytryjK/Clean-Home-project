/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordion\": () => (/* binding */ accordion)\n/* harmony export */ });\n/*Accordion*/\r\nfunction accordion() {\r\n\tlet btn = document.querySelectorAll('.about-us__accordion-btn');\r\n\tbtn.forEach((e) => {\r\n\t\te.addEventListener('click', () => {\r\n\t\t\te.classList.toggle('about-us__accordion-btn_active');\r\n\t\t\tlet text = e.nextElementSibling;\r\n\t\t\tif (text.style.maxHeight) {\r\n\t\t\t\ttext.style.maxHeight = null;\r\n\t\t\t\ttext.classList.remove('about-us__accordion-text_active');\r\n\t\t\t} else {\r\n\t\t\t\ttext.style.maxHeight = text.scrollHeight + \"px\";\r\n\t\t\t\ttext.classList.add('about-us__accordion-text_active');\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\r\n\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/components/accordion.js?");

/***/ }),

/***/ "./src/js/components/formValidation.js":
/*!*********************************************!*\
  !*** ./src/js/components/formValidation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ \"./src/js/components/popup.js\");\n\r\n\r\nfunction validateForms(rules, messages, selector, popUpSelector, targetSelector) {\r\n\r\n    const checkedForm = document.querySelector(selector);\r\n    let formChildren = Array.from(checkedForm.children);\r\n\r\n    formChildren.forEach(child => {\r\n        if (child.type === 'tel') {\r\n            const im = new Inputmask('+38 (099) 999-99-99');\r\n            im.mask(child);\r\n        }\r\n    });\r\n\r\n    \r\n\r\n    new window.JustValidate(selector, {\r\n        rules,\r\n        messages,\r\n        submitHandler: () => {\r\n            console.log('handle');\r\n            const currentForm = document.querySelector(selector), \r\n                  currentFormList = Array.from(currentForm.children);\r\n            const modalWindow = currentForm.closest('section');\r\n\r\n            if (modalWindow) {\r\n                modalWindow.classList.remove('pop-up_active');\r\n            }\r\n\r\n            currentFormList.forEach(currentItem => {\r\n                if (currentItem.closest('input') && currentItem.type !== 'submit') {\r\n                    currentItem.value = '';\r\n                }\r\n            })\r\n\r\n            const popup = new _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"](popUpSelector, targetSelector).popUpOpen();\r\n    \t}\r\n    })\r\n}\r\n// const inputPhoneNumber = document.querySelectorAll('.discount__phone-number'),\r\n// inputEmailFooter = document.querySelectorAll('.footer__social-block__input');\r\n\r\n// popUpWindow(event, popUpThanks, inputPhoneNumber, inputEmailFooter);\r\n\r\n// popUp.classList.remove('pop-up_active');\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForms);\n\n//# sourceURL=webpack://uber-project/./src/js/components/formValidation.js?");

/***/ }),

/***/ "./src/js/components/hamburger.js":
/*!****************************************!*\
  !*** ./src/js/components/hamburger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userScrollWidth/userScrollWidth */ \"./src/js/services/userScrollWidth/userScrollWidth.js\");\n\r\n\r\nfunction hamburger() {\r\n    //hamburger menu\r\n    const hamburger = document.querySelector('.header__hamburger-menu_icon'),\r\n        hamburgerMenu = document.querySelector('.header__hamburger-menu_nav'),\r\n        navigationLinks = document.querySelectorAll('.header__hamburger-menu_link'),\r\n        body = document.querySelector('body'),\r\n        html = document.querySelector('html');\r\n\r\n    hamburger.addEventListener('click', e => {\r\n        if (hamburgerMenu.classList.contains('header__hamburger-menu_nav-active')) {\r\n            hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');\r\n            hamburger.classList.remove('header__hamburger-menu_icon-active');\r\n            body.style.cssText = \"overflow: visible\";\r\n            html.style.cssText = \"padding-right: 0px\";\r\n        } else {\r\n            hamburgerMenu.classList.add('header__hamburger-menu_nav-active');\r\n            hamburger.classList.add('header__hamburger-menu_icon-active');\r\n            body.style.cssText = \"overflow: hidden\";\r\n            html.style.cssText = `padding-right: ${(0,_services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__.userScrollbarWidth)()}px`;\r\n        }\r\n    })\r\n\r\n    navigationLinks.forEach(e => {\r\n        e.addEventListener('click', element => {\r\n            hamburgerMenu.classList.remove('header__hamburger-menu_nav-active');\r\n            hamburger.classList.remove('header__hamburger-menu_icon-active');\r\n            body.style.overflow = \"visible\";\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/components/hamburger.js?");

/***/ }),

/***/ "./src/js/components/howWeClean.js":
/*!*****************************************!*\
  !*** ./src/js/components/howWeClean.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"howToClean\": () => (/* binding */ howToClean),\n/* harmony export */   \"navigate\": () => (/* binding */ navigate)\n/* harmony export */ });\n/*How To clean*/\r\n\r\nfunction navigate () {\r\n\tconst \ttabButton = document.querySelectorAll('.js-clean_btn'),\r\n\t\tnavigation = document.querySelector('.how-we-clean__navigation'),\r\n\t\timage = document.querySelectorAll('.js__image'),\r\n\t\timageAdapt = document.querySelectorAll('.js__image-adapt'),\r\n\t\tlistBlockadaptive = document.querySelector('.how-we-clean__adaptation-block'),\r\n\t\tlistItemAdaptive = listBlockadaptive.querySelectorAll('.how-we-clean__adaptation-list');\r\n\r\n\tnavigation.addEventListener('click', e => {\r\n\t\tconst id = e.target.dataset.id;\r\n\t\tif (id) {\r\n\t\t\ttabButton.forEach(btn => {\r\n\t\t\t\tbtn.classList.remove(\"navigation__link-active\");\r\n\t\t\t});\r\n\t\t\te.target.classList.add(\"navigation__link-active\");\r\n\t\t\t\r\n\t\t\timage.forEach(image => {\r\n\t\t\t\timage.classList.remove(\"how-we-clean-active\");\r\n\t\t\t});\r\n\t\t\tconst imageElement = document.getElementById(id);\r\n\t\t\timageElement.classList.add(\"how-we-clean-active\");\r\n\r\n\t\t\tconst ImageDataName = e.target.dataset.name,\r\n\t\t\tcurrentListItem = document.getElementsByClassName(ImageDataName);\r\n\r\n\r\n\t\t\t// Adaptation list block\r\n\t\t\tlistItemAdaptive.forEach(e => {\r\n\t\t\t\te.classList.remove('how-we-clean__adaptation-list_active');\r\n\t\t\t});\r\n\r\n\t\t\tcurrentListItem[0].classList.add(\"how-we-clean__adaptation-list_active\");\r\n\t\t}\r\n\t})\r\n\r\n\thowToClean();\r\n}\r\n\r\n\r\nfunction howToClean() {\r\n\tlet btn = document.querySelectorAll('.image-button');\r\n\r\n\tbtn.forEach((e) => {\r\n\t\te.addEventListener('mouseover', () => {\r\n\t\t\te.classList.add('image-button_active');\r\n\t\t\te.previousElementSibling.classList.add('image-descr_active');\r\n\t\t});\r\n\t\te.addEventListener('mouseleave', () => {\r\n\t\t\te.classList.remove('image-button_active');\r\n\t\t\te.previousElementSibling.classList.remove('image-descr_active');\r\n\t\t});\r\n\t});\r\n};\r\n\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/components/howWeClean.js?");

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userScrollWidth/userScrollWidth */ \"./src/js/services/userScrollWidth/userScrollWidth.js\");\n\r\n\r\nclass Popup {\r\n\r\n    constructor(modalWindowSelector, targetSelector) {\r\n        this.modalWindow = document.querySelector(modalWindowSelector),\r\n        this.targets = document.querySelectorAll(targetSelector),\r\n        this.body = document.querySelector('body'),\r\n        this.close = document.querySelectorAll('.pop-up__close'),\r\n        this.html = document.querySelector('html'),\r\n        this.inputs = this.modalWindow.querySelectorAll('input');\r\n    }\r\n\r\n    popUpOpen = (e = null) => { \r\n\r\n        if (e) {\r\n            e.preventDefault();\r\n        }\r\n\r\n        this.addDefaultStyles();\r\n        this.popUpClose();\r\n    }\r\n  \r\n    popUpClose = () => {\r\n\r\n        this.close.forEach(currentClose => {\r\n            currentClose.addEventListener('click', () => {\r\n                this.resetDefaultStyles();\r\n            })\r\n        })\r\n\r\n        document.addEventListener('click', element => {\r\n            if (element.target.classList.contains('pop-up_active')) {\r\n                this.resetDefaultStyles();\r\n            }\r\n        });\r\n\r\n        document.onkeydown = (evt) => {\r\n            evt = evt || window.event;\r\n\r\n            if (evt.keyCode == 27) {\r\n                this.resetDefaultStyles();\r\n            }\r\n        }\r\n\r\n        this.formClear();\r\n    }\r\n\r\n    resetDefaultStyles = () => {\r\n        this.modalWindow.classList.remove('pop-up_active');\r\n        this.body.style.overflow = 'visible';\r\n        this.html.style.cssText = `padding-right: 0px`;\r\n    }\r\n\r\n    addDefaultStyles = () => {\r\n        this.modalWindow.classList.add('pop-up_active');\r\n        this.body.style.overflow = 'hidden';\r\n        this.html.style.cssText = `padding-right: ${(0,_services_userScrollWidth_userScrollWidth__WEBPACK_IMPORTED_MODULE_0__.userScrollbarWidth)()}px`;\r\n    }\r\n\r\n    formClear = () => {\r\n        this.errorValidate = document.querySelectorAll('.js-validate-error-label');\r\n\r\n        this.errorValidate.forEach(itemError => {\r\n            itemError.style.display = \"none\";\r\n        });\r\n\r\n        this.inputs.forEach(input => {\r\n            \r\n            if (input.type !== 'submit') {\r\n                input.value = \"\";\r\n                input.style.border = \"\";\r\n            }\r\n    \r\n        })\r\n    }\r\n\r\n    render() {\r\n        this.targets.forEach(target => target.addEventListener('click', this.popUpOpen));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\n\n//# sourceURL=webpack://uber-project/./src/js/components/popup.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\n/*Promo slider*/ \r\n\r\n\r\nfunction slider() {\r\n    const nextBtn = document.querySelector('.promotion__carousel__btn-next'),\r\n\t  prevBtn = document.querySelector('.promotion__carousel__btn-prev'),\r\n\t  prevBtnStyle = prevBtn.querySelector('svg path'),\r\n\t  wrapper = document.querySelector('.promotion__carousel-wrapper'),\r\n\t  images = document.querySelectorAll('.promotion__carousel-item'),\r\n\t  promoCirclesBlock = document.querySelector('.promotion__circles'),\r\n\t  wrapperCircles = document.querySelector('.promotion__circles');\r\n\r\n    let Circles;\r\n    let counter = 0;\r\n\r\n\r\n    checkWindowSize();\r\n\r\n\r\n    const promoCircles = document.querySelectorAll('.promotion__circles-item');\r\n\r\n    circles(counter);\r\n\r\n    nextBtn.addEventListener('click', () => {\r\n        nextSlide();\r\n        prevBtnStyle.style.stroke = '#151515';\r\n        if (window.screen.width > 988) {\r\n            if(counter >= images.length / 2) {\r\n                images.forEach(e => {\r\n                    e.style.transform = 'translateX(0)';\r\n                })\r\n                counter = -1;\r\n                prevBtnStyle.style.stroke = '';\r\n            } \r\n            counter ++;\r\n            circles(counter);\r\n        } else {\r\n            if(counter > images.length / 2) {\r\n                images.forEach(e => {\r\n                    e.style.transform = 'translateX(0)';\r\n                })\r\n                counter = -1;\r\n                prevBtnStyle.style.stroke = '';\r\n            } \r\n            counter ++;\r\n            circles(counter);\r\n        }\r\n    })\r\n\r\n    prevBtn.addEventListener('click', () => {\r\n        prevSlide();\r\n        \r\n        if(counter <= 0) {\r\n            images.forEach(e => {\r\n                e.style.transform = 'translateX(0)';\r\n            })\r\n            counter = 1;\r\n        }\r\n        counter --;\r\n\r\n        if (counter === 0) {\r\n            prevBtnStyle.style.stroke = '#C3C3C3';\r\n        }\r\n        circles(counter);\r\n    })\r\n\r\n\r\n\r\n    function checkWindowSize() {\r\n        if (window.screen.width > 988) {\r\n            for (let i = 0; i < images.length - 1; i ++) {\r\n                Circles = promoCirclesBlock.appendChild(document.createElement('div'));\r\n                Circles.classList.add('promotion__circles-item');\r\n            }\r\n        } else {\r\n            for (let i = 0; i < images.length; i ++) {\r\n                Circles = promoCirclesBlock.appendChild(document.createElement('div'));\r\n                Circles.classList.add('promotion__circles-item');\r\n            }\r\n        }\r\n    }\r\n\r\n    function circles(i) {\r\n        promoCircles.forEach(e => {\r\n            e.classList.remove('active');\r\n        });\r\n\r\n        promoCircles[i].classList.add('active');\r\n\r\n        wrapperCircles.addEventListener('click', (event) => {\r\n            const target = event.target;\r\n        \r\n            if(target && target.classList.contains('promotion__circles-item')) {\r\n                promoCircles.forEach((item, index) => {\r\n\r\n                    if(target == item) {\r\n                        promoCircles.forEach(e => {\r\n                            e.classList.remove('active');\r\n                        })\r\n                        target.classList.add('active');\r\n\r\n                        if (index <= images.length / 2) {\r\n                            images.forEach(element => {\r\n                                element.style.transform = `translateX(calc(${index}*(-100% - ${window.getComputedStyle(element).getPropertyValue(\"margin-right\")})))`;\r\n                            });\r\n                            \r\n                            if (index <= images.length / 2) {\r\n                                index++;\r\n                                prevBtnStyle.style.stroke = '#151515';\r\n                            } else {\r\n                                index = 0;\r\n                            }\r\n                            counter = index - 1;\r\n                            if (counter == 0) {\r\n                                prevBtnStyle.style.stroke = '#C3C3C3';\r\n                            }\r\n                        }\r\n                    }\r\n                })\r\n            }\r\n        })\r\n    }\r\n\r\n    function prevSlide() {\r\n        images.forEach(e => {\r\n            e.style.transform += `translateX(calc(100% + ${window.getComputedStyle(e).getPropertyValue(\"margin-right\")}))`;\r\n        })\r\n    }\r\n    function nextSlide() {\r\n        images.forEach(e => {\r\n            e.style.transform += `translateX(calc(-100% - ${window.getComputedStyle(e).getPropertyValue(\"margin-right\")}))`;\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    const cardsBlock = document.querySelectorAll('.prices__cards'),\r\n        tabNavigation = document.querySelectorAll('.js-prices-tab');\r\n\r\n    let i = 0,\r\n        active = '';\r\n\r\n    tabs(i);\r\n\r\n    function tabs(i) {\r\n        cardsBlock[i].classList.add('prices__cards-active');\r\n        tabNavigation[i].classList.add('navigation__link-active');\r\n\r\n        tabNavigation.forEach((currentTab, index) => {\r\n            currentTab.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                tabNavigation.forEach(e => {\r\n                    e.classList.remove('navigation__link-active');\r\n                })\r\n                currentTab.classList.add('navigation__link-active');\r\n\r\n                cardsBlock.forEach(e => {\r\n                    e.classList.remove('prices__cards-active');\r\n\r\n                });\r\n                cardsBlock[index].classList.add('prices__cards-active');\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/components/tabs.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_howWeClean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/howWeClean */ \"./src/js/components/howWeClean.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ \"./src/js/components/slider.js\");\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ \"./src/js/components/accordion.js\");\n/* harmony import */ var _components_formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formValidation */ \"./src/js/components/formValidation.js\");\n/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _components_hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hamburger */ \"./src/js/components/hamburger.js\");\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popup */ \"./src/js/components/popup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pageName = window.location.pathname.split('/').pop();\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\t'use strict';\r\n\r\n\t//General scripts\r\n\t(0,_components_hamburger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n\t//Footer validation email\r\n\t(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ email: { required: true, email: true } }, { email: { email: 'Введите почту формата: example@mail.com' } }, '.footer__social-block__form', '.pop-up-thanks', '.btn-circle_opacity-footer');\r\n\t(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ email: { required: true, email: true } }, { email: { email: 'Введите почту формата: example@mail.com' } }, '.footer__social-block__form-adaptive', '.pop-up-thanks', '.btn-circle_opacity-footer');\r\n\r\n\tif (pageName === 'review.html') {\r\n\r\n\t\t(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ fio: { required: true }, tel: { required: true, phone: true }, email: { required: true, email: true } }, { tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' }, email: { email: 'Введите почту формата: example@mail.com' } },\r\n\t\t\t'.feedback-page__send-rightform', '.pop-up-thanks', '.feedback-page__submit-btn');\r\n\t\t\r\n\t} else {\r\n\t\tconsole.log('yep')\r\n\t\t;(0,_components_howWeClean__WEBPACK_IMPORTED_MODULE_0__.navigate)();\r\n\t\t(0,_components_howWeClean__WEBPACK_IMPORTED_MODULE_0__.howToClean)();\r\n\t\t(0,_components_slider__WEBPACK_IMPORTED_MODULE_1__.slider)();\r\n\t\t(0,_components_accordion__WEBPACK_IMPORTED_MODULE_2__.accordion)();\r\n\t\t(0,_components_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\t\t//Popup(modalWindowSelector, targetSelector)\r\n\t\tconst sendRequestModal = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-main', '[data-name=\"main_send-request\"]').render();\r\n\t\tconst sendRequestModalAdapt = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-main', '[data-name=\"main_send-request_adapt\"]').render();\r\n\t\tconst connectModal = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-connectWithUs', '[data-name=\"main_connect_with_us\"]').render();\r\n\t\tconst connectModalAdapt = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-connectWithUs', '[data-name=\"main_connect_with_us_adapt\"]').render();\r\n\t\tconst pricesCards = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-main', '.prices__cards-item').render();\r\n\t\tconst moreServiceBtn = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-main', '[data-name=\"moreServiceBtn\"]').render();\r\n\t\tconst servicesBtnNav = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-main', '[data-name=\"servicesBtnNav\"]').render();\r\n\t\tconst carouselItem = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-main', '.promotion__carousel-item').render();\r\n\t\tconst sendAquestion = new _components_popup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.pop-up-connectWithUs', '[data-name=\"send-a-question\"]').render();\r\n\r\n\t\t// validations\r\n\t\t(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n\t\t\t{ tel: { required: true, phone: true } },\r\n\t\t\t{ tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },\r\n\t\t\t'.discount__form', '.pop-up-thanks', '.discount__submit-btn');\r\n\r\n\t\t(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n\t\t\t{ tel: { required: true, phone: true } },\r\n\t\t\t{ tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },\r\n\t\t\t'.discount__form-adapt', '.pop-up-thanks');\r\n\r\n\t\t(0,_components_formValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ number: { required: true }, fio: { required: true }, tel: { required: true, phone: true } }, { tel: { phone: 'Номер должен состоять из 12-ти цифр, формат: +38 (999) 999-99-99' } },\r\n\t\t\t'.pop-up-main__form', '.pop-up-thanks', '.pop-up-main__btn');\r\n\t\t\t\r\n\t}\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/script.js?");

/***/ }),

/***/ "./src/js/services/userScrollWidth/userScrollWidth.js":
/*!************************************************************!*\
  !*** ./src/js/services/userScrollWidth/userScrollWidth.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userScrollbarWidth\": () => (/* binding */ userScrollbarWidth)\n/* harmony export */ });\nfunction userScrollbarWidth() {\r\n    \r\n    const temporaryElement = document.createElement(\"div\");\r\n    temporaryElement.style.cssText = \"overflow:scroll; visibility:hidden; position:absolute;\";\r\n    document.body.appendChild(temporaryElement);\r\n\r\n    const userScrollwidth = temporaryElement.offsetWidth - temporaryElement.clientWidth;\r\n\r\n    temporaryElement.remove();\r\n    return userScrollwidth;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://uber-project/./src/js/services/userScrollWidth/userScrollWidth.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;