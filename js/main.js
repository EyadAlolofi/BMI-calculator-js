/**
 * The calculateBMI function calculates the BMI (Body Mass Index) based on the weight and height input
 * values and displays the result along with an interpretation.
 */
function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  let bim = (weight / height) * 2;
  let interpret = interpretBMI(bim);
  document.getElementById("result").innerText = "Your BIM is: " + bim.toFixed(2) + " - " + interpret
}



/**
 * The function "interpretBMI" takes a BMI value as input and returns a string indicating the weight
 * category based on the BMI value.
 * @param bim - BMI (Body Mass Index)
 * @returns The function `interpretBMI` returns a string indicating the weight category based on the
 * BMI value passed as an argument. The possible return values are "Underweight", "Normal weight",
 * "Overweight", or "Obese".
 */
function interpretBMI(bim) {
  if (bim < 18.5) {
    return "Underweight";
  } else if (bim >= 18.5 && bim < 25) {
    return "Normal weight";
  } else if (bim >= 25 && bim < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
