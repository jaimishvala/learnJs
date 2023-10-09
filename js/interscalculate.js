const handleIntersCalculate = () => {

    // console.log("handleIntersCalculate");

    let P = parseInt(document.getElementById("principal").value);
    let R = parseInt(document.getElementById("rate").value);
    let T = parseInt(document.getElementById("time").value);
    let op = (document.getElementById("calander").value);
    // console.log(P,R,T,op);
    let ans = '';

    let PE = true;
    let RE = true;
    let TE = true;
    let opE = true;

    if (op === 'y') {
        // console.log("yyyy");
        ans = (P * R * T) / 100;
    } else if (op === 'm') {
        ans = (P * R * T) / 1200;
    }
    console.log(P, R, T, ans);

    if (P > '0' && P < 500000) {
        document.getElementById("PErr").innerHTML = '';
        PE = false;
    } else {
        document.getElementById("PErr").innerHTML = 'Please Enter Principal';
    }

    if (R > '0' && R < 100) {
        document.getElementById("RErr").innerHTML = '';
        RE = false;
    } else {
        document.getElementById("RErr").innerHTML = 'Please Enter Rate';
    }

    if (T > '0' && T < 20) {
        document.getElementById("TErr").innerHTML = '';
        TE = false;
    } else {
        document.getElementById("TErr").innerHTML = 'Please Enter Time';
    }

    if (op === '0') {
        document.getElementById("SErr").innerHTML = 'Please Select Any On Option';
    } else {
        document.getElementById("SErr").innerHTML = '';
        opE = false;
    }


    document.getElementById("ans").innerHTML = ans;

    return false;
} 