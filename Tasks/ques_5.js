// 5. Product Discount Validation
// Determine the discount for a product based on the following criteria:
// - If the product price is greater than $100, the discount is 20%.
// - Otherwise, the discount is 10%.
// Use a ternary operator to set the discount percentage.
var a=120;
var U=a*0.1;
var A=a*0.2;
console.log((a>100)?`the discount is 20% ${A}`:`the discount is 10% ${U}`);