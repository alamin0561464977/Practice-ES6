/*
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number.
*/
const arrayName = [1, 3, 5, 7, 9];
const evenNum = arrayName.map(n => n + 1);
// ========================================================
/*
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
    return/get all the elements which are divisible by 10 using
    array.filter() method.
*/
const arrayName1 = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = arrayName1.filter(n => n % 10 === 0);
// ===================================================================
/*
3) Now do the same task of question 2. But do this using array.find()
    method. Then compare the output of question 2 & question 3.
*/
const question2 = arrayName1.find(n => n % 10 === 0);
// ============================================================
/*
4) কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে 
    জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/
const x = 25;
let y = 10;
y = 50;
// ==========================================================
/*
5) টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/
const templateString = `
    With template literals, you can use both single and double quotes inside a string ${x}
`;
// ===================================================================
/*
6-1) একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
*/
const arrowFunction1 = num => num / 5;
const total1 = arrowFunction1(10);
// ================================================================
/*
6-2) তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/
const arrowFunction2 = (num1, num2) => {
    const x = num1 + 2;
    const y = num2 + 2;
    const sum = x * y;
    return sum;
};
const total2 = arrowFunction2(2, 20);
// =============================================================================
/*
6-3) এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
*/
const arrowFunction3 = (num1, num2, num3) => num1 * num2 * num3;
const total3 = arrowFunction3(2, 2, 2);
// ==================================================================================
/*
7) অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/
const arrayName2 = [34, 423, 86, 97, 24, 27, 85, 25];
const newArray = arrayName2.map(n => n * 5);
// ==================================================================================
/*
8) [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
const total4 = arrayName2.filter(n => n % 2 !== 0);
// ===================================================================================
/*
9) একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/
const objectArray = [
    { di: 1, name: "Product1", frice: 300 },
    { di: 2, name: "Product2", frice: 500 },
    { di: 3, name: "Product3", frice: 700 },
    { di: 4, name: "Product4", frice: 600 },
    { di: 5, name: "Product5", frice: 200 }
];
const frice = objectArray.find(n => n.frice === 500);
// ============================================================================
/*
10) সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
*/
const { name } = objectArray[0];
// ===========================================================================
/*
11) [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const [a, b, three] = objectArray;
// ================================================================================
/*
12)  তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/
const arrowFunction4 = (num1, num2, num3 = 7) => num1 + num2 + num3;
const total5 = arrowFunction4(20, 10);
console.log(total5);