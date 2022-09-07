import {openCurrentPopupWindow, closeCurrentPopupWindow} from './openClosePopup';

function forms() {
    const formPopup = document.querySelector('.pop-up-thanks');

    if (document.querySelector('.main__page')) {
        formValidate('.discount__form', {tel: { required: true }});
        formValidate('.discount__form-adapt', {tel: { required: true }});
        formValidate('.pop-up-main__form', { number: { required: true }, fio: { required: true }, tel: { required: true }});
    } else if (document.querySelector('.feedback-page')) {
        formValidate('.feedback-page__send-rightform', {fio: { required: true }, tel: { required: true }});
        
    }
    formValidate('.footer__social-block__form', { email: { required: true, email: true }});
    formValidate('.footer__social-block__form-adaptive', { email: { required: true, email: true }});
    

    function formValidate(selector, rules) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function (form) {
                openCurrentPopupWindow(formPopup);
                closeCurrentPopupWindow(formPopup);

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

export {forms, formClear};
