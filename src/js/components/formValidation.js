import popUpWindowClass from './popup';

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

            new popUpWindowClass(popUpSelector, targetSelector).popUpOpen();
    	}
    })
}

export default validateForms;
