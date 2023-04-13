// // Global variables to store user's choices
// let animalChoice = "";
// let colorChoice = "";
// let foodChoice = "";

// Helper function to toggle option selection
function toggleOptionSelection(option) {
  const choice = document.querySelectorAll('.option');
  choice.forEach((opt) => {
    if (opt !== option) {
      opt.classList.remove('selected');
    }
  });
  choice.classList.toggle('selected');
}

// Function to handle option selection for each question
function selectOption(choice, question) {
  switch (question) {
    case 1:
      animalChoice = choice;
      break;
    case 2:
      colorChoice = choice;
      break;
    case 3:
      foodChoice = choice;
      break;
  }
  toggleOptionSelection(event.target);
}

// Function to navigate to next page after selection is made
function goToNextPage() {
  const currentPage = window.location.pathname.split("/").pop();
  switch (currentPage) {
    case "question1.html":
      window.location.href = "question2.html";
      break;
    case "question2.html":
      window.location.href = "question3.html";
      break;
    case "question3.html":
      window.location.href = "answer.html";
      break;
  }
}

// Function to navigate back to home page to start over
function goToHomePage() {
  window.location.href = "question1.html";
}

// Function to display user's choices on answer page
function showChoices() {
  document.getElementById("animal-choice").src = "images/${animalChoice}.png";
  document.getElementById("color-choice").src = "images/${colorChoice}.png";
  document.getElementById("food-choice").src = "images/${foodChoice}.png";
}

///////
// get the selected answer

// get the selected animal, color, and city
var selectedAnimal = document.querySelector(".option");
var selectedColor = document.querySelector('input[name="color"]:checked').value;
var selectedCity = document.querySelector('input[name="city"]:checked').value;

// set the corresponding image on the answer page
var selectedImage = document.getElementById('selected-image');
if (selectedAnimal === 'dog') {
  selectedImage.src = "../Experiment/20230409_MaterialforWebpage-01.png";
} else if (selectedAnimal === 'cat') {
  selectedImage.src = "../Experiment/20230409_MaterialforWebpage-02.png";
} else if (selectedAnimal === 'bird') {
  selectedImage.src = "../Experiment/20230409_MaterialforWebpage-03.png";
} 

if (selectedColor === 'red') {
  selectedImage.src = 'red.jpg';
} else if (selectedColor === 'blue') {
  selectedImage.src = 'blue.jpg';
} // repeat for other colors

if (selectedCity === 'new-york') {
  selectedImage.src = 'new-york.jpg';
} else if (selectedCity === 'paris') {
  selectedImage.src = 'paris.jpg';
} // repeat for other cities
