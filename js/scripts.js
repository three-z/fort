$(document).foundation();

$(document).ready(function() {

	$('.latest__list').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider__list').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.item__switcher').click(function(e) {

		$('.addresses__item').hide();
		$($(this).attr('href')).show();

		return false;
	});

	$('.manufacturers__item .item__list').each(function() {
		if ($(this).find('li').length > 5) {
			$(this).find('li:gt(4)').hide();
			$(this).append('<div class="item__more"><a href="#">показать все</a></div>');
		}
	});

	$('.manufacturers__item .item__list .item__more a').click(function(e) {
		e.preventDefault();

		$(this).parents('.item__list').find('li:gt(4)').show();
		$(this).hide();
	});
});