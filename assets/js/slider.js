document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
  let arrowLeft = document.getElementsByClassName('shop__arrow--left')[0]
  let arrowRight = document.getElementsByClassName('shop__arrow--right')[0]

  let slider = document.getElementsByClassName('shop__slider')[0]

  let slidersList = document.getElementsByClassName('shop__slide')

  let x = 0
  let moveNumber
  let maxItem

  if (window.matchMedia('(min-width: 800px)').matches) {
    moveNumber = 33.333333
    maxItem = 2
  } else {
    moveNumber = 100
    maxItem = 1
  }

  window.onresize = function () {
    x = 0;
    slider.style.transform = `translateX(${x}%)`

    if (window.matchMedia('(min-width: 800px)').matches) {
      moveNumber = 33.333333
      maxItem = 3
    } else {
      moveNumber = 100
      maxItem = 1
    }
  };

  arrowRight.addEventListener('click', function () {
    if (x !== (slidersList.length - maxItem) * -moveNumber) {
      x -= moveNumber

      slider.style.transform = `translateX(${x}%)`
    }
  })

  arrowLeft.addEventListener('click', function () {
    if (x < 0) {
      x += moveNumber

      slider.style.transform = `translateX(${x}%)`
    }
  })
});