// Chapter 1

// Write a script to greet your website visitor using JS alert box.

// alert('Hello World')

// 2. Write a script to display following message on your web page:

// alert('Error! Please enter a valid password')

// 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS Land\nHappy Coding")

// 4. Write a script to display following messages in sequence:

// alert("Welcome to JS Land")
// alert("Happy Coding")

// 5. Generate the following message through browser’s developer console:

// console.log("Hello, i run from your developer console")

// 6. Make use of alerts in your new/existing HTML & CSS project.

//<script>
// console.log("Hello, i run html file")
// </script>

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// <!DOCTYPE html>
// <script>
//     alert('Hey')
// </script>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>
//         alert('Hey')
//     </script>
// </head>
// <body>
//     <script>
//         alert('Hey')
//     </script>
// </body>
// <script>
//     alert('Hey')
// </script>
// </html>

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 2

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// 1. Declare a variable called username.

// let username = "iamqitmeer"
// console.log(`Your UserName is @${username}`);

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// let myName = ""
// myName = "Qitmeer Raza"
// console.log(`Your Name is ${myName}`)

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// let titled = "Let's Build Something!"
// titled = "Hello World"
// alert(titled)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// let yourName = "Zareena Iqbal"
// let yourAge = 5
// let khanaKaya = "Han Biryani Khayi"

// alert(yourName)
// alert(yourAge)
// alert(khanaKaya)

// 5. Write a script to display the following alert using one JS variable:

// let val = "PIZZA";
// console.log(val[0]);
// console.log(val[0] + val[1]);
// console.log(val[0] + val[1] + val[2]);
// console.log(val[0] + val[1] + val[2] + val[3]);
// console.log(val[0] + val[1] + val[2] + val[3] + val[4]);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// let email = 'example@example.com'
// console.log('My Email is ' + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// let bookName = "A smarter way to learn JavaScript"
// console.log(`I'll Learn JavaScript From ${bookName}`);

// 8. Write a script to display this in browser through JS

// document.write('Yeah! I can write HTML Content through JavaScript')

// 9. Store following string in a variable and show in alert and browser through JS

// console.log("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 3

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// let age = 15
// console.log('i am ' + age + " year old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// let kitniBaarAyeHo = prompt("kitni Baar Aye Ho", 3)
// console.log(`Ap ${kitniBaarAyeHo} Baar Aye Ho!`);

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// let birthYear = 2008
// console.log(`Hey! Your Birth Year in ${birthYear}`);
// console.log(`Your Declear Var DataType is ${typeof(birthYear)}`);

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order

// let visitorName = prompt("Visitor’s Name")
// let productTitle = prompt("product Title")
// let quantity = prompt("Quantity Of " + productTitle)

// console.log(`${visitorName} Buy ${quantity} ${productTitle} From Xyz Store`);

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 4

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Sure, here's how you can achieve these tasks in JavaScript:

// 1. Declare 3 variables in one statement:
// var a, b, c;

// 2. Declare 5 legal & 5 illegal variable names:

// Legal variable names:
// var myVariable;
// var $price;
// var _counter;
// var camelCaseVariable;
// var thisIsALongVariableName;

// Illegal variable names:
// var 123variable; // Cannot start with a number
// var my-variable; // Hyphens are not allowed
// var var; // Reserved keyword
// var my variable; // Space is not allowed
// var !notAllowed; // Special characters except $ and _ are not allowed
// ```

// 3. Display this in your browser:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>JavaScript Variables</title>
// </head>
// <body>
//     <h1>Rules for naming JS variables</h1>
//     <p>a) Variable names can only contain letters, digits, underscores, and dollar signs.</p>
//     <p>For example $my_1stVariable</p>
//     <p>b) Variables must begin with a letter, underscore, or dollar sign.</p>
//     <p>For example $name, _name, or name</p>
//     <p>c) Variable names are case-sensitive.</p>
//     <p>d) Variable names should not be JS keywords.</p>

//     <script>
//         // JavaScript code goes here
//     </script>
// </body>
// </html>
// You can copy this code into an HTML file and open it in your browser to see the displayed rules.

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 5

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// let userInput1 = +prompt("Enter Value 1", 0);
// let userInput2 = +prompt("Enter Value 2", 0);

// console.log(
//   `Sum Of ${userInput1} & ${userInput2} is ${userInput1 + userInput2}`
// );

// Repeat task1 for subtraction, multiplication, division & modulus.

