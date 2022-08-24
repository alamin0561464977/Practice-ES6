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
/*
4) Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
        name of your friends
    b) Check if the length of each element is even, push elements
        with even length to a new array and return the result
        Print the result.
*/
const friends = ['alamin', 'rakib', 'mehedi', 'ibrahim', 'tome'];
const friendsName = (friends) => {
    const newFriends = [];
    for (let friend of friends) {
        if (friend.length % 2 === 0) {
            newFriends.push(friend)
        }
    }
    return newFriends;
}
const newFriends = friendsName(friends);
// console.log(newFriends);
// =======================================================================
/*
5) Common ES6 interview questions

5.1. What is ES6? Have you ever used anything from ES6?
5.2. Explain the difference between var, let and const.
5.3. What is the arrow function, and how to create it?
5.4. Give an example of an Arrow function in ES6? List down its advantages.
5.5. Discuss spread operator in ES6 with an example.
5.6. What do you understand about default parameters?
5.7. What are template literals in ES6?
5.8. Tell us the difference between arrow and regular function.
*/ 