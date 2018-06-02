window.onload = function() {
	actualizeHour();
}
	
function actualizeHour() {
	var date = new Date();

	var hours = date.getHours();

	var minutes = date.getMinutes();

	var seconds = date.getSeconds();

	var day = date.getDate();

	var month = date.getMonth();

	var year = date.getFullYear();


	var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


	document.getElementById("day").innerHTML = date.getDate();
	document.getElementById("month").innerHTML = [month[date.getMonth()]];
	document.getElementById("year").innerHTML = date.getFullYear();
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;



	console.log('date' + date.getDate());
	console.log('month' + date.getMonth());
	console.log('year' + date.getFullYear());



	if (hours >= 12){
		var ampm = 'PM';
	} else {
		var ampm = 'AM';
	}

	if (hours == 0){
		hours = 12;
	}

	document.getElementById("ampm").innerHTML = ampm;

	setTimeout(actualizeHour, 1000);
}