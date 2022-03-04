
jQuery(document).ready(function($) {
  $( "#accordion" ).accordion({
  collapsible: true,
  icons: false,
  heightStyle: "content",
  active: false,
  animate: {
    duration: 1000,   //  1 секунда
    easing: 'easeInOutSine'
  }
});



$( "#accordion2" ).accordion({
  collapsible: true,
  icons: false,
  heightStyle: "content",
  animate: {
    duration: 1000,   //  1 секунда
    easing: 'easeInOutSine'
  }
});


});
