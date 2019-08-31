document.addEventListener('DOMContentLoaded', function () {
  let header = document.getElementsByClassName('site-header')[0]

  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top - header.clientHeight
      },
      2000
    );
  });
})