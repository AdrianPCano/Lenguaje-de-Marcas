window.onload = function() {
	var actualizeHour = function(){
		var date = new Date(),
			hours = date.getHours(),
			ampm,
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			day = date.getDate(),
			month = date.getMonth(),
			year = date.getFullYear();

		document.getElementById('hours').innerHTML = hello + "::";
		var pHours = document.getElementById('hours'),
		var pAMPM = document.getElementById('ampm'),
		var pMinutes = document.getElementById('minutes'),
		var pSeconds = document.getElementById('seconds'),
		var pDay = document.getElementById('day'),
		var pMonth = document.getElementById('month'),
		var pYear = document.getElementById('year');

		pDay.textContent = day;

		var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

		pMonth.textContent = month[month];

		pYear.textContent = year;

		if (hours >= 12){
			hours = hours -12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		if (hours == 0){
			hours = 12;
		}

		pHours.textContent = hours;
		pAMPM.textContent = ampm;

		if (minutes < 10){
			minutes = "0" + minutes;
		}
		if (seconds < 10){
			seconds = "0" + seconds;
		}

		pMinutes.textContent = minutes;
		pSeconds.textContent = seconds;
	};


	actualizeHour();
	var interval setInterval(actualizeHour, 1000);
	
}