// let userInput1 = +prompt("Enter Value 1", 0);
// let userInput2 = +prompt("Enter Value 2", 0);

// console.log(
//   `Sum Of ${userInput1} & ${userInput2} is ${userInput1 - userInput2}`
// );

// let userInput1 = +prompt("Enter Value 1", 0);
// let userInput2 = +prompt("Enter Value 2", 0);

// console.log(
//   `Sum Of ${userInput1} & ${userInput2} is ${userInput1 * userInput2}`
// );

// let userInput1 = +prompt("Enter Value 1", 0);
// let userInput2 = +prompt("Enter Value 2", 0);

// console.log(
//   `Sum Of ${userInput1} & ${userInput2} is ${userInput1 / userInput2}`
// );

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// let abc = "xyz";
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// console.log(`Value after variable declaration is: ${abc}`);
// c. Initialize the variable with some number.
// abc = 5
// d. Show the value of variable in your browser like “Initial value: 5”.
// console.log(`Initial value: ${abc}`);
// e. Increment the variable.
// abc = ++abc
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// console.log(`Value after increment is: ${abc}`);
// g. Add 7 to the variable.
// abc = abc + 7
// h. Show the value of variable in your browser like “Value MATH EXPRESSIONS | JAVASCRIPT after addition is: 13”.
// console.log(`Value MATH EXPRESSIONS | JAVASCRIPT after addition is: ${abc}`);
// i. Decrement the variable.
// abc = --abc
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// console.log(`Value after decrement is: ${abc}`);
// k. Show the remainder after dividing the variable’s value by 3.
// abc = abc %3
// l. Output : “The remainder is : 0”.
// console.log(`The remainder is : ${abc}`);

// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// let ticketPrice = 600
// let kitniKhareeedi = prompt('kitni Khareeedi?', 1)
// console.log(`After Buying ${kitniKhareeedi} Tickets Your Price is ${ticketPrice * kitniKhareeedi}.`);

// Write a script to display multiplication table of any number in your browser.

// let konsaTable = prompt("konsa Table", 1);
// let tableNum = 1;
// document.write(`
// Table is ${konsaTable} <br>
// ${konsaTable} x ${tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// ${konsaTable} x ${++tableNum} = ${konsaTable * tableNum} <br>
// `);

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// let item1 = 400
// let item2 = 550
// let item3 = 720

// let quantityOfItem1 = 3
// let quantityOfItem2 = 15
// let quantityOfItem3 = 2

// let totalPrice = item1*quantityOfItem1 + item2*quantityOfItem2 + item3*quantityOfItem3

// document.write(`
// You Buy ${quantityOfItem1} Item1. Total Price Of Item1 ${item1*quantityOfItem1} <br>
// You Buy ${quantityOfItem2} Item2. Total Price Of Item2 ${item2*quantityOfItem2} <br>
// You Buy ${quantityOfItem3} Item3. Total Price Of Item3 ${item3*quantityOfItem3} <br>
// Total Price Of All Item Is ${totalPrice} <br>
// After 10% Off Your Price is ${totalPrice - (totalPrice / 10)}
// `)

// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// let totalMarks = 500;
// let obtainedMarks = 360;
// let percentage = (obtainedMarks * 100) / totalMarks;
// console.log(percentage+"%");

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// let totalUSDAvai = prompt("total USD Available", 10);

// console.log(
//   `After Converting Your ${totalUSDAvai}$ in Pakistani Rupee Your Price Is ${
//     totalUSDAvai * 277.65
//   }`
// );

// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num1 = 30;
// num1 = num1 + 5;
// num1 = num1 * 10;
// num1 = num1 / 2;
// document.write(`
// After Adding 5:<b> ${(num1 = num1 + 5)}</b> <br>
// Multiply by 10:<b> ${(num1 = num1 * 10)}</b> <br>
// Divide the result by 2:<b> ${(num1 = num1 / 2)}</b> <br>
// `);

// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// let currentYear = 2024
// let birthYear = 2008
// console.log(`Your Age Is ${currentYear - birthYear}`);


// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
let favorite = "Cake"
// b. Store your current age into a variable.
let currentAge = 15
// c. Store a maximum age into a variable.
let maximumAge = 60
// d. Store an estimated amount per day (as a number).
let maximumInOneDay = 3
// e. Calculate how many would you eat total for the rest of your life.
console.log(`Apko Abhi ${(maximumAge - currentAge) * 365} ${favorite} Aur Khane He`);
// Output the result to the screen like so: “You will need // NNNN to last you until the ripe old age of NN”.