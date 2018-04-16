var xmlDoc;
var numQuestions = 0;
var resultados = 0;

window.onload = function() {
    leerXML();
	document.getElementById("Form").style.display = "none";
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
    xhttp.open("GET", "xml/Examen.xml", true);
    xhttp.send();

}

function printQuestions() {

    for (var i = 0; i < numQuestions; i++) {

        var type = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('type')[0].innerHTML;

        switch (type) {
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

function creatRadio(i) {

    var numSol = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Answer').length;
    var element = document.getElementById("Form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);

    var statement = document.createElement("label");
    statement.setAttribute('for', i);
    statement.innerHTML = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('statement')[0].innerHTML + "<br>";

    var image = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('img')[0];
    if (image){
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('img')[0].innerHTML);
        div.appendChild(img)
    }
    div.appendChild(statement);
    
    for (var q = 0; q < answer; q++) {

        var question = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName('Answer')[q].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", q);
        radioBut.setAttribute('id', q + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}
function creatCheck(i) {
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
        var check = document.createElement("input");

        check.setAttribute("type", "checkbox");
        check.setAttribute("name", i);
        check.setAttribute("value", q);
        check.setAttribute('id', q + "checkbox");
        div.appendChild(check);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question + "<br>";

        div.appendChild(label);
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

        text.setAttribute("type", "text");
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

function checkQuestions() {

    for (var i = 0; i < numQuest; i++) {
        var tipo = xmlDoc.getElementsByTagName('Question')[i].getElementsByTagName("type")[0].innerHTML;

        switch (type) {
            case "radio":
                checkRadio(i);
                break;
            case "checkbox":
                checkCheckbox(i);
                break;
            case "text":
                checkText(i);
                break;
            case "multipleSelect":
                checkSelect(i);
                break;
            case "drop":
                checkDrop(i);
                break;
        }
    }
}

function checkRadio(x) {

    var radis = document.getElementsByName(x);
    var isNull = true;
    for (var a = 0, length = radis.length; a < length; a++) {

        if (radios[z].checked) 
        {
            var SelQuestion = radis[a].getAttribute("value");

            var answ = xmlDoc.getElementsByTagName("Question")[x].getElementsByTagName("Answer")[SelQuestion].getAttribute("correct");

            if (answ) {
                document.getElementById("div"+x).style.backgroundColor="#00cc00";
                results++;
            }
            else {
                document.getElementById("div"+x).style.backgroundColor="#cc0000";
                
            }

            break;
        }

        if (isNull) {
            document.getElementById("div" + x).style.backgroundColor = "#cc0000";
        }

    }
}

function checkCheckbox(x) {

    var countCorrects = 0;
    var countSelects= 0;
    var countSelectsCorrects = 0;
    var isNull = true;
    var radis = document.getElementsByName(x);

    for (var a = 0, length = radis.length; a < length; a++) {
        var SelQuestion = radios[a].getAttribute("value");
        if (xmlDoc.getElementsByTagName("Question")[x].getElementsByTagName("Answer")[SelQuestion].getAttribute("correct")) {
            countCorrects += 1;
        }

    }

    for (var a = 0, length = radis.length; a < length; a++) {

        if (radis[a].checked)
        {
            var SelQuestion = radis[a].getAttribute("value");
            var answ = xmlDoc.getElementsByTagName("Question")[x].getElementsByTagName("respuesta")[SelQuestion].getAttribute("correcto");
            
            if (answ) {
                document.getElementById("div"+x).style.backgroundColor="#00cc00";
                resultados++;
                
            }
            else {
                document.getElementById("div"+x).style.backgroundColor="#cc0000";
            }

            break;
        }

        if (isNull) {
            document.getElementById("div" + x).style.backgroundColor = "#cc0000";
        }
    }
}

function checkText(x) {
    try {
        var userAnsw = document.getElementById(x + "text").value;
    } catch (e) {
    }
    var answ = xmlDoc.getElementsByTagName("Question")[x].getElementsByTagName("respuesta")[0].innerHTML;

    if (answ ==userAnsw) {
        document.getElementById("div"+x).style.backgroundColor="#00cc00";
        resultados++;
        
    }
    else {
         document.getElementById("div"+x).style.backgroundColor="#cc0000";
    }
}

function checkSelect(x) {

    var checked = document.getElementsByName(x);

    for (var a = 0, length = checked.length; a < length; a++) {
        if (checked[a].selected)
        {
            var SelQuestion = document.getElementById(x + "select").value;
            var answ = xmlDoc.getElementsByTagName("Question")[x].getElementsByTagName("Answer")[SelQuestion].getAttribute("correcto");

        if (answ) {
            document.getElementById("div"+x).style.backgroundColor="#00cc00";
            results++;   
        }
        else {
            document.getElementById("div"+x).style.backgroundColor="#cc0000";
        }
            break;
        }
    }
}

function printButton(){
    var element = document.getElementById("Form");
    element.innerHTML = element.innerHTML + "<br/>";
    var textinp = document.createElement('button');
    textinp.setAttribute('type', "button");
    textinp.setAttribute('onclick', "checkPreguntas()");
    textinp.innerHTML= "Obtén tu calificación: ";
    element.appendChild(textinp);
}

function printResultados() {
    var element = document.getElementById("Form");
    var div = document.createElement("div");
    element.appendChild(div);
    var label = document.createElement('label');
    label.innerHTML = "Respuestas correctas:"+ " " + results;
    div.appendChild(label);
}