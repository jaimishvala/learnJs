//1. Finding the maximum element in an array.
// let arr = [100, 200, 10, 50, 30, 20]

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[0]) {
//         max = arr[i]
//     }
// }
// console.log(max);


//1.Maximum:

// let ans = Math.max(...arr)
// console.log(ans);

//1.

// const ArrMax = (arr) => {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[0]) {
//             max = arr[i]
//         }
//     }
//     console.log(max);
// }

// ArrMax(arr);


/**************************************************************** */
//2. Finding the minimum element in an array.

// let arr = [100, 200, 10, 50, 30, 20]

// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min);


//2.Minimum:
// let ans = Math.min(...arr)
// console.log(ans);

//2.
// const ArrMax = (arr) => {
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     console.log(min);
// }

// ArrMax(arr);

/******************************************************** */
//3.    Sorting an array in ascending order.

// let arr = [50, 20, 10, 305, 5]

// let ans = arr.sort((a, b) => a - b)
// console.log(ans);


//3. Foor Loop:

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//3.

// const SortAsc = (arr) => {
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] =temp
//             }
//         }
//     }
//     console.log(arr);          //Asc
//     console.log(arr[0],arr[arr.length-1]);            //min ,max
// }

// SortAsc(arr)

/****************************************************** */
//4. Sorting an array in descending order.

// let arr = [50, 20, 10, 305, 5]

// let ans = arr.sort((a, b) => b - a)
// console.log(ans);


//4.Foor Loop:
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


//4.
// const SortAsc = (arr) => {
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] =temp
//             }
//         }
//     }
//     console.log(arr);          //Dsc
//     // console.log(arr[0],arr[arr.length-1]);            //min ,max
// }

// SortAsc(arr)

/*************************************************************************** */
//5.Reversing an array.
// let arr = [52, 10, 5, 2, 100]

// let ans =arr.reverse()
// console.log(ans);


//5.

// const Reversing = (arr) => {
//     let res = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//      console.log(arr[i]);
//      res(arr[i])
//     }
//     // res(arr[res]);
//     // console.log(res[arr[i]]);
//     console.log(res);

// }

// Reversing(arr)



//6.Finding the sum of all elements in an array.
// let arr = [20, 50, 10, 26, 100]

// const SumFun = (arr) => {
//     let sum;
//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
//     }
//     console.log(sum);

// }

// SumFun(arr)


//Reduce:
// let ans = arr.reduce((acc,v) => acc+v,0)
// console.log(ans);                       //206


//7. Finding the average of all elements in an array.

// let arr = [20, 50, 10, 26, 100]

// const averageFun = (arr) => {
//     let sum;
//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
//     }
//     console.log(sum / arr.length);

// }

// averageFun(arr)


//7.
// let arr = [20, 50, 10, 26, 100]
// let ans = arr.reduce((acc,v) => acc+v,0)
// console.log(ans/arr.length);


//8. Checking if an array contains a specific element.
// let arr = [10, 500, 99, 12, 25]

