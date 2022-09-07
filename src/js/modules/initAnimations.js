import animationForElements from './animationForElements';

function initSiteAnimations() {
    animationForElements('.benefits__content', 'benefits__content_animation');

	animationForElements('.prices-title', 'prices-title_animation');
	animationForElements('.prices__cards-item', 'prices__cards-item_animation');

	animationForElements('.how-we-clean__title', 'how-we-clean__title_animation');
	animationForElements('.how-we-clean__image', 'how-we-clean__image_animation');

	animationForElements('.services-title', 'services-title_animation');
	animationForElements('.services__item', 'services__item_animation');

	animationForElements('.more-service__title', 'more-service__title_animation');
	animationForElements('.more-service__btn', 'more-service__btn_animation');
    animationForElements('.more-service__btn-adaptation', 'more-service__btn-adaptation_animation');

	animationForElements('.promotion__title', 'promotion__title_animation');

	animationForElements('.about-us__title', 'about-us__title_animation');
	animationForElements('.about-us__descr', 'about-us__descr_animation');
	animationForElements('.about-us__btn', 'about-us__btn_animation');
	
	animationForElements('.chop-slide__title', 'chop-slide__title_animation');

	animationForElements('.discount__title', 'discount__title_animation');
	animationForElements('.discount__descr', 'discount__descr_animation');
	animationForElements('.discount__image-bg', 'discount__image-bg_animation');
	animationForElements('.discount__form', 'discount__form_animation');
    animationForElements('.discount__form-adapt', 'discount__form-adapt_animation');
    

	animationForElements('.feedback__title', 'feedback__title_animation');
	animationForElements('.feedback__descr', 'feedback__descr_animation');
	animationForElements('.feedback__send-link', 'feedback__send-link_animation');
	animationForElements('.feedback__form-item', 'feedback__form-item_animation');
	animationForElements('.feedback__more-link', 'feedback__more-link_animation');

    animationForElements('.feedback-page__title', 'feedback-page__title_animation');
    animationForElements('.feedback-page__rating', 'feedback-page__rating_animation');
    animationForElements('.feedback-page__block-review', 'feedback-page__block-review_animation');
    
}
export default initSiteAnimations;
