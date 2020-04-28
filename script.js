$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if (position >=200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >=560) {
            $('.nav-image').addClass('fromLeft')
            $('.nav-pill-heading').addClass('fromRight')
        } else {
            $('.nav-image').removeClass('fromLeft')
            $('.nav-pill-heading').removeClass('fromRight')
        }
    })
});