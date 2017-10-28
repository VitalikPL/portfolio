function myFunction () {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
};
// Scrol
var timeOut;
function goUP() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top>0) {
		window.scrollBy(0, -100);
		timeOut = setTimeout('goUP()', 20);
	} else clearTimeout(timeOut);
};

var stopTime;
function goDown() {
	var toper = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (toper<700) {
		window.scrollBy(0, 10);
		stopTime = setTimeout('goDown()', 10);
	} else clearTimeout(stopTime);
};


