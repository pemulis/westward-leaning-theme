/* Toggling the pop-up footer. */

$('a.popup-footer-toggle').on('click', function () {
  $( ".popup-footer" ).toggle();
});


/* Hide and show top navigation submenu. */

$( '.toggle-submenu-about' ).click(function() {
  $( '#nav-submenu-lookbook' ).hide();
  $( '#nav-submenu-about' ).show();
  $( '#nav-submenu-about' ).removeClass("hidden");
});

$( '.toggle-submenu-lookbook' ).click(function() {
  $( '#nav-submenu-about' ).hide();
  $( '#nav-submenu-lookbook' ).show();
  $( '#nav-submenu-lookbook' ).removeClass("hidden");
});


/* Sticky mini side menu for when the user scrolls past the navigation bar. */

$(window).scroll(function(){
  if ($(document).scrollTop() > 80) {
    $('#sticky-mini-menu').removeClass('hidden');
  } else {
    $('#sticky-mini-menu').addClass('hidden');
  }
});


/* Newsletter popup in footer. */

$('a.newsletter').on('click', function(e) {
  mcEvilPopupReopen();
  $(".popup-footer").toggle();
});


/* Mailchimp "Subscribe" click tracking in Google Analytics. */

$('#mc-embedded-subscribe').on('click', mcSubscribeCallback);

function mcSubscribeCallback() {
  ga('send', 'event', 'submit', 'click', 'mcSubscribe');
}