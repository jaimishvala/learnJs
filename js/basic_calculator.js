const insert = (value) => {
    // console.log(value);
    // console.log("handleCalculate");

    document.form1.textview.value = document.form1.textview.value + value;
}

const equal = () => {
    console.log("equal");

    let exp = document.form1.textview.value;
    console.log(exp);

    //eval() Method:

    let res = eval(exp);
    // console.log(res);
    document.form1.textview.value = res;
}

const Clean = () => {
    // console.log("Clean");
    document.form1.textview.value = '';
}

const backspace = () => {
    console.log("backspace");

    let exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1)
}
