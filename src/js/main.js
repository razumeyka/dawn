@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/jquery.maskedinput.js')
@@include('./lib/slick.js')
@@include('./lib/jquery.viewportchecker.js')

$(document).ready(function(){
	
// mobile_menu
    
    $('.mobile-menu').click( function() { 
        $('header .menu').slideToggle(300); 
        $('.mobile-menu').toggleClass( 'mobile-menu_active' ); 
    });
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 1279) {
			$('header .menu').show(); 
		} else {
			$('header .menu').hide(); 
			$('.mobile-menu').removeClass('mobile-menu_active'); 
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
    	autoplaySpeed: 2000
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
		arrows: true
	});
	
	$('.documents').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true
	});
	
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");
	
}); 

// 	GoogleMap
	
var markerImage, marker;

function initMap() {
	initialize();

	marker = new google.maps.Marker({
		position: {lat: 59.975617, lng: 42.753318},
		map: map,
		title:"Гостиница “Рассвет"
	});		
}

//инициализация карты в div "map"

var map;
function initialize() {
	map = new google.maps.Map(document.getElementById('map'), {
		disableDefaultUI: true,
		scrollwheel: false,
		center: {lat: 59.975617, lng: 42.753318},
		zoom: 15,
		styles: 
		[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#FBF8EE"}]}, 
		{"featureType":"poi","elementType":"all","stylers":[{"color":"#E0F0D0"}, {"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]}, {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#FCC89B"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#BBD7E5"},{"visibility":"on"}]}]
	});
	
}