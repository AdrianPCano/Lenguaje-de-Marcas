window.onload = function() {
	document.getElementById("exam").style.display = "none";
	document.getElementById("timer2").style.display = "none";
	document.getElementById("Puntuacion").style.display = "none";
	var threeMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer1(threeMinutes, display);

    var fiveMinutes = 60 * 16,
        display2 = document.querySelector('#timer');
    startTimer2(fiveMinutes, display2);
}

function startTimer1(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        --timer;

        if (document.getElementById("time").innerHTML == "00:00") {
        	show();
        	seconds + 2;
        }
    }, 1000);
}

function startTimer2(duration2, display2) {
    var timer2 = duration2, minutes2, seconds2;
    setInterval(function () {
        minutes2 = parseInt(timer2 / 60, 10)
        seconds2 = parseInt(timer2 % 60, 10);

        minutes2 = minutes2 < 10 ? "0" + minutes2 : minutes2;
        seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;

        display2.textContent = minutes2 + ":" + seconds2;

        --timer2;

        if (timer2 > 0) {
            ExamStart();
        }
    }, 1000);
}

function show() {
	document.getElementById("timer1").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("timer2").style.display = "block";
	document.getElementById("exam").style.display = "block";
}

function ExamStart() {
	if (document.getElementById("timer").innerHTML == "14:59") {
		alert("Exam is starting!");
	} else if (document.getElementById("timer").innerHTML == "00:00") {
		alert("Exam is over!");
		document.getElementById("timer2").style.display = "none";
		document.getElementById("Puntuacion").style.display = "block";
	} else {
		ExamStart();
	}
}

function done() {
	document.getElementById("timer2").style.display = "none";
	document.getElementById("Puntuacion").style.display = "block";
}