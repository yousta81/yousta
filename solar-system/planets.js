
const planets = [];
const au = 149597870.7; //kilometres (exactly)
const sunName = document.getElementById("sun");
const planetInitialSize = "6vh";
const sunInitialSize = "100px";
var trueSizeBtn = document.getElementById("trueSize");
var trueDistBtn = document.getElementById("trueDist");
var naviHeight = document.getElementById("navigation").offsetHeight;
const scale = 1000;
const infoBox = document.getElementById("info");

//konstruktor obiektu
const planet = function(name, radius, distance) {
    this.name = name;
    this.radius = radius; //km
    this.distance = distance; //au
    planets.push(this);
}

let mercury = new planet("Mercury", 2440, 0.39);
let venus = new planet("Venus", 6052, 0.72);
let earth = new planet("Earth", 6371, 1);
let mars = new planet("Mars", 3390, 1.52);
let jupiter = new planet("Jupiter", 69991, 5.2);
let saturn = new planet("Saturn", 58232, 9.5);
let uranus = new planet("Uranus", 25362, 19.2);
let neptune = new planet("Neptune", 24622, 30.1);
let sun = {
	name: "sun",
	radius: 696340
}

const resizeDiameters = function() {
	for(var i=0; i<planets.length; i++) {
		let planetDiameter = planets[i].radius*2;
		let planetSize = Math.ceil((planetDiameter)/scale);
		let planet = document.getElementById(planets[i].name.toLowerCase());
		planet.style.width = planetSize  + "px";
		planet.style.height = planetSize  + "px";
		planet.classList.toggle("darken");
	}

	let sunSize = Math.ceil((sun.radius*2)/scale);
    sunName.style.width = sunSize + "px";
    sunName.style.height = sunSize + "px";
    sunName.style.marginTop = "-" + (sunSize - 50) + "px";
    sunName.style.top = sunSize + "px";
    document.body.style.height = sunSize + naviHeight + 100 + "px";
    infoBox.innerHTML = "<p>1 px is "+ scale + " km</p>"
}


var resetDiameters = function() {
	if (trueSizeBtn.classList.contains("clickedButton")) {
		const planets = document.querySelectorAll('.planet');
		planets.forEach(planet => {
  		planet.style.width = planetInitialSize;
  		planet.style.height = planetInitialSize;
});
		sunName.style.width = sunInitialSize;
  		sunName.style.height = sunInitialSize;
  		sunName.style.marginTop = "10px";
  		sunName.style.top = "0px";  	
  		document.body.style.height = "100%";
  		infoBox.innerHTML = ""
	}
}

trueSizeBtn.addEventListener("click", resizeDiameters);
trueSizeBtn.addEventListener("click", resetDiameters);

const trueDist = function() {
	let scale = 300000;
	for(var i=0; i<planets.length; i++) {
		let planet = document.getElementById(planets[i].name.toLowerCase());
		planet.style.width = "2px";
		planet.style.height = "2px";
		planet.style.top = (planets[i].distance*au)/scale + "px";

	}
	sunName.style.width = sun.radius*2/scale + "px";
    sunName.style.height = sun.radius*2/scale + "px";

   
}

//trueDistBtn.addEventListener("click", resetDiameters);
//trueDistBtn.addEventListener("click", trueDist);




var buttons = document.querySelectorAll(".menu button");
buttons.forEach(
	function(button) {
		button.addEventListener("click", () =>{
		button.classList.toggle("clickedButton");
		})}
	);


