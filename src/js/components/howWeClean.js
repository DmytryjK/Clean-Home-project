/*How To clean*/

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

export {navigate, howToClean};