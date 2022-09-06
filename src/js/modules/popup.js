import {openCurrentPopupWindow, closeCurrentPopupWindow} from './openClosePopup';

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
                    openCurrentPopupWindow(currentPopUpName);
                    closeCurrentPopupWindow(currentPopUpName);
                }
                
            });
        });
    });
    
}

export default popup;
