function add(num1, num2) {
    const total = num1 + num2;
    return total;
};
const total1 = add(10, 20);
// console.log(total1);

const arrowFunctionNoParameter = () => { };
// const arrowFunction1Parameter = num => num * 5;
const arrowFunction1Parameter = (num) => num * 5;
const total2 = arrowFunction1Parameter(2);

const arrowFunction2Parameter = (num1, num2) => num1 + num2;
const total3 = arrowFunction2Parameter(20, 10);

const arrowFunction3Parameter = (num1, num2, num3) => num1 + num2 * num3;
const total4 = arrowFunction3Parameter(2, 2, 3);

// const multiLineArrowFunction =()=>{};
const multiLineArrowFunction = (num1, num2, num3) => {
    const x = num1 + num2;
    const total = x * 3;
    return total;
};
const total5 = multiLineArrowFunction(2, 2, 3);
console.log(total5);
