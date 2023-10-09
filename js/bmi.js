const handleBMI = () => {
    // event.preventDefault();
    // console.log("handleBMI");

    let W = parseFloat(document.getElementById("weight").value);
    let H = parseFloat(document.getElementById("height").value);
    // console.log(W, H);

    let wE = true;
    let hE = true;

    if (W > 50 && W < 100) {
        document.getElementById("WeightErr").innerHTML = '';
        let h = H / 100;
        let BMI = '';
        BMI = W / (h * h);

        if (BMI > 17 && BMI < 18.5) {
            document.getElementById("ans1").innerHTML = "Normal";
        } else if (BMI > 18.5 && BMI < 25) {
            document.getElementById("ans1").innerHTML = "Mild Thinness";
        } else if (BMI > 25 && BMI < 30) {
            document.getElementById("ans1").innerHTML = "Overweight";
        } else {
            // document.getElementById("ans1").innerHTML = "Severe Thinness";
        }
        document.getElementById("ans").innerHTML = BMI;
        wE = false;
    } else {
        document.getElementById("WeightErr").innerHTML = 'please valid weight';
    }

    if (H > 50 && H < 200) {
        document.getElementById("HeightErr").innerHTML = '';
        hE = false;
    } else {
        document.getElementById("HeightErr").innerHTML = 'please valid height';
    }

    return false;
}