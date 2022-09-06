import {forms, formClear} from './formValidate';

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

    formClear(window.querySelectorAll('input'));
    
}

export {openCurrentPopupWindow, closeCurrentPopupWindow};
