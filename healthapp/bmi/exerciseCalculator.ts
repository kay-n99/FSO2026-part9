interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = ( target: number, hours: number[]): Result => {
  const total = hours.reduce((acc, cur) => acc + cur, 0);
  const average = total / hours.length;
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


const parseArguments = (args: string[]) => {
  if (args.length < 12) throw new Error('Not enough arguments');
  if (args.length > 12) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2]))) {
    const arr = [];
    for(let i = 3; i < 12; i++){
        if(!isNaN(Number(args[i]))){
            arr.push(Number(args[i]));
        }
      }
    return {
      target: Number(args[2]),
      hours: arr,
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const {target, hours} = parseArguments(process.argv);

console.log(calculateExercises(target, hours));
