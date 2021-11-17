const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')

const ACTIVE = 'active'

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle(ACTIVE)
	navigation.classList.toggle(ACTIVE)
})
