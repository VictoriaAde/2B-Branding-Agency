/////////// mobileMenu

function navMenu() {
	var menu = document.querySelector('.menu_con');
	if (menu.classList.contains('responsive')) {
		menu.classList.remove('responsive');
		document.querySelector('.menu_btn').style.display = 'inline-block';
		document.querySelector('.close_btn').style.display = 'none';
		document.querySelector('.menu_con').style.display = 'none';
	} else {
		menu.classList.add('responsive');
	    document.querySelector('.close_btn').style.display = 'inline-block';
		document.querySelector('.menu_btn').style.display = 'none';
		document.querySelector('.menu_con').style.display = 'inline-block';

	}
}

