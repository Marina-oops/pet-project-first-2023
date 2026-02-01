document.querySelector('.buttons').addEventListener('click', function () {
	document.getElementById('modal_zakaz').style.display = "block";
});

document.querySelector('.modal').addEventListener('click', function (event) {
	if (event.target === document.querySelector('.modal')) {
		document.getElementById('modal_zakaz').style.display = "none";
	}
});
