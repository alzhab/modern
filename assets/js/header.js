document.addEventListener('DOMContentLoaded', function () {
  let header = document.getElementsByClassName('site-header')[0]

  document.addEventListener('scroll', function () {
    if($(document).scrollTop() >= header.clientHeight){
      header.classList.add('site-header--mini')
    }else{
      header.classList.remove('site-header--mini')
    }
  })
})