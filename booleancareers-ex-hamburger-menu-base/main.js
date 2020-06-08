
// Medoto uno con una variabile

// var hamMenu = false;
//
//
// $('a .fas').click(function () {
//   if (!hamMenu) {
//     $('.hamburger-menu').fadeIn();
//     hamMenu = true;
//   }
//   else {
//     $('.hamburger-menu').fadeOut();
//     hamMenu = false;
//   }
//
//
//
// });

// metodo due senza la variabile


$('a .fas').click(function () {
  $('.hamburger-menu').fadeIn('fast')
});

$('.close .fas').click(function () {
  $('.hamburger-menu').fadeOut('fast')

});
