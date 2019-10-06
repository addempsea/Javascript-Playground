var height = prompt("what is your height in meters");
var weight = prompt("what is your weight in kg");

var bmi = weight / height;

switch (true) {
  case bmi < 18.5:
    alert("you are underweight");
    break;
  case bmi > 25:
    alert("you are overweight");
    break;
  case (bmi >= 18.5 && bmi < 25):
    alert("normal");
    break;
  default:
    alert("please enter real values");
    break;
}
