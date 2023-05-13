const hamburgerBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')

function toggleMenu() {
  hamburgerBtn.classList.toggle('open')
  menu.classList.toggle('hidden')
  menu.classList.toggle('flex')
}

hamburgerBtn.addEventListener('click', () => {
  toggleMenu()
})