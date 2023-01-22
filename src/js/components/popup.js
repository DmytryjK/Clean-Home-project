import {userScrollbarWidth} from '../services/userScrollWidth/userScrollWidth';

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
        this.html.style.cssText = `padding-right: ${userScrollbarWidth()}px`;
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

export default Popup;
