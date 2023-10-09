
const handleInsuarance = () => {
    // console.log("handleInsuarance");
    event.preventDefault()
    let name = document.form.name.value;
    let birth = document.form.age.value;
    let mobile = parseInt(document.form.mobile.value);
    // console.log(name, date, mobile);
    let occupation = document.form.occupation.value;
    let annual = document.form.Annual_income.value;
    // console.log(annual);
    let Insurance = document.form.insuarance_amount.value;
    // console.log(Insurance);

    let smoke = document.form.Smoke.value;

    let res;
    let premium;


    /***************Age:*********** *************/
    let age = new Date(birth)
    let d = 2023 - age.getFullYear();

    if (d > 18 && d <= 25) {
        premium = 1000
    } else if (d >= 26 && d <= 35) {
        premium = 1500
    } else if (d >= 36 && d <= 45) {
        premium = 2000
    } else if (d > 45) {
        premium = 2500
    }
    // console.log(premium);

    let premium1;
    if (occupation === 'Salary') {
        premium1 = premium + 0;
    } else if (occupation === 'self_employee') {
        premium1 = premium + 100;
    }
    // console.log(premium1);

    let finalPremium;
    if (smoke === 'yes') {
        finalPremium = premium1 + 200;
    } else if (smoke === 'no') {
        finalPremium = premium1 + 0;
    }
    // console.log(finalPremium);



    if (Insurance === '') {
        if (annual === '0_3lakh') {
            res = '50Lakh';
        } else if (annual === '3_5lakh') {
            res = '1Cr';
        } else if (annual === '5_10lakh') {
            res = '1.5Cr';
        } else if (annual === 'above10lakh') {
            res = '2Cr';
        }
        document.getElementById("InsuaranceError").innerHTML = "Please Select Current Anual Income"
    } else {


        document.getElementById("InsuaranceError").innerHTML = ""
    }





    /************************************************ */

    let print = '';

    print += '<table border="2"> <tr><th>Name</th><th>Age</th><th>Mobile No</th><th>Insurance Amount</th><th>Premium</th></tr>'
    print += '<tr>'

    print += '<td>'
    print += name;
    print += '</td>'

    print += '<td>'
    print += d;
    print += '</td>'

    print += '<td>'
    print += mobile;
    print += '</td>'

    print += '<td>'
    print += res;
    print += '</td>'


    print += '<td>'
    print += finalPremium;
    print += '</td>'


    print += '</tr>'
    print += '</table>'



    document.getElementById("display").innerHTML = print;

}