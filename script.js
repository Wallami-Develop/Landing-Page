function setItemsProperty() {
	document.getElementById('section1').style.height = window.innerHeight + "px";
	document.getElementById('section2').style.top = window.innerHeight + "px";
	document.getElementById('section2').style.height = window.innerHeight + "px";
	document.getElementById('section3').style.top = 2 * window.innerHeight + "px";
	document.getElementById('section3').style.height = window.innerHeight + "px";
	document.getElementById('section4').style.top = 3 * window.innerHeight + "px";
	document.getElementById('section4').style.height = window.innerHeight + "px";

	const customBackgroundElements = document.querySelectorAll('.customBackground');
	customBackgroundElements.forEach(element => {
		element.style.height = window.innerHeight + "px";
	});
}
window.addEventListener("load", setItemsProperty);
window.addEventListener("resize", setItemsProperty);