const carousel = document.querySelector('.carousel')

carousel.addEventListener('mouseenter', () => {
	carousel.style.animationPlayState = 'paused'
})

carousel.addEventListener('mouseleave', () => {
	carousel.style.animationPlayState = 'running'
})

const menuToggle = document.getElementById('menu-toggle')
const menuIcon = document.getElementById('menu-icon')
const mobileMenu = document.getElementById('mobile-menu')
const header = document.getElementById('header')

menuToggle.addEventListener('click', function () {
	if (mobileMenu.classList.contains('hidden')) {
		menuIcon.innerHTML = `
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        `
		header.classList.remove('rounded-3xl')
		if (window.scrollY == 0) {
			header.classList.add('rounded-t-3xl')
		}
	} else {
		menuIcon.innerHTML = `
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        `
		if (window.scrollY == 0) {
			header.classList.add('rounded-3xl')
		}
	}

	mobileMenu.classList.toggle('hidden')
})

window.addEventListener('scroll', function () {
	if (window.scrollY > 0) {
		header.classList.add('bg-opacity-100', 'w-full', 'top-0')
		header.classList.remove(
			'bg-opacity-90',
			'top-10',
			'left-1/2',
			'transform',
			'rounded-3xl',
			'rounded-t-3xl',
			'-translate-x-1/2',
			'w-[95%]'
		)
	} else {
		header.classList.add(
			'bg-opacity-90',
			'top-10',
			'left-1/2',
			'transform',
			'-translate-x-1/2',
			'shadow-lg',
			'w-[95%]'
		)
		if(mobileMenu.classList.contains('hidden')) {
			header.classList.add('rounded-3xl')
		}
		header.classList.remove('bg-opacity-100', 'w-full', 'top-0')
	}
})
