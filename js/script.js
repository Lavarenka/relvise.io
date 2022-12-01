// для aio js анимация
AOS.init({
  duration: 1200,
})

//count
$('.counter').counterUp({
  delay: 10,
  time: 1500
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');