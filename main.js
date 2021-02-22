  //function expression


var hamburgerButton = document.querySelector('.nav-menu');
var mobileNav =document.querySelector('.mobile');

 function openMobile () {
   mobileNav.classList.add('open');
 }
 
 function closeMobile () {
   mobileNav.classList.remove('open');
 }
 
 
 hamburgerButton.addEventListener('click',openMobile);
 mobileNav.addEventListener('click',closeMobile);