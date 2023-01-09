document.addEventListener('DOMContentLoaded', function () {
	//nasłuchiwanie na cały dokument,tworzenie fikcyjnej zmiennej,przyciemnienie nav jak przewijamy całą strone do góry

	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

allNavItems.forEach(item => item.addEventListener('click' ,()=> navList.classList.remove('show')))



	window.addEventListener('scroll', addShadow);
});

