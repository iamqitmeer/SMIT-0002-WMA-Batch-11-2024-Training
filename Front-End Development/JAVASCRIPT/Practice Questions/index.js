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
// let favorite = "Cake"
// b. Store your current age into a variable.
// let currentAge = 15
// c. Store a maximum age into a variable.
// let maximumAge = 60
// d. Store an estimated amount per day (as a number).
// let maximumInOneDay = 3
// e. Calculate how many would you eat total for the rest of your life.
// console.log(`Apko Abhi ${(maximumAge - currentAge) * 365} ${favorite} Aur Khane He`);
// Output the result to the screen like so: “You will need // NNNN to last you until the ripe old age of NN”.

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 6 TO 9

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// let num = 10

// document.write('Result' + '<br>')
// document.write(`Current Value is ${num} <br>`)
// document.write('.........................................' + '<br>' + '<br>')
// document.write(`The Value Of ++number is: ${++num} <br>`)
// document.write(`Now the Value is ${num} <br>`)
// document.write('.........................................' + '<br>' + '<br>')
// document.write(`The Value Of number++ is: ${num++} <br>`)
// document.write(`Now the Value is ${num} <br>`)
// document.write('.........................................' + '<br>' + '<br>')
// document.write(`The Value Of --number is: ${--num} <br>`)
// document.write(`Now the Value is ${num} <br>`)
// document.write('.........................................' + '<br>' + '<br>')
// document.write(`The Value Of number-- is: ${num--} <br>`)
// document.write(`Now the Value is ${num} <br>`)

// What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;
// // var result = --a - --b + ++b + b--;
// //   1  -  0   +  1  +  1
// console.log(result); // 3

// Write a program that takes input a name from user & greet the user.

// let userInput = prompt("Enter Your Name")
// console.log("Hello, " + userInput);

// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// let userNumber = prompt("Enter Table No.." , 5)
// for (let i = 1; i <= 10; i++) {
// document.write(`${userNumber} x ${i} = ${userNumber * i} <br>`)
// }

// Take
// a) Take three subjects name from user and store them in 3 different variables.
// let sub1 = "Chemistry";
// let sub2 = "Biology";
// let sub3 = "English";
// // b) Total marks for each subject is 100, store it in another variable.
// let totalNum = 100;
// // c) Take obtained marks for first subject from user and stored it in different variable.
// let sub1Num = +prompt("Enter " + sub1 + " Number");
// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// let sub2Num = +prompt("Enter " + sub2 + " Number");
// let sub3Num = +prompt("Enter " + sub3 + " Number");

// let bothSum = sub1Num + sub2Num + sub3Num
// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// document.write(`
// <table border="1">
// <p>All Subjects Total & Obtained Marks With Percentage</p>
// <tr>
//     <td>Subjects</td>
//     <td>Total Marks</td>
//     <td>Obtained Marks</td>
//     <td>Percentage</td>
// </tr>
// <tr>
//     <td>${sub1}</td>
//     <td>${totalNum}</td>
//     <td>${sub1Num}</td>
//     <td>${(sub1Num * 100) / totalNum}%</td>
// </tr>
// <tr>
//     <td>${sub2}</td>
//     <td>${totalNum}</td>
//     <td>${sub2Num}</td>
//     <td>${(sub2Num * 100) / totalNum}%</td>
// </tr>
// <tr>
//     <td>${sub3}</td>
//     <td>${totalNum}</td>
//     <td>${sub3Num}</td>
//     <td>${(sub3Num * 100) / totalNum}%</td>
// </tr>
// <tr>
// <td></td>
// <td>${totalNum * 3}</td>
// <td>${bothSum}</td>
// <td>${Math.ceil(bothSum * 100 / 300)}%</td>
// </tr>
// </table>
// `);

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 9 TO 11

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// let userInput = prompt("Enter City Name.");
// userInput.toLowerCase() == "karachi" ? console.log("Welcome to city of lights") : console.log(`Welcome to ${userInput}`)

// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// let userInput = prompt("Enter Your Gender ");

