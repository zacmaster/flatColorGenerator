$(document).ready(function(){
	var counter = 0;
	var flatColors = {"TURQUOISE":"#1abc9c", "EMERALD":"#2ecc71","PETER RIVER":"#3498db", "AMETHYST":"#9b59b6","WET ASPHALT":"#34495e","GREEN SEA":"#16a085","NEPHRITIS":"#27ae60","BELIZE HOLE":"#2980b9","WISTERIA":"#8e44ad","MIDNIGHT BLUE":"#2c3e50","SUN FLOWER":"#f1c40f","CARROT":"#e67e22","ALIZARIN":"#e74c3c","CLOUDS":"#ecf0f1","CONCRETE":"#95a5a6","ORANGE":"#f39c12","PUMPKIN":"#d35400","POMEGRANATE":"#c0392b","SILVER":"#bdc3c7","ASBESTOS":"#7f8c8d"}
	var uniqueRandoms = [];
	// console.log(Object.keys(flatColors).length);

	function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < Object.keys(flatColors).length; i++) {
            uniqueRandoms.push(Object.keys(flatColors)[i]);
        }
    }
    // console.log(uniqueRandoms);
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;

	}

	function addSquare(){
		if(counter < 20){
			var color = makeUniqueRandom();
			var div = document.createElement("div");

			div.className += "square animated fadeInUp";
			div.style.background = flatColors[color];
			if(color == "CLOUDS"){
				div.style.color = "gray";
				div.style.border = "white";
			}
			else{
				div.style.color = "white";
			}
			var t = document.createTextNode(color);
			$("#contenido").append(div);
			div.appendChild(t);
			div.appendChild(document.createElement("br"));
			div.appendChild(document.createTextNode(flatColors[color].toUpperCase()));
			counter++;
			
		}
	}
	$("h1").hover(function() {
		$(this).addClass('hvr-grow-rotate');

	});
	$(".btn").mouseup(function(){
    	$(this).blur();
	})

	$("#square").click(function(){
		addSquare();
	});
	$("#remove").click(function(){
		$("div.square").removeClass('fadeInUp');
		$("div.square").fadeOut('slow', function() {
			$("div.square").remove();
		});;
		counter = 0;
	});
});