console.log("yahoo")
var allnav = document.getElementsByClassName("products-nav");
var prod = document.getElementsByClassName("prod");
var popular = document.getElementsByClassName("popular");
var latest = document.getElementsByClassName("latest");
console.log(allnav.length)

function allclicked(){
	reset();
	allnav[0].classList.toggle("mini-nav_active");
	for (var i = prod.length - 1; i >= 0; i--) {
		prod[i].classList.remove("hidden");
	}
}
function latestclicked(){
	console.log("latest");
	reset();
	allnav[1].classList.toggle("mini-nav_active");
	for (var i = popular.length - 1; i >= 0; i--) {
		popular[i].classList.add("hidden");
	}
	for (var i = latest.length - 1; i >= 0; i--) {
		latest[i].classList.remove("hidden");
	}
}
function popularclicked(){
	reset();
	allnav[2].classList.toggle("mini-nav_active");
	for (var i = latest.length - 1; i >= 0; i--) {
		latest[i].classList.add("hidden");
	}
	for (var i = popular.length - 1; i >= 0; i--) {
		popular[i].classList.remove("hidden");
	}
}

function reset(){
	for (var i = allnav.length - 1; i >= 0; i--) {
		allnav[i].classList.remove("mini-nav_active");
	}
}