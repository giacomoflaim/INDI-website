

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});


/* slider */

    var swiper = new Swiper('.swiper-1', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.pagination-1',
        clickable: true,
      },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

/* carousel esercizi */


    $('#myCarousel').carousel({
		interval:   500000
	});

	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});

    $(".hide-func").click(function() {
     $(".container-slider").hide(1).delay(600).show(1);
    });

/* active */


$('#myCarousel').on('slide.bs.carousel', function(e) {
        var from = $('.nav li.active').index();
        var next = $(e.relatedTarget);
        var to =  next.index();
        

        // This could interest you
        $('.nav-pills li').removeClass('active').eq(to).addClass('active');

    });
/*


    




/* video-modale */

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})

// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 

