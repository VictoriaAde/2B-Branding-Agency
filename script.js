/////////// mobileMenu

function navMenu() {
	var menu = document.querySelector('.menu_con');
	if (menu.classList.contains('responsive')) {
		menu.classList.remove('responsive');
		// document.querySelector('.menu_btn').style.display = 'inline-block';
		// document.querySelector('.close_btn').style.display = 'none';

		// document.querySelector('.menu_con').style.visibility = 'hidden';
	} else {
		menu.classList.add('responsive');
		// document.querySelector('.close_btn').style.display = 'inline-block';
		// document.querySelector('.menu_btn').style.display = 'none';
		// document.querySelector('.menu_con').style.visibility = 'visible';

	}
}


// // switching btw modes
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

sun.addEventListener('click', function () {
	document.documentElement.setAttribute('data-theme', 'light');
	document.querySelector('.logo-dark').style.display = 'none';
	document.querySelector('.logo-light').style.display = 'block';

	document.querySelector(".section_one_black_img").style.display = 'none';
	document.querySelector(".section_one_white_img").style.display = 'block';

	document.querySelector("#sun").style.display = 'none';
	document.querySelector("#moon").style.display = 'block';
})

moon.addEventListener('click', function () {
	document.documentElement.setAttribute('data-theme', 'dark');
	document.querySelector('.logo-dark').style.display = 'block';
	document.querySelector('.logo-light').style.display = 'none';

	document.querySelector(".section_one_black_img").style.display = 'block';
	document.querySelector(".section_one_white_img").style.display = 'none';

	document.querySelector("#sun").style.display = 'block';
	document.querySelector("#moon").style.display = 'none';
})

// // // switching btw modes with images
// const black = document.querySelector("section_one_black_img");
// const white = document.querySelector("section_one_white_img");

// black.addEventListener('click', function(){
// 	document.querySelector('logo-dark').style.display = ''
// })



