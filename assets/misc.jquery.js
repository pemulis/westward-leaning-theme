/* Toggling the pop-up footer. */

$('a.popup-footer-toggle').on('click', function () {
  $( ".popup-footer" ).toggle();
  $('#mc_embed_signup.mc_popup').addClass('hidden');
});

/* Closing the Mailchimp popup. */

$('#mc_embed_signup a.close').on('click', function() {
  $('#mc_embed_signup.mc-popup').addClass('hidden');
  Cookies.set('WestwardLeaningNewsletterClosed', 'true');
  //document.cookie = "WestwardLeaningNewsletterClosed=true;";
});


/* Sticky menu for when the user scrolls past the navigation bar. */

$(window).scroll(function(){
  if ($(document).scrollTop() > 80) {
    $('#sticky-mini-menu').removeClass('hidden');
  } else {
    $('#sticky-mini-menu').addClass('hidden');
  }
});

/* Highlight top level option of dropdown menu when hovering over suboptions. */

$('.dropdown-menu').hover(function() {
  $(this).parent('.dropdown').addClass('open');
}, function() {
  $(this).parent('.dropdown').removeClass('open');
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