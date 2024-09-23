//C1-A2: Mathematical and Comparison Operations, and Type Conversions. 
//Declaration of variables and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15; //1constant
//To display the sum of the declared variables [a,b,c,d] and constant [e] combined. 
console.log( a + b + c + parseInt(d) + e);
//Comparing the values of variable d and constant e using rational operators
console.log(parseInt(d) > e); //Greater Than
console.log(parseInt(d) < e); //Less Than
console.log(parseInt(d) >= e); //Greater Than Or Equal To
console.log(parseInt(d) <= e); //Less Than or Equal To
console.log(parseInt(d) === e); //Strict Equality
//Declaration of new variables to use in utilizing Basic Math Operators
let sub =  a - b - c - parseInt(d) - e; //Subtraction
let muldiv =  (a * c ) / e; // Multiplication and Division
let expo = e ** c; // Exponentiation
//To Display 
console.log(sub);
console.log(muldiv);
console.log(expo);
console.log(`e =`,expo); //Reassigning the value of constant e to the value of expo 