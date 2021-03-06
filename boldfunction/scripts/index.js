/*parsley validation*/
$(function () {
  $('#registerForm').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
  })
  .on('form:submit', function() {
    return false; 
  });

$(document).on('scroll', showScroll);

$(document).on('scroll', showContact);

});

/*for scroll animation*/

function showScroll(event){
    if ($(window).scrollTop() >= 450){
        $('#fade-in').fadeIn(2500);
    }else{
        $('#fade-in').fadeOut(1000);
    }
    console.log(window.pageYOffset);
}

function showContact(event){
    if ($(window).scrollTop() >= 1000){
        $('#fade-contact').fadeIn(2500);
    }else{
        $('#fade-contact').fadeOut(1000);
    }
}