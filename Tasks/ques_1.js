// 1. Eligibility Check
// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.
var stud="A";
var aten=76;
console.log(((stud=="A" || stud=="B")&& aten>75)?"Eligible":"Not Eligible");