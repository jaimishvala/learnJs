//Closure :

//(1.)

//Globle Variable:
// let age = 22;

// //Outer Function:
// const PersonalInfo = (name) => {

//     let edu = 'BCA'  // Outer Function's Variable:

//     //Inner Function:
//     return AllInfo = (salary) => {
//         console.log(name);   //Outer Function Parameter:
//         console.log(age);  //Globle Variable:
//         console.log(edu);  //Outer Function Variable:
//         console.log(salary);  //Inner Function Parameter:
//     }

// }

// //Function Call:

// let result = PersonalInfo('jaimish')
// console.log(result);  //Return Function
// result(20000);


// result(30000)

/******************************Counter**************************** */

//Global Variable:
// let count =0;

// const incrementCount = () => {
//     count = count + 1;
//     console.log(count);
// }


// incrementCount();
// count = 10;   //Disadvantage of global variable.(Anyone can change value.)

// incrementCount();



/******************************************************************************* */
//Local Variable:

// const incrementCount = () => {
//     let count = 0;             //Disadvantage of global variable.(New Variable Created Every time start with 0.)
//     count = count + 1;
//     console.log(count);
// }


// incrementCount();

// incrementCount();


/********************************************************* */
//Closure:
//Problem Local & Global Of Variable Sloved By Closure:

const incrementCount = () => {
    let count = 0;


    return () => {
        count = count + 1;
        console.log(count);
    }
}


let res = incrementCount();
// console.log(res);
res()
res()
res()

let res1 = incrementCount();
// console.log(res1);
res1()
res1()