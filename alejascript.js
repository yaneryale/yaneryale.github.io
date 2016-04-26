$(document).ready(function () {
    // alert('welcome to my site! :)');
    var $arrLeft            = $('.left');
    var $arrRight           = $('.right');
    var currentSlide        = 0;
    var $slides             = $('.carousel-wrapper ul li');

    $arrLeft.click(function (event) {
        event.preventDefault();

        console.log('clicked on left arrow');
        currentSlide--;

        $slides.css({'z-index':'0'});
        $slides.eq(currentSlide).css({'z-index':'1'});
    });
    $arrRight.click(function (event) {
        event.preventDefault();

        console.log('clicked on left arrow');
        currentSlide++;

        $slides.css({'z-index':'0'});
        $slides.eq(currentSlide).css({'z-index':'1'});
    });
});
