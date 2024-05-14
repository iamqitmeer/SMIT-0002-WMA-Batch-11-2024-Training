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

let visitorName = prompt("Visitor’s Name")
let productTitle = prompt("product Title")
let quantity = prompt("Quantity Of " + productTitle)

console.log(`${visitorName} Buy ${quantity} ${productTitle} From Xyz Store`);

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
