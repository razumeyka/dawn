@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/jquery.maskedinput.js')
@@include('./lib/slick.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/datepicker-ru.js')

$(document).ready(function(){

// mobile_menu

    $('.burger').click( function() {
        $('.menu-mobile').slideToggle(500);
		if ($('.burger').hasClass('burger_active')) {
			setTimeout(function() {
				$('.burger').removeClass( 'burger_active' );
			}, 600);
				$('header').removeClass('header_active');
			return;
		} else {
			$('.burger').addClass('burger_active');
		}
    });


// 	scroll

	$('.menu li a, .main-screen__button').on( 'click', function(){
		var el = $(this);
		var dest = el.attr('href'); // получаем направление
		if(dest !== undefined && dest !== '') { // проверяем существование
			$('html').animate({
				scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
			}, 500 // скорость прокрутки
			);
		}
		return false;
	});


// 	slick-slider

	$('.main-screen').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 3000
	});

	$('.room__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 2000
	});

	$('.reviews').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			},
		]
	});

	$('.documents').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1
			  }
			},
		]
	});

	function mobileOnlySlider() {
		$('.services').slick({
			infinite: true,
			slidesToShow: 1
		});
	}


	if(window.innerWidth < 1024) {
		mobileOnlySlider();
	}

	$(window).resize(function(e){
		if(window.innerWidth < 768) {
			if(!$('.services').hasClass('slick-initialized')){
				mobileOnlySlider();
			}

		}else{
			if($('.services').hasClass('slick-initialized')){
				$('.services').slick('unslick');
			}
		}
	});

	
// mask

    $('input[type="tel"]').mask("+7-999-999-99-99");
	
	
// datepicker
	
	$("#datepicker").datepicker({
        inline: true,
        language: 'ru',
    });
	
	$("#datepicker2").datepicker({
        inline: true,
        language: 'ru',
    });


// select 
        
    $('.select__field').click(function(){
		$('.select').not($(this).closest('.select')).removeClass('active').find("ul").fadeOut(200);
		$(this).closest('.select').toggleClass('active').find("ul").fadeToggle(200);
	})
	
	$('.select li').click(function(){
		$(this).closest('.select').find('input').val($(this).data('value'));
		$(this).closest('.select').find('.select__field').html($(this).html());
		$(this).closest('.select').toggleClass('active').addClass('select_changed');
        $(this).closest(".select ul").fadeOut(200); 
	})

});

