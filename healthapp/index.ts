import express from "express";
import { calculateBmi } from "./bmi/bmiCalculator.ts";
import { calculateExercises } from "./bmi/exerciseCalculator.ts";
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight) {
    return res.status(400).send({
      error: "malformatted parameters",
    });
  }

  const bmiCategory = calculateBmi(height, weight);

  return res.json({
    weight,
    height,
    bmi: bmiCategory,
  });
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target }: any = req.body;

  if (!daily_exercises || target == undefined) {
    return res.status(400).send({ error: "parameters missing" });
  }

  const hasInvalidExercisedaily_exercises =
    !Array.isArray(daily_exercises) || daily_exercises.some((h: any) => isNaN(Number(h)));

  if (isNaN(Number(target)) || hasInvalidExercisedaily_exercises) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const result = calculateExercises(Number(target),daily_exercises.map(Number) );
  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
