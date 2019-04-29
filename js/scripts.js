function getSliderParams() {
	$(".promo_slider .slide").each(function() {
    	slideHeight = $(".promo_sect").outerHeight();
    	$(this).css({
    		"height" : slideHeight + "px"
    	});
    });
}

function getSlySliderParams(bodyWidth) {
    var slySliderWidth = bodyWidth - $(".sly_position_coords").offset().left;
    $(".sly_block_wrapp").css({
        "width" : slySliderWidth + "px",
        "padding-left" : $(".sly_position_coords").offset().left + "px"
    });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var slideHeight;
var coord;
var top;

$(window).on("load", function (e) {



});

$(window).resize(function() {

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
	getSliderParams();
    getSlySliderParams();

});

$(document).scroll(function() {



});

$(document).ready(function() {

	getSliderParams();
    getSlySliderParams();
    

	// new fullpage('#fullpage', {
	// 	//options here,
	// 	scrollingSpeed: 700,
	// 	scrollBar: true,
	// 	autoScrolling: true,
	// 	scrollHorizontally: false,
	// 	// continuousVertical: false,
	// 	interlockedSlides: false,
	// 	verticalCentered: false,
	// 	paddingTop: '0',
	// 	paddingBottom: '0',
	// 	scrollOverflow: true,
	// 	// loopHorizontal: false
	// 	// navigation: true,
	// 	// navigationPosition: 'left',
	// });

	if( $(".promo_slider").length > 0 ) {

		var leftContent;
		var rightContent;

		$('.promo_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){			
        	leftContent = $('.promo_slider [data-slick-index="'+nextSlide+'"]').find(".left_col").html();
        	rightContent = $('.promo_slider [data-slick-index="'+nextSlide+'"]').find(".right_col").html();
			$(".promo_article .left_content").html(leftContent);
			$(".promo_article .right_content").html(rightContent);
			$(".current_slide_num").text(nextSlide + 1);
		});

		$('.promo_slider').on('init', function(event, slick, currentSlide, nextSlide){
			var countSlides = $('.promo_slider .slick-slide').length;
			$(".count_slides").text(countSlides);
		});

        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            slickNext: $(".count_promo_slides .prev_slide"),
            slickPrev: $(".count_promo_slides .next_slide")
        });

        $(".count_promo_slides .prev_slide").on("click", function(e) {
        	e.preventDefault();
        	$(".promo_slider .slick-prev").trigger("click");
        });

        $(".count_promo_slides .next_slide").on("click", function(e) {
        	e.preventDefault();
        	$(".promo_slider .slick-next").trigger("click");
        });

    }

    // dropdown_wrapp
    // dropdown_title_wrapp
    // dropdown_box

    $(".dropdown_wrapp").each(function() {
        if(!$(this).hasClass("active")) {
            $(this).find(".dropdown_box").css({
                "display":"none"
            });
        }
    });

    $(".dropdown_title_wrapp").on("click", function(e) {
        e.preventDefault();
        parentBLock = $(this).closest(".dropdown_wrapp");
        var slideBLock = parentBLock.find(".dropdown_box");
        if(slideBLock.is(":hidden")) {
            slideBLock.slideDown(300);
            parentBLock.addClass("active");
        } else {
            slideBLock.slideUp(300);
            parentBLock.removeClass("active");
        }
    });

    $(".dropdown_wrapp .dropdown_box li a").on("click", function(e) {
        e.preventDefault();
        var val = $(this).text();
        var input = $(this).closest(".dropdown_wrapp").find(".inputVal");
        input.val(val);
        $(this).closest(".dropdown_box").find("li a").removeClass("active");
        $(this).addClass("active");
    });

    if( $(".sly_block_wrapp").length > 0 ) {

        $slyWrapp = $(".sly_block_wrapp");

        $frame = $slyWrapp.find(".sly_block");
        var $slidee = $frame.children('slide').eq(0);
        var $wrap   = $frame.parent();
        var activeSlide;
        var indexSlide;
        var countSlides;
        sly = new Sly($frame, {
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 1,
            scrollBar: $slyWrapp.find(".scrollbar"),
            scrollBy: 1,
            activatePageOn: "click",
            speed: 300,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
            prev: $wrap.find('.prev_sly'),
            next: $wrap.find('.next_sly')
        }).init();
        sly.on('move', function () {
            activeSlide = $(".sly_block").find(".slide.active").attr("data-index");
        });

        indexSlide = 0;
        $(".object_slider .slide").each(function() {
            indexSlide++;
            $(this).attr("data-index",indexSlide);
        });

        countSlides = $(".object_slider .slide").length;
        $(".count_slides_2").text(countSlides);

        $(".objects_slider_controls .prev_sly, .objects_slider_controls .next_sly").on("click", function() {
            activeSlide = $(".object_slider .slide.active").attr("data-index");
            $(".sly_current").text(activeSlide);
        });

    }

    $(".questions_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
    });

    $(".callback_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // infinite: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
    });

    $("#callback_slider_btn").on("click", function(e) {
        e.preventDefault();
        $(".callback_slider .slick-next").trigger("click");
    });

    $(".articles_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
    });

    $("#articles_slider_btn").on("click", function(e) {
        e.preventDefault();
        $(".articles_slider .slick-next").trigger("click");
    });

    // $(".scroll_down").click(function(e) {
    //     e.preventDefault();
    //     coord = $(this).attr("href");
    //     top = $(coord).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });


const moo = document.getElementsByClassName('moo');
//сразу ставим фокус при клике на div id="focus". 
//click можно заменить на mouseenter и смотреть что там получается
document.getElementById('focus').addEventListener('click',function(){
  const L0 = moo[0].value.length;
  const L1 = moo[1].value.length;
  const L2 = moo[2].value.length;
  const L3 = moo[3].value.length;
  //проверяем, если везде всё заполнено - возвращаемся и ничего не трогаем
  if( L0 == 3 && L1 == 3 && L2 == 2 && L3 == 2 ) {return;}
  //если оно не вернулось и всё еще тут - проверит остальные варианты заполнения
  //(на случай, если пользователь заполнил не всё. Чтобы всегда фокус не ставился на первом)
       if( L0 < 3 ) { moo[0].focus(); }
  else if( L0 == 3 && L1 < 3) { moo[1].focus(); }
  else if( L0 == 3 && L1 == 3 && L2 < 2) { moo[2].focus(); }
  else if( L0 == 3 && L1 == 3 && L2 == 2) { moo[3].focus(); }
});//Символ && означает "и" = одновременное выполнение нескольких условий

//Само переключение фокуса при вводе
for(let i = 0; i < moo.length; i++){
  moo[i].addEventListener('input', function(){
    //для этого в HTML добавил data-num=".." чтобы здесь получить это число
    //и не добавлять лишних условий. Условие i < 3, чтобы не было ошибки
    if( i < 3 && this.value.length == Number( this.dataset.num ) ){
      moo[(i+1)].focus();
    }
    //на последнем инпуте не переключение фокуса нужно, а запрет...
    //Если введенное число оказалось 3-м, режем введенное через slice()
    //оставляя только первые 2 символа
    if( moo[3].value.length > 2 ){
      moo[3].value = moo[3].value.slice(0,2);
    }
  });
  
  //keyup дает возможность определить нажатую кнопку.
  //если внутри текущего инпута пусто, а был нажат b-space, переключаем фокус
  moo[i].addEventListener('keyup', function(e){
    if( e.key.match(/Backspace/ig) && this.value.length == 0 && i > 0) {
        moo[(i-1)].focus();
    }
  });
}

    $(".submit_btn").on("click", function(e) {
        e.preventDefault();
        parentBLock = $(this).closest("form");
        var submitEl = parentBLock.find(".submit_input");
        submitEl.trigger("click");
    });
    

});