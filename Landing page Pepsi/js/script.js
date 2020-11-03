function img_slider (anything) {
	document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color) {
	const container = document.querySelector('.container');
	container.style.background = color;
}

function menu_toggle () {
	const toggle_menu = document.querySelector('.toggle_menu');
	const navigate = document.querySelector('#navigate');
	toggle_menu.classList.toggle('active');
	navigate.classList.toggle('active');
}