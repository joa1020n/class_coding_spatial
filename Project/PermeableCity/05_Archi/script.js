// Global variables to store user's choices
let animalChoice = "";
let colorChoice = "";
let foodChoice = "";

// Helper function to toggle option selection
function toggleOptionSelection(option) {
  const options = document.querySelectorAll('.option');
  options.forEach((opt) => {
    if (opt !== option) {
      opt.classList.remove('selected');
    }
  });
  option.classList.toggle('selected');
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
    case "5.1_Archi_OpenYard.html":
      window.location.href = "6.Summary.html";
      break;
    case "5.2_Archi_InBetween.html":
      window.location.href = "5.3_Archi_Personal.html";
      break;
    case "5.3_Archi_Personal.html":
      window.location.href = "6.Summary.html";
      break;
  }
}

// Function to navigate back to home page to start over
function goToHomePage() {
  window.location.href = "index.html";
}

// Function to display user's choices on answer page
function showChoices() {
  document.getElementById("animal-choice").src = `images/${animalChoice}.jpg`;
  document.getElementById("color-choice").src = `images/${colorChoice}.jpg`;
  document.getElementById("food-choice").src = `images/${foodChoice}.jpg`;
}

