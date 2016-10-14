//click scroll
function scrollToHome() {
  $('html,body').animate({
    scrollTop: $("#home").offset().top
  }, 1000);
  return false;
}

function scrollToAbout() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000);
  return false;
}

function scrollToPortfolio() {
  $('html, body').animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
  return false;
}

function scrollToContact() {
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
  return false;
}

//nav actions
$('ul.nav > li').click(function(event) {
  e.preventDefault();
});

//remove target on ios
$('#searchform').submit(function(e) {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    $(this).removeAttr('target');
  }
});