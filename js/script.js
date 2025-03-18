
  $('.leader-sec').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    // focusOnSelect: true,
    arrows: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }]
});



$('.banking-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    loop: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


$('.islamic-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    loop: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });



  $(document).ready(function () {
    $('.faq-question').click(function () {
        $('.faq-answer:visible').slideUp(function () {
            $(this).closest('.fad-item').removeClass('active');
        });

        var answer = $(this).next('.faq-answer');
        if (answer.is(':hidden')) {
            answer.slideDown();
            $(this).closest('.fad-item').addClass('active');
        }
    });
});