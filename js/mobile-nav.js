var menu = document.getElementById('mobile-menu')
document.getElementById('mobile-menu-btn').addEventListener('click', function (e) {
  e.preventDefault()

  var menuButton = e.currentTarget
  var previousState = menuButton.getAttribute('aria-expanded')
  menuButton.setAttribute('aria-expanded', previousState === 'true' ? 'false' : 'true')
  menu.classList.toggle('open')
})