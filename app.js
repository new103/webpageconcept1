// Open menu

const open = document.querySelector('.open');
const navList = document.querySelector('.nav-list');

open.addEventListener('click', () => {
	navList.classList.add('active')
})

// Close menu
const close = document.querySelector('.close');
close.addEventListener('click', () => {
	navList.classList.remove('active');
})
