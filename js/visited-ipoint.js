
document.addEventListener("DOMContentLoaded", function () {

  // Что бы выбранный пункт оставался активным
  const navigation_link = document.querySelectorAll('.marker-point')

  navigation_link.forEach(function (NavLink) {

    NavLink.addEventListener('click', function (event) {

      navigation_link.forEach(function (links) {
        links == NavLink ? links.classList.add('marker-point--active') : links.classList.remove('marker-point--active')
      })

    })
  })


})
