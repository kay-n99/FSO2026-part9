const calculateBmi = (height: number, weight: number): string => {
  const heightInM = height / 100;
  const bmi = weight / (heightInM * heightInM);

  if (bmi < 16.0) return "Underweight (Severe thinness)";
  if (bmi < 17.0) return "Underweight (Moderate thinness)";
  if (bmi < 18.5) return "Underweight (Mild thinness)";
  if (bmi < 25.0) return "Normal range";
  if (bmi < 30.0) return "Overweight (Pre-obese)";
  if (bmi < 35.0) return "Obese (Class I)";
  if (bmi < 40.0) return "Obese (Class II)";
  return "Obese (Class III)";
};

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
console.log(calculateBmi(height, weight));