// if (userInput.toLowerCase() == "male") {
//     console.log("Hey Sir")
// } else if (userInput.toLowerCase() == "female") {
//     console.log("Hello Ma'aam");
// }else{
//     console.log("Sorry");
// }

// Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Red - Must Stop
// Yellow - Ready to move
// Green - Move now

// let userInput = prompt("Traffic Signal Color");

// if (userInput.toLowerCase() == "red") {
//   console.log("Must Stop");
// } else if (userInput.toLowerCase() == "green") {
//   console.log("Move now");
// } else if (userInput.toLowerCase() == "yellow") {
//   console.log("Ready to move");
// } else {
//   console.log("Not Found");
// }

// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// let userInput = prompt("Enter remaining fuel in your car");
// userInput == 0.25 ? console.log("Please refill the fuel in your car") : console.log("ChaleGa");

// Run this script, & check whether alert message would be displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5) {
//   alert("a condition for variable a is true");
// } // true
// var b = 82;
// if (b++ === 83) {
//   alert("b condition for variable b is true");
// } // false
// var c = 12;
// if (c++ === 13) {
//   alert("condition c is true");
// } // false
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks like:

// let totalMarks = 300;
// let obtainedMarks = prompt("Ener Obtained marks");

// let percentage = Math.ceil((obtainedMarks * 100) / totalMarks);
// let grade = "";
// let remarks = "";

// if (percentage >= 80) {
//   grade = "Excellent";
//   remarks = "A1";
// } else if (percentage >= 70) {
//   grade = "Good";
//   remarks = "A";
// } else if (percentage >= 50) {
//   grade = "Good";
//   remarks = "You Need to Improve";
// } else if (percentage <= 49) {
//   grade = "Failed";
//   remarks = "Sorry";
// }

// document.write(`
// "Marks Sheet" <br>
// Total Marks : <b>${totalMarks}</b> <br>
// Obtained Marks : <b>${obtainedMarks}</b> <br>
// Percentage : <b>${percentage}%</b> <br>
// grade : <b>${grade}</b> <br>
// remarks : <b>${remarks}</b>
// `);

// Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// let guessNum = prompt("Guess Number")
// let num = 5

// if(guessNum == num){
//     console.log("Bingo! Correct answer");
// }else if(guessNum == ++num || guessNum == --num ){
//     console.log("Close enough to the correct answer");
// }else{
//     console.log("Try Again");
// }

// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// let num = prompt("Enter Num")
// num % 3 == 0 ? console.log("Divisible By 3") : console.log("Not Divisible Bu 3")

// . Write a program that checks whether the given input is an even number or an odd number.

// let num = prompt("Enter Num")
// if (num % 2 == 0) {
//     console.log(`${num} is Even`);
// }else {
//     console.log(`${num} is Odd`);
// }

// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = prompt("Enter Temprature")

// if (temperature >= 40) {
//     console.log("It is too hot outside.");
// } else if (temperature >= 30) {
//     console.log("The Weather today is Normal.");
// }else if (temperature >= 20) {
//     console.log("Today’s Weather is cool.");
// }else if (temperature >= 10 || temperature < 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// }

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let first = +prompt("First number");
// let sec = +prompt("Second number");
// let operation = prompt("Enter Operation");

// if (operation == "+") console.log(first + sec);
// if (operation == "-") console.log(first - sec);
// if (operation == "/") console.log(first / sec);
// if (operation == "*") console.log(first * sec);

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 12 TO 13

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// let num1 = prompt("Enter number 1")
// let num2 = prompt("Enter number 2")

// if (num1 == num2) {
//     console.log("Both Same");
// }else if (num1 > num2) {
//     console.log("Number 1 Is Larger");
// }else if (num1 < num2) {
//     console.log("Number 2 Is Larger");
// }

// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// let num1 = +prompt("Enter number 1")

// if (num1 == 0) {
//     console.log("Is 0");
// }else if (num1 > 0) {
//     console.log("Is Positive");
// }else if (num1 < 0) {
//     console.log("Is Negative");
// }

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// let str = "ello World";

