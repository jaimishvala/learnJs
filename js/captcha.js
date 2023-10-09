
let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);
// console.log(n1,n2);

document.getElementById("n1").innerHTML = n1;
document.getElementById("n2").innerHTML = n2;

let res = n1 + n2;
console.log(res);


const handleCaptcha = () => {
    // event.preventDefault();
    // console.log("handleCaptcha");
    let a = parseInt(document.getElementById("a").value);

    let capE = true;
    // console.log(a);

    if (a) {
        console.log("y");
        // document.getElementById("ansErr").innerHTML = ''
        if (a == res) {
             document.getElementById("ansErr").innerHTML = ''
            alert("Correct Answer");
            // capE = false;
        } else {
            alert("Incorrect : Correct Answer Is: " + res);
            capE = false;
        }
    }
    else {
        console.log("nnnn");
        document.getElementById("ansErr").innerHTML = 'Please Enter Ans'
        return false;
    }

    
}