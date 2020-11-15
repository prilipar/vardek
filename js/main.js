document.querySelector(".hamburger-wraper").onclick = function(){
  document.querySelector(".hamburger__menu").classList.toggle("hamburger__menu--active");
  document.querySelector(".hamburger__container").classList.toggle("hamburger__container--active");
  
  document.querySelector(".hamburger__container").classList.add('animate__animated', 'animate__bounceInDown');
}







