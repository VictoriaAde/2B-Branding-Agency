/////////// mobileMenu

function navMenu() {
	var menu = document.querySelector('.menu_con');
	if (menu.classList.contains('responsive')) {
		menu.classList.remove('responsive');
		document.querySelector('.menu_btn').style.display = 'inline-block';
		document.querySelector('.close_btn').style.display = 'none';
		// document.querySelector('.menu_con').style.visibility = 'hidden';
	} else {
		menu.classList.add('responsive');
		document.querySelector('.close_btn').style.display = 'inline-block';
		document.querySelector('.menu_btn').style.display = 'none';
		// document.querySelector('.menu_con').style.visibility = 'visible';

	}
}


// // switching btw modes

const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
sun.addEventListener('click', function () {

	document.documentElement.setAttribute('data-theme', 'light');

})

moon.addEventListener('click', function () {

	document.documentElement.setAttribute('data-theme', 'dark');
	
})





