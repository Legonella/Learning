function changeColor(event) {
	document.querySelectorAll('.active').forEach(function(item)
	{
		item.classList.remove('active')
	})

	event.target.classList.add('active')
}