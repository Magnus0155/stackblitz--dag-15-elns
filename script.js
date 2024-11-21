// Green square
const squareGreenHide = document.querySelector("#squareGreenHide");

const squareGreenButton = document.querySelector("#squareGreenButton");

console.log(squareGreenHide, squareGreenButton);

squareGreenButton.addEventListener("click", function () {
   console.log("Button is clicked!");
   
   squareGreenHide.classList.toggle("hidden");
});

//  Red Square
// Lag variabler som henter ID-ene som hører til red square
// sett opp en event listener til red square knappen
// BONUS: Legg til funksjonaliteten til red square i den anonyme 'function'

const squareRedShowText = document.querySelector("squareRedShowText");

const squareRedButton = document.querySelector("squareRedButton");

const squareRedText = document.createElement("p");
console.log(squareRedText);
squareRedText.textContent = "Her er text i en rød boks";

squareRedText.classList.add("hidden");

squareRedShowText.appendChild
(squareRedText);

const squareRedText = document.
squareRedButton.addEventListener("click", function () {
   console.log("Button is clicked!!");
   squareRedText.classList.toggle ("hidden");
//ikke ferdig/funker ikke enda.

})

// Blue square
const squareBlueShowImg = document.querySelector("#squareBlueShowImg");

const squareBlueButton = document.querySelector("#squareBlueButton");

console.log(squareBlueShowImg, squareBlueButton);

const  squareBlueImg = document.
createElement("img");

squareBlueImg.scr = "hamburger.png";
squareBlueImg.alt = "Hamburger icon";

squareBlueShowImg.appendChild
(squareBlueImg);

squareBlueButton.addEventListener("click", function () {
   console.log("Button is clicked!");
   
   squareBlueShowImg.classList.toggle("hidden");
});