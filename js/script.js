function myFunction () {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
};
// Scrol
window.onscroll = function () {
	var scrollElem = document.getElementById('scrollTop');
	if(document.body.scrollTop < document.documentElement.clientHeight) {
		scrollElem.style.opacity = "1";
	} else {
		scrollElem.style.opacity = "0";
	}
};
var timeOut;
function goUP() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top>0) {
		window.scrollBy(0, -100);
		timeOut = setTimeout('goUP()', 20);
	} else clearTimeout(timeOut);
}

