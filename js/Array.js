//*****************************Array********************************:/
//There Are Basically To Ways To declare An Array:
//Method 2:
// let name = [];
// let name = new Array()



// let data = [25, 8, 'jaimish', 85, 'surat']

//[1.]Object:
// console.log(typeof data);     //Object
// console.log(data[3]);

/***************Iteration:************ */

//[2.]  For Loop:

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
// }

// [3.]Map // forEach:

// data.map((v, i) => {
//     console.log(i + "--" + v);
// })

/*******************Update************************ */

//[4.]Update:

// data[1] = 99;
// console.log(data);

/**********************Add:********************** */
//[5.]Add:

//[1.]Push:
// data.push(100)       //Add At Last
// console.log(data);


//[2.]Unshift:

// data.unshift(20);   //Add At First
// console.log(data);

//[3.]Splice:

// data.splice(3, 0, 98);   //Add 98 at 3rd Index
// console.log(data);


/****************************************** */
//[6.]Remove:

// //[1.]Pop:

// data.pop();           //Remove At Last:
// console.log(data);

//[2.]Shift:

// data.shift();           //Remove At First:
// console.log(data);


//[3.]Splice:

// data.splice(2, 3);           //Remove 3 Element From 2nd Index
// console.log(data);


/**************************************************** */
//[1.]isArray:

// let ans = Array.isArray(data);     //boolean check array or not
// console.log(ans);


//[2.]Concat:
// let data = [25, 8, 'jaimish', 85, 'surat']
// let data1 = [99,100]

// let ans = data.concat(data1)
// console.log(ans);

//[3.]Some:

// let data = [25, 8, 'jaimish', 85, 'surat']

// let ans = data.some((v) => v > 50)   //Boolean Check element is available or not.
// console.log(ans);

//[4.]Find:
// let data = [25, 8, 'jaimish', 85, 'surat']
// let ans = data.find((v) => v > 50)      //Value check Element is avalilavle or not
// console.log(ans);

//[5.]Split:

// let fullname = "jaimish ashokbhai vala"
// let ans = fullname.split(" ");     //array return // convert string to array.
// console.log(ans);


//[6.] slice:
// let data = [25, 8, 'jaimish', 85, 'surat']
// let ans = data.slice(2, 4)   //array    //sub array
// console.log(ans);


//[7.]tostring
// let data = [25, 8, 'jaimish', 85, 'surat']
// let ans = data.toString()    //String
// console.log(ans);

/**************************************************************************************** */
//[1.]Map:
//Iteration:

// let data = [25, 8, 'amit', 85, 'amit', 'surat']
// let data1 = [99, 100, 8, 64, 1]

// let ans = data.map((v, i) => {
//     if (v > 15) {
//         return v;
//     } else {
//         return 0;
//     }
// })
// console.log(ans);


//[2.]Filter:
//Filtering Array       //Return Array:

// let ans1 = data.filter((v, i) => v > 15 && v < 50)
// console.log(ans1);        //25


//[3.]Reduce:
//Preticular Opration:      //Return Value:
//acc Store thay Value:

// let ans = data1.reduce((acc, v, i) => acc + v, 0)
// console.log(ans);

//[4.]Reverse:        //Return reverse Array:

// let ans = data1.reverse()
// console.log(ans);

//[5.]Sort:
// let data2 = ['mayur', 'amit', 'jaimish', 'piyush', 'sagar']

//Sort Alphabatically:(asc)
// let ans = data2.sort()      //asc
// console.log(ans);


//Sort Accending:
// let ans = data1.sort((a,b) => (a-b))         //asc
// console.log(ans);


//Sort Decending:
// let ans = data1.sort((a,b) => (b-a))         //des
// console.log(ans);


//[6.]Fill:             //Return Array:
// let data1 = [99, 100, 8, 64, 1]
// let ans = data1.fill("ok",1,4)
// console.log(ans);

//[7.]Find Index:         //index
// let data1 = [99, 100, 8, 64, 1]
// let ans = data1.findIndex((v) => v===100)
// console.log(ans);

//[8.]Indexof
//return index of first Occurance:
// let data1 = [99, 100, 8, 64, 1,64]
// let ans = data1.indexOf(64)
// console.log(ans);

//[9.]LastIndexof:
// return index of last Occurance:
// let data = [25, 8, 'amit', 85, 'amit', 'surat']
// let ans = data.lastIndexOf('amit')
// console.log(ans);

//[10.]Includes:
//is Particular value available or not in array    //return boolean
// let data1 = [99, 100, 8, 64, 1,64]
// let ans = data1.includes(100)
// console.log(ans);

//[11.]Every:
//Check In whole Array         //Return Boolean
// let data1 = [99, 100, 8, 64, 1]
// let ans = data1.every((v) => v > 0)
// console.log(ans);
