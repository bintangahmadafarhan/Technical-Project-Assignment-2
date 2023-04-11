function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "Silahkan masukkan berat dan tinggi badan anda.";
  } else {
    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) {
      category = "yahh sepertinya BMI kamu Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Yeayy BMI kamu Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Waduh Sepertinya BMI kamu Overweight";
    } else {
      category = "OH tidak Sepertinya BMI kamu Obesity";
    }

    const resultText = `BMI = ${bmi.toFixed(1)}. ${category}`;
    document.getElementById("result").innerHTML = resultText;
  }
}
