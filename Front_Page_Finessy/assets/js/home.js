function activeList() {
	var servicelist = $('.service-list');
	servicelist.click(function() {
		document.querySelectorAll('.active')[0].classList.remove("active");
		$(this).addClass("active");
	});
}

function init() {
//	color();
	activeList();
}

window.addEventListener("DOMContentLoaded", init);
