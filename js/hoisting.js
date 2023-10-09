//Hoisting: Hoisting is a moving variable or function declaration at the top.

//1.
// console.log(x);    //undefined  //Decalaration using var move to top.
// var x;
// x = 10;

//2
// console.log(x); //Error //Decalaration using let / const can not move to top.
// let x; //const x;
// x = 10;


//3

// console.log(x);    //Error //Not access declaration or initialization.
// x=10


//4.
// x=10;
// console.log(x);  //10  //declaration done automatically at the top and access 10 from momery.

//5.

// x=10;
// let x;
// console.log(x);  //Error   //first innialization let

//6.

// x=10;
// var x;
// console.log(x);  //10

//7.
// console.log(x);        //undefined
// x = 10;
// var x;

/********************************************************************************************* */
//Hosting:

//1.
// function demo() {
//     var x; //function scope(any variable declared with let/var/const is access only in function.)
//     x = 10;
//     console.log(x);    //10
// }
// demo()
// console.log(x);   //Error


//2.

// function demo() {
//     if (true) {
//         var x;   //Funtion Scope
//         x = 10;
//     }
//     console.log(x);    //10 
// }
// demo()


//3.

// function demo() {
//     if (tr   ue) {
//         let x;   //Funtion Scope + Block Scope [if,for,while,do while,switch..]
//         x = 10;
//     }
//     console.log(x);    //Error
// }
// demo()
// console.log(x);  //Error


//4.

// function demo() {
//     let x;   //Global  + Function Scope
//     if (true) {
//         x = 10;
//     }
//     console.log(x);    //10
// }
// demo()

























//Hoisting

// fun(); // Calling before declaration

// function fun() { // Declaring

//     console.log("Function is hoisted");
// }


// codeHoist();
// function codeHoist() {
//     a = 10;
//     let b = 50;
// }


// console.log(a); // 10
// console.log(b); // ReferenceError : b is not defined



// Function scoped
// function fun() {
//     console.log(name);
//     let name = 'Mukul Latiyan';
// }
// fun(); // Undefined



// fun() // Calling the expression

// let fun = () => { // Declaring
//     let name = 'Mukul Latiyan';
//     console.log(name);
// }




