//Sticky Header

window.addEventListener('scroll', function() {
	if (pageYOffset > 50) {
	  document.querySelector('.header__top_wrapper').classList.add('active')
	} else {
	  document.querySelector('.header__top_wrapper').classList.remove('active')
	}
  })

//Sticky Header height

$page = $('html, body');
$('a[href*="#"]').click(function (e) {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
    }, 200);
});
var elementPosition = $('.header__top_wrapper').offset();
var elementheight = $(".header__top_wrapper").height();