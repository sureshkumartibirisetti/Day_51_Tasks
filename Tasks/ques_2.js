// 2. Age Group Classification
// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
// Use nested ternary operators to determine the classification.
var age=12;
console.log((age>13 && 0<age)?"Child":(13<=age && 19>=age)?"Teenager":"Adult");