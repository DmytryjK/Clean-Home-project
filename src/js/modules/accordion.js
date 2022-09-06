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

export default accordion;