// if (
//   str[0] == "a" ||
//   str[0] == "e" ||
//   str[0] == "i" ||
//   str[0] == "o" ||
//   str[0] == "u"
// ) {
//   console.log("First Word is a Vowel");
// } else {
//   console.log("First Word is Not Vowel");
// }

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// let pass = "123@Qitmeer";

// let password = prompt("Enter password");
// let confirmPassword = prompt("Enter Confirm password");
// if (password == confirmPassword) {
//   console.log(
//     "Correct! The password you entered matches the original password"
//   );
// } else {
//   console.log("Incorrect password");
// }

// . This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);

// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// let timeAbc = +prompt("Enter Time");
// if (timeAbc >= 0 && timeAbc < 1200) {
//   console.log("Good, Morning");
// } else if (timeAbc >= 1200 && timeAbc < 1700) {
//   console.log("Good, Afternoon");
// } else if (timeAbc >= 1700 && timeAbc < 2100) {
//   console.log("Good, Evening");
// } else if (timeAbc >= 2100 && timeAbc < 2359) {
//   console.log("Good, Night");
// }

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Chapter 14 TO 16

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Declare an empty array using JS literal notation to store student names in future.

// let arr = [];
// arr.push("Moavia");
// arr.push("Inam");
// arr.push("Zareena");
// arr.push("Safia");
// console.log(arr);

// Declare and initialize a strings array.

// const stringsArray = ["apple", "banana", "orange", "grape"];
// console.log(stringsArray);

// Declare and initialize a numbers array:

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray); // Output: [1, 2, 3, 4, 5]

// Declare and initialize a boolean array:

// const booleanArray = [true, false, true, true];
// console.log(booleanArray); // Output: [true, false, true, true]

// Declare and initialize a mixed array:

// const mixedArray = ["apple", 10, true, "banana", false];
// console.log(mixedArray);

// let arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// let num = 0

// document.write(`
// <h3>Qualification:</h3>
// <ol>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <li>${arr[num++]}</li>
// <ol>
// `)

// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// let studentsName = ["Qitmeer", "Raza", "Rizwan"];
// let studentsMarks = [321, 401, 292];
// let totalMarks = 500;
// document.write(`
// Score Of ${studentsName[0]} is ${studentsMarks[0]} & Percentage is ${
//   (studentsMarks[0] * 100) / totalMarks
// }<br>
// Score Of ${studentsName[1]} is ${studentsMarks[1]} & Percentage is ${
//   (studentsMarks[1] * 100) / totalMarks
// }<br>
// Score Of ${studentsName[2]} is ${studentsMarks[2]} & Percentage is ${
//   (studentsMarks[2] * 100) / totalMarks
// }
// `);

// Initialize an array with color names. Display the array elements in your browser.
let colorArr = ["Red", "Yellow", "Green"];
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// let one = prompt("what color he/she wants to add to the beginning");
// colorArr.unshift(one);
// console.log(colorArr);
// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// let two = prompt("what color he/she wants to add to the end");
// colorArr.push(two);
// console.log(colorArr);
// // c. Add two more color to the beginning of the array. Display the updated array in your browser.
// let pehlaHe = prompt("Add");
// let DoosraHe = prompt("Add");
// colorArr.unshift(pehlaHe);
// console.log(colorArr);

// colorArr.unshift(DoosraHe);
// console.log(colorArr);

// // d. Delete the first color in the array. Display the updated array in your browser.
// colorArr.shift();
// console.log(colorArr);
// // e. Delete the last color in the array. Display the updated array in your browser.
// colorArr.pop();
// console.log(colorArr);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// let a = prompt("Enter")
// let b = prompt("en")

// colorArr.splice(a,0,b)
// console.log(colorArr);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// let a = prompt("Enter")
// let b = prompt("en")

// colorArr.splice(a,b)
// console.log(colorArr);

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// let studentsMarks = [341, 234, 232, 322, 212, 333, 321, 213];
