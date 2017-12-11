$(document).ready(function() {
    $('.animate-one').fadeIn('slow', function() {
        setTimeout(function() {
            $('.animate-two').fadeIn('slow')
        }, 500);
    });
})