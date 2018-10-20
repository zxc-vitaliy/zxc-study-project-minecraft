$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider__slides").children(".slider__slide"); // Получаем массив всех слайдов
	var width = $(".slider__slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	
	$(".slider__slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".slider__navigation").append("<div class='dot active'></div>");
		}
		else {
			$(".slider__navigation").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".slider__navigation").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$('.slider__navigation .dot').click(function(){
		$(".slider__navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".slider__slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});

});