

document.addEventListener("DOMContentLoaded", function () {

  // Что бы выбранный пункт оставался активным
  const navigation_link = document.querySelectorAll('.solutions__form-search')

  navigation_link.forEach(function (NavLink) {

    NavLink.addEventListener('click', function (event) {

      navigation_link.forEach(function (links) {
        links == NavLink ? links.classList.add('solutions__form-search--active') : links.classList.remove('solutions__form-search--active')
      })
    })
  })


})
