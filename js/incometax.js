const incomeTax = () => {
    // console.log("hsgyu");
    // event.preventDefault();

    let salary = parseInt(document.getElementById("salary").value);
    // console.log(salary);

    let ans = 0;
    let ans1 = 0;
    let ans2 = 0;
    let ans3 = 0;
    let ans4 = 0;
    let ans5 = 0;
    let total = 0;

    let salaryE = true;

    if (salary > 300000 && salary < 10000000000) {
        document.getElementById("salaryErr").innerHTML = ''
        if (salary > 0 && salary <= 300000) {
            ans = 0
        } else if (salary > 300000 && salary <= 600000) {
            ans = 0
            ans1 = (salary - 300000) * 0.05;
        } else if (salary > 600000 && salary <= 900000) {
            ans = 0
            ans1 = 300000 * 0.05;
            ans2 = (salary - 600000) * 0.1;
        } else if (salary > 900000 && salary <= 1200000) {
            ans = 0
            ans1 = 300000 * 0.05;
            ans2 = 300000 * 0.1;
            ans3 = (salary - 900000) * 0.15;
        } else if (salary > 1200000 && salary <= 1500000) {
            ans = 0
            ans1 = 300000 * 0.05;
            ans2 = 300000 * 0.1;
            ans3 = 300000 * 0.15;
            ans4 = (salary - 1200000) * 0.2;
        } else if (salary > 1500000) {
            ans = 0
            ans1 = 300000 * 0.05;
            ans2 = 300000 * 0.1;
            ans3 = 300000 * 0.15;
            ans4 = 300000 * 0.2
            ans5 = (salary - 1500000) * 0.3;
        }

        // console.log(ans);

        total = ans + ans1 + ans2 + ans3 + ans4 + ans5;
        console.log(total);

        document.getElementById("disp").innerHTML = ans;
        document.getElementById("disp1").innerHTML = ans1;
        document.getElementById("disp2").innerHTML = ans2;
        document.getElementById("disp3").innerHTML = ans3;
        document.getElementById("disp4").innerHTML = ans4;
        document.getElementById("disp5").innerHTML = ans5;
        document.getElementById("total").innerHTML = total;
        salaryE = false;
    } else {
        document.getElementById("salaryErr").innerHTML = 'Please Enter Valid Salary'
    }

    return false;
}