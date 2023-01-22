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

	let nextSlideInterval = setInterval(nextSlideAnimation, 5000);
	
	nextBtn.addEventListener('click', nextSlideAnimation);

	prevBtn.addEventListener('click', prevSlideAnimation);

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

	function nextSlideAnimation() {
		if (event !== undefined) {
			clearInterval(nextSlideInterval);
		}
		
		images.forEach(e => {
            e.style.transform += `translateX(calc(-100% - ${window.getComputedStyle(e).getPropertyValue("margin-right")}))`;
        });

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
	}

    function prevSlideAnimation() {
		if (event !== undefined) {
			clearInterval(nextSlideInterval);
		}

        images.forEach(e => {
            e.style.transform += `translateX(calc(100% + ${window.getComputedStyle(e).getPropertyValue("margin-right")}))`;
        });

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
    }

}

export {slider};
