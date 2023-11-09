function calcAverageCalories(days) {
  let average = 0;
  let sumCalories = 0;
  let numberDays = 0;
  const calor = Object.values(days);
for (const key of calor) {
    sumCalories += key.calories;
    numberDays +=1;
  }
  numberDays !==0 ? average = (Math.round((sumCalories / numberDays)* 100) / 100) : 0;
  return average;
}

console.log("------task-2----");

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0