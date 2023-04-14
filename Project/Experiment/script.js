function showanimalAnswer() {
	var selectedAnimal = document.querySelector('input[name="animal"]:checked');
	if (selectedAnimal) {
		var animalName = selectedAnimal.nextElementSibling.querySelector('p').innerText;
		var animalImg = selectedAnimal.nextElementSibling.querySelector('img').getAttribute('src');
		localStorage.setItem('animal', animalName);
		localStorage.setItem('animalImg', animalImg);
		// window.location.href = 'answer.html';
	} else {
		alert('Please select an animal');
	}
}

var animalName = localStorage.getItem('animal');
var animalImg = localStorage.getItem('animalImg');
if (animalName && animalImg) {
	document.getElementById('animal').innerText = animalName;
	document.getElementById('animalImg').setAttribute('src', animalImg);
}


function showfoodAnswer() {
	var selectedFood = document.querySelector('input[name="food"]:checked');
	if (selectedFood) {
		var foodName = selectedFood.nextElementSibling.querySelector('p').innerText;
		var foodImg = selectedFood.nextElementSibling.querySelector('img').getAttribute('src');
		localStorage.setItem('food', foodName);
		localStorage.setItem('foodImg', foodImg);
		// window.location.href = 'answer.html';
	} else {
		alert('Please select a food');
	}
}

var foodName = localStorage.getItem('food');
var foodImg = localStorage.getItem('foodImg');
if (foodName && foodImg) {
	document.getElementById('food').innerText = foodName;
	document.getElementById('foodImg').setAttribute('src', foodImg);
}

