// first question

function showOpenYardAnswer() {
	var selectedOpenYard = document.querySelector('input[name="OpenYard"]:checked');
	if (selectedOpenYard) {
		var OpenYardName = selectedOpenYard.nextElementSibling.querySelector('p').innerText;
		var OpenYardImg = selectedOpenYard.nextElementSibling.querySelector('img').getAttribute('src');
		localStorage.setItem('OpenYard', OpenYardName);
		localStorage.setItem('OpenYardImg', OpenYardImg);
		// window.location.href = 'answer.html';
	} else {
		alert('Please select an open yard');
	}
}

var OpenYardName = localStorage.getItem('OpenYard');
var OpenYardImg = localStorage.getItem('OpenYardImg');
if (OpenYardName && OpenYardImg) {
	document.getElementById('OpenYard').innerText = OpenYardName;
	document.getElementById('OpenYardImg').setAttribute('src', OpenYardImg);
}


// second question

function showBetweenAnswer() {
	var selectedBetween = document.querySelector('input[name="Between"]:checked');
	if (selectedBetween) {
		var BetweenName = selectedBetween.nextElementSibling.querySelector('p').innerText;
		var BetweenImg = selectedBetween.nextElementSibling.querySelector('img').getAttribute('src');
		localStorage.setItem('Between', BetweenName);
		localStorage.setItem('BetweenImg', BetweenImg);
		// window.location.href = 'answer.html';
	} else {
		alert('Please select an in-between form');
	}
}

var BetweenName = localStorage.getItem('Between');
var BetweenImg = localStorage.getItem('BetweenImg');
if (BetweenName && BetweenImg) {
	document.getElementById('Between').innerText = BetweenName;
	document.getElementById('BetweenImg').setAttribute('src', BetweenImg);
}

// third question

function showPersonalAnswer() {
	var selectedPersonal = document.querySelector('input[name="Personal"]:checked');
	if (selectedPersonal) {
		var PersonalName = selectedPersonal.nextElementSibling.querySelector('p').innerText;
		var PersonalImg = selectedPersonal.nextElementSibling.querySelector('img').getAttribute('src');
		localStorage.setItem('Personal', PersonalName);
		localStorage.setItem('PersonalImg', PersonalImg);
		// window.location.href = 'answer.html';
	} else {
		alert('Please select a personal space form');
	}
}

var PersonalName = localStorage.getItem('Personal');
var PersonalImg = localStorage.getItem('PersonalImg');
if (PersonalName && PersonalImg) {
	document.getElementById('Personal').innerText = PersonalName;
	document.getElementById('PersonalImg').setAttribute('src', PersonalImg);
}
