let kg = +prompt("Please enter your weight in kilograms.");
let height = +prompt("Please enter your height.");
let netice = kg / (height * 2);

if (netice < 18.5) {
  console.log("Below ideal weight");
} else if (netice >= 18.5 && netice <= 24.9) {
  console.log("At ideal weight");
} else if (netice >= 25 && netice <= 29.9) {
  console.log("Above ideal weight");
} else if (netice >= 30 && netice <= 39.9) {
  console.log("Obese (above ideal weight)");
} else if (netice > 40) {
  console.log("Morbidly obese (when above ideal weight)");
} else {
  console.log("Invalid BMI");
}
