const handleProduct = () => {
    // console.log("handleProduct");

    let name = document.form.name.value;
    let des = document.form.description.value;
    let price = parseInt(document.form.price.value);
    let discount = document.form.discount.value;
    let coupon = document.form.code.value;

    console.log(name, des, price, discount, coupon);


    if (name === '') {
        document.getElementById("nameErr").innerHTML = 'Please Enter Name'
    } else {
        document.getElementById("nameErr").innerHTML = ''

        var regex = /^[a-zA-Z ]{2,30}$/;
        if (regex.test(name)) {
            document.getElementById("nameErr").innerHTML = '';
            document.getElementById("ans1").innerHTML = name;
        } else {
            document.getElementById("nameErr").innerHTML = 'Please Enter Valid Name';
        }
    }

    if (des === '') {
        document.getElementById("DescriptionErr").innerHTML = 'Please Enter Description'
    } else {
        // document.getElementById("DescriptionErr").innerHTML = ''

        var desgex = /^(?=(?:[^\A-Za-z0-9]*[\A-Za-z0-9]){20,100})[~,?,!]*\S+(?: \S+){0,}$/;
        if (desgex.test(des)) {
            document.getElementById("DescriptionErr").innerHTML = '';
            document.getElementById("ans2").innerHTML = des;
        } else {
            document.getElementById("DescriptionErr").innerHTML = 'Please Enter Valid Description';
        }

    }

    if (price >= 200 && price <= 50000) {
        document.getElementById("PriceErr").innerHTML = ''
    } else {

        var pricegex = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
        if (pricegex.test(price)) {
            document.getElementById("PriceErr").innerHTML = '';
            document.getElementById("ans3").innerHTML = price;

        } else {
            document.getElementById("PriceErr").innerHTML = 'Please Enter Valid Price';
        }
    }


    if (discount === 'y') {
        if (coupon === 'ABC123' || coupon === 'XYZ123') {
            discount = price * 0.10;
        } else if (coupon === 'n') {
            discount = 0;
        }
    } else {
        discount = 0;
    }


    if (discount === '') {
        document.getElementById("DiscountErr").innerHTML = 'Please Enter Discount'
    } else {
        // document.getElementById("DescriptionErr").innerHTML = ''

        var desgex = /^(?=(?:[^\A-Za-z0-9]*[\A-Za-z0-9]){2})[~,?,!]*\S+(?: \S+){0,}$/;
        if (desgex.test(des)) {
            document.getElementById("DiscountErr").innerHTML = '';
            document.getElementById("ans4").innerHTML = discount;
        } else {
            document.getElementById("DiscountErr").innerHTML = 'Please Enter Valid Discount';
        }
    }


    document.getElementById("ans4").innerHTML = discount;
    document.getElementById("ans3").innerHTML = price;
    document.getElementById("ans5").innerHTML = coupon;

    return false;
}