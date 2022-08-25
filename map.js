const array = [34, 45, 25, 76, 843, 4, 674, 35, 84, 23];
const friend = ["alamin", "mehedi", "ibrahim", "foychhal", "piyal"];
const newArray = [];
let n = 0;
while (n < array.length) {
    const total = array[n] + 2;
    // newArray.push(total);
    n++;
};

for (let i = 0; i < array.length; i++) {
    const total = array[i] + 1;
    // newArray.push(total);
};
// console.log(newArray);

const total4 = array.map(n => n * 2);
// console.log(total4);

// const total1 = array.map(x => x + 1);
const total2 = array.filter(n => n < 80);
const total3 = array.find(n => n < 90)
// console.log(total3);

const total5 = array.find(n => n === 843);
if (total5 == undefined) {
    console.log('alamin')
};
// console.log(total5);

const total6 = array.filter(n => n % 2 == 0);
// console.log(total6);

const total7 = friend.map(n => n + "aaa");
// console.log(total7);

const total8 = total7.map(n => n.length);
const total9 = total7.map(n => n[0]);
console.log(total9);