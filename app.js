/*
1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.
*/
const arrowFunctionMultiplyParameters = (x, y, z) => x + y + z;
const total1 = arrowFunctionMultiplyParameters(20, 10, 30);
// console.log(total1);

// ============================================================
/*
2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
*/
const sentence = `
    I am web developer
    I love to code 
    I love to eat biryani
`;
// console.log(sentence);
// =========================================================
/*
3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
*/
const byDefaultParameters = (num1, num2 = 0) => num1 + num2;
const total2 = byDefaultParameters(10);
// console.log(total2);
// =================================================================