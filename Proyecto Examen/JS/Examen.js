var xmlDoc;
var numQuestions = 0;
var correct = 0;

window.onload = function() {
    leerXML();
	document.getElementById("Form").style.display = "none";
	document.getElementById("timer2").style.display = "none";
	document.getElementById("Puntuacion").style.display = "none";
	var threeMinutes = 05 * 1,
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
	document.getElementById("Form").style.display = "block";
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

function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            xmlDoc = this.responseXML;
            numQuestions = xmlDoc.getElementsByTagName('Question').length;
            printQuestions();
            printButton();
        }
    };
    xhttp.open("GET", "Xml/Examen.xml", true);
    xhttp.send();

}

function printQuestions() {

    for (var i = 0; i < numQuestions; i++) {

        var Type = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Type')[0].innerHTML;

        switch (Type) {
            case "radio":
                creatRadio(i);
                break;
            case "checkbox":
                creatCheck(i);
                break;
            case "text":
                creatText(i);
                break;
            case "multipleSelect":
                creatSelect(i);
                break;
            case "drop":
                creatDrop(i);
                break;
            default:
                console.log("default");
        }
    }
}

function creatText(i) {
    var numSol = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("Form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "Question");
    element.appendChild(div);

    var statement = document.createElement("label");
    statement.setAttribute('for', i);
    statement.innerHTML = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('statement')[0].innerHTML + "<br>";
    div.appendChild(statement);

    for (var q = 0; q < answer; q++) {

        var question = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Answer')[q].innerHTML;
        var text = document.createElement("input");

        text.setAttribute("Type", "text");
        text.setAttribute("name", i);
        text.setAttribute('id', i + "text");
        div.appendChild(text);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
    }
}
function creatSelect(i) {
    var numSol = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("Form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "Question");
    element.appendChild(div);

    var statement = document.createElement("label");
    statement.setAttribute('for', i);
    statement.innerHTML = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('statement')[0].innerHTML + "<br>";
    div.appendChild(statement);

    var select = document.createElement("select");
    select.setAttribute("id", i + "select");
    select.setAttribute("name", i);
    div.appendChild(select);

    for (var q = 0; q < answer; q++) {

        var question = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Answer')[q].innerHTML;
        var option = document.createElement("option");

        option.setAttribute("name", i);
        option.setAttribute("value", q);
        option.setAttribute('id', q + "check");
        option.innerHTML = question;
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', i);
    }
    label.innerHTML = "<br>";

    div.appendChild(label);
}

function creatDrop(i) {
    var numSol = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Answer").length;
    var form = document.getElementById("Form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    form.appendChild(div);

    var title = document.createElement('label');
    title.setAttribute('for', i);
    title.innerHTML = "<br />" + xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('statement')[0].innerHTML + "<br>";
    div.appendChild(title);

    var select = document.createElement("select");
    select.setAttribute("id", i + "select");
    select.setAttribute("name", i);
    div.appendChild(select);

    for (var q = 0; q < answer; q++) {
        var question = xmlDoc.getElementsByTagName("Question")[i].getElementsByTagName("Answer")[q].innerHTML;

        var option = document.createElement("option");
        option.setAttribute("name", i);
        option.setAttribute("value", q);
        option.setAttribute('id', q + "check");
        option.innerHTML = question;
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', i);
    }

    label.innerHTML = "<br>";

    div.appendChild(label);
}
