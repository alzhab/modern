document.addEventListener('DOMContentLoaded', function () {
  let play = document.getElementsByClassName('showcase__play')[0]
  let video = play.nextElementSibling;
  let parent = play.parentElement
  let videoPLay = false
  
  play.addEventListener('click', function () {
    videoPLay = !videoPLay
    if (videoPLay) {
      video.play()
      play.children[0].classList = 'fas fa-pause';
      play.classList.add('paused')
    } else {
      video.pause()
      play.children[0].classList = 'fas fa-play'
      play.classList.remove('paused')

    }
  })

  parent.addEventListener('mouseover', function () {
    if (videoPLay) {

    }
  })

  parent.addEventListener('mouseout', function () {
    if (videoPLay) {
      video.style.background = 'none'
    }
  })


})