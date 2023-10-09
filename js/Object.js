// [1.]
// const person = {
//     name: "amit",
//     Age: "20"
// }


// console.log(person["name"], person["Age"]);
// console.log(person.name, person.Age);


//[2.]

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];


// person.map((v, i) => {
//     console.log(v.name, v.age);
// })

//[3.]

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html",
//             "C Language",
//             "Js"
//         ]
//     },
//     {
//         name: "Jaimish",
//         age: 22,
//         course: [
//             "Html",
//             "Css",
//             "Js",
//             "React Js"
//         ]
//     }

// ]


// person.map((v, i) => {
//     console.log(v.name, v.age);

//     v.course.map((v) => {
//         console.log(v);
//     })

// })


// [4.]
// const myObj = {
//     name: "jd",
//     age: 20,
//     cars: {
//         car1: "ford",
//         car2: "breza",
//         car3: "BMW"
//     }
// }

// console.log(myObj.name, myObj.age, myObj.cars.car1, myObj.cars.car2, myObj.cars.car3);

// for (let k in myObj) {
//     if (k === 'cars') {
//         for (j in myObj[k]) {
//             console.log(myObj[k][j]);
//         }
//     } else {
//         console.log(myObj[k]);
//     }

// }


//[5.]

// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];



// person.map((v,i) => {
//     console.log(v.name,v.age,v.course.c1,v.course.c2);
// })

/******************************************************************* */

// person.map((v, i) => {
//     console.log(v.name, v.age);
//     for (let k in v.course) {
//         console.log(v.course[k]);
//     }
// })






// [6.]
// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat: 10
//         }
//     }
// }

// for (let k in data) {
//     if (k === "courses") {
//         data[k].map((v) => {
//             console.log(v);
//         })
//     } else if (k === "personal_info") {
//         for (let p in data[k]) {
//             console.log(data[k][p]);
//         }
//     } else {
//         for (let b in data[k]) {
//             for (let j in data[k][b]) {
//                 console.log(k, b, j, data[k][b][j]);
//             }
//         }
//     }
// }


/************************************************************************ */
//Add,Update,Delete,Check-Availability:

// const person = {
//     name: "amit",
//     Age: "20"
// }

//Add:
// person.id = 101
// console.log(person);

//Update:
// person.name = "Jaimish"
// console.log(person);

//Delete:

// delete person.Age
// console.log(person);

//Check Availability:
// let ans = "name" in person
// console.log(ans);


/************************************************************** */
//Compare Object Both are:

// const person = {
//     name: "amit",
//     Age: "20"
// }

// const person1 = {
//     name: "amit",
//     Age: "20"
// }

// function CompareObj() {
//     for (let k in person) {
//         if (person[k] !== person1[k]) {
//             return false;
//         }
//     }
//     return true;
// }
// CompareObj()

// let ans = CompareObj()
// console.log(ans);