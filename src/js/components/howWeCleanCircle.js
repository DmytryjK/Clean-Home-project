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
};

export {howToCleanCircle};