// const Specific = (arr, elem) => {
//     let temp
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === elem) {
//             temp = elem;
//             // console.log(temp);
//             break;
//         }
//     }
//     if (temp) {
//         console.log(temp + " is Available");
//     } else {
//         console.log(elem + " is Not Available");
//     }
// }

// Specific(arr, 99)


//9. Removing duplicates from an array.

// let arr = ['jaimish', 10, 50, 60, 10, 50, 60, 2, 10, 50, 'jaimish']


// const Removing = (arr) => {
//     let UniqArr = []

//     arr.map((v) => {
//         if (!UniqArr.includes(v)) {
//             UniqArr.push(v)
//         }
//     })
//     console.log(UniqArr);

// }
// Removing(arr)


//9.
// const remove = (arr) => {
//     let ans = arr.filter((v, i) => arr.indexOf(v) === i)
//     console.log(ans);
// }

// remove(arr)



//10. Merging two arrays into a new array.

// let arr = ['jaimish', 10, 20]
// let arr1 = [30, 40, 50]

// const Merging = (a1, a2) => {
//     let MarginArr = [];

//     for (let i = 0; i < a1.length; i++) {
//         MarginArr[i] = a1[i]
//     }

//     for (let i = 0; i < a2.length; i++) {
//         MarginArr[a1.length + i] = a2[i]
//     }

//     console.log(MarginArr);

// }
// Merging(arr, arr1)


//10
// const Merging = (arr, arr1) => {
//     ans = [...arr, ...arr1]
//     console.log(ans);
// }
// Merging(arr, arr1)



// let ans = [...arr, ...arr1]
// console.log(ans);


//11. Splitting an array into two arrays based on a condition.

// let arr = ['jaimish', 10, 50, 60, 10, 50.8, 60, 10, 50, 'jaimish']

// let ans = arr.filter((v) => typeof v === 'number')
// let ans1 = arr.filter((v) => typeof v === 'string')
// console.log(ans, ans1);

// 13. Rotating an array by a given number of positions.
// let arr = [50, 40, 20, 100, 60, 10]

// const Rotating = (arr, n) => {
//     for (let i = 0; i < n; i++) {
//         let ans = arr.pop(n)
//         arr.unshift(ans)
//         console.log(arr);
//     }
// }

// Rotating(arr, 2)

// const Rotate = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let ans = arr.shift()
//         console.log(arr);
//     }

// }

// Rotate(arr)


// 14. Finding the second largest element in an array.
// let arr = [50, 40, 20, 100, 60, 10]

// const SecLargest = (arr) => {
//     let ans = arr.sort((a, b) => b - a)
//     console.log(ans[1]);

// }
// SecLargest(arr)

//15. Finding the k-th smallest element in an array.
// let arr = [50, 40, 20, 100, 60, 10]

// const KSmallest = (arr) => {
//     let ans = arr.sort((a, b) => a - b)
//     console.log(ans[1]);

// }
// KSmallest(arr)


//17.Finding the median of an array.

// let arr = [5, 4, 10, 3, 2, 1]

// const median = (arr) => {

//     let sarr = arr.sort((a, b) => a - b)
//     console.log(sarr);

//     let index = Math.floor(arr.length / 2)

//     if (arr.length % 2 === 0) {
//         let ans = (sarr[index] + sarr[index - 1]) / 2;
//         console.log(ans);
//     } else {
//         console.log(sarr[index]);
//     }

// }

// median(arr)


/***************************************************************** */

//19.Checking if two arrays are equal or not.

// let arr1 = [45, 8, 9, 37];
// let arr2 = [45, 8, 9, 37];

// if (arr1.length !== arr2.length) {
//     console.log("Not Same");
// } else {
//     let flag = true;
//     arr1.map((v, i) => {
//         if (arr1[i] !== arr2[i]) {
//             flag = false;
//         }
//     });

//     if (flag === true) {
//         console.log("Same");
//     } else {
//         console.log("Not Same");
//     }
// }


// 23. Finding the index of the first occurrence of an element in an array.
// let arr = [500, 20, 500, 20, 10]

// const firstOcc = (arr, n) => {
//     let ans = arr.indexOf(n)
//     console.log(ans);
// }
// firstOcc(arr, 500)


// 24. Finding the index of the last occurrence of an element in an array.

// let arr = [10, 20, 500, 10, 10]

// const LastIndex = (arr,n) => {

//    let ans = arr.lastIndexOf(n)
//     console.log(ans);

// }

// LastIndex(arr,10)


// 25. Removing all occurrences of an element from an array.

// arr = [10, 20, 20, 20, 500, 10, 500, 10]

// const RemoveOcc = (arr) => {

//     let ans = arr.filter((v) => v !== 10 && v !== 500)
//     console.log(ans);

// }

// RemoveOcc(arr)


//26.Replacing all occurrences of an element in an array with a new element.

// let arr = [100, 50, 10, 100]

// const RemoveAllOcc = (a1, Elem, NewElem) => {

//     let ans = a1.map((v) => v === Elem ? NewElem : v)
//     console.log(ans);
// }
// RemoveAllOcc(arr, 100, 99)

//27.Creating a new array with the elements of the original array in reverse order, without modifying the original array.

// let arr = [10, 20, 30, 50, 10]

// const ModifyReverse = (arr) => {
//     let ans = arr.slice().reverse()
//     console.log(ans);
// }

// ModifyReverse(arr)


//28. Checking if an array is sorted in ascending order.

// let arr = [50, 10, 20, 40, 100]
// let arr = [10,20,50,60,400]

// const CheckSortAsc = (arr) => {
//     let flag = true;

//     for (let i = 0; i<arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 flag = false;
//             }
//         }
//     }

//     if (flag===true) {
//         console.log("Array Is Ascending Order");
//     } else {
//         console.log("Array Is Not Ascrnding Order");
//     }
// }

// CheckSortAsc(arr)



// 29.    Checking if an array is sorted in descending order.

// let arr = [20, 10, 500, 40, 60]
// let arr = [50,40,30,20,10,5]

// const CheckSortDec = (arr) => {

//     let flag = true

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 flag = false
//             }
//         }
//     }

//     if (flag === true) {
//         console.log("Array Is Descending Order");
//     } else {
//         console.log("Array Is Not Descending Order");
//     }

// }

// CheckSortDec(arr)


// 30.    Finding the first three maximum number's sum an array.
// let arr = [50, 110, 99, 40, 100,10,20,30]
// const SumThreeMax = (arr) => {

//     let sum = arr.sort((a,b) => b-a).slice(0,3).reduce((acc,v) => acc+v,0)
//     console.log(sum);

// }

// SumThreeMax(arr)

/**************************************************************** */

//Matrix:

// arr = [
//     [1, 'Jaimish', 22],
//     [2, 'Anand', 23],
//     [3, 'Dubi', 24]
// ]

// console.log(arr[1][2]);     //row and colum


//1.

// for (let i = 0; i < arr[i].length; i++) {
//     for (let j = 0; i < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }


//3.
// arr.map((v) => {
//     // console.log(v);
//     v.map((v1) => {
//         console.log(v1);
//     })
// })

//Dynamic 2D:
