function check() {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value; 
	var pictures = ["win.gif", "meh.jpeg", "lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var correct = 0;
	var range;
	if (question1 == "9") {
		correct++;
	}
	if (question2 == "1") {
		correct++;
	}	
	if (question3 == "Tom60229") {
		correct++;
	}
	if (question4 == "20+Rec") {
		correct++;
	}
	if (question5 == "Todos") {
		correct++;
	}
	if (question6 == "Esbirros1") {
		correct++;
	}
	if (question7 == "Leeroy") {
		correct++;
	}
	if (question8 == "King") {
		correct++;
	}
	if (question9 == "Moroes") {
		correct++;
	}
	if (question10 == "Alamuerte") {
		correct++;
	}
	if (question11 == "Jade") {
		correct++;
	}
	if (correct < 1) {
		range = 2;
	}
	if (correct > 0 && correct < 5) {
		range = 1;
	}
	if (correct > 5) {
		range= 0;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
}