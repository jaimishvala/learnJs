//UDF:

//Function Declaration:
function greeting() {
    console.log("Good Morning");
}

//Function Call:
greeting();


//User Defined Function:

function CalcAge(brithYear) {   //2
    let Age;

    Age = 2023 - brithYear;
    return Age;     //3
}

let res = CalcAge(2001)   //1    //4
console.log(res);  //5

let res1 = CalcAge(2000)
console.log(res1);

/********************************************************************** */
//Arrow Function:

const greeting1 = () => {
    console.log("Good Morning 1");
}

greeting1();


const CalAge = (BirthYear) => {

    let age;

    age = 2023 - BirthYear;
    return age;
}

let ans = CalAge(2001);
console.log(ans);

let ans1 = CalAge(2000);
console.log(ans1);


const answer = (x) => {
    console.log("ggg");
    return x;
}

let dat = answer(10);
console.log(dat);


/******************************************** */
//Nested Function:

const costing = (place) => {   //4
    if (place === 'goa') {
        return 35000;            //5
    } else if (place === 'manali') {
        return 85000;
    }
}


const packeges = (place, place1) => {    //2
    //Nested Function
    let cost1 = costing(place);     //3   //6
    let cost2 = costing(place1);
    let msg;
    msg = place + ' costing you ' + cost1 + '.' + ' And ' + place1 + ' costing you ' + cost2 + '.';

    return msg;    //7
}

let result = packeges('goa', 'manali');  //1     //8
console.log(result);