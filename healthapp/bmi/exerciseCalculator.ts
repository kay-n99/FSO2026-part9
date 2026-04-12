interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {
  const total = hours.reduce((acc, cur) => acc + cur, 0);
  const average = total / 7;
  let rating: number;
  let ratingDesc: string;
  if (average >= target) {
    rating = 3;
    ratingDesc = "perfect";
  } else if (average > target / 2) {
    rating = 2;
    ratingDesc = "not too bad but could be better!";
  } else {
    rating = 1;
    ratingDesc = "worst";
  }
  const object = {
    periodLength: hours.length,
    trainingDays: hours.filter(h => h !== 0).length,
    success: average >= target ? true : false,
    rating: rating,
    ratingDescription: ratingDesc,
    target: target,
    average: average,
  };

  return object;
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
