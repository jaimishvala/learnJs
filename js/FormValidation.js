const validateForm = () => {
    // console.log("validateForm");

    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    let country = document.contactForm.country.value;
    let gender = document.contactForm.gender.value;
    let hobby = document.contactForm.hobbies;
    console.log(name, email, mobile, country, gender, hobby);

    let nameE = true;
    let emailE = true;
    let mobileE = true;
    let countryE = true;
    let genderE = true;
    let hobbyE = true;

    // console.log(nameE,emailE,mobileE,countryE,genderE,hobbyE);

    //Name:
    if (name === '') {
        document.getElementById("nameErr").innerHTML = 'Please Enter Name';

    } else {
        document.getElementById("nameErr").innerHTML = '';

        var regex = /^[a-zA-Z ]{2,30}$/;
        if (regex.test(name)) {
            document.getElementById("nameErr").innerHTML = '';
            nameE = false;
        } else {
            document.getElementById("nameErr").innerHTML = 'Please Enter Valid Name';
        }
    }

    //Email:
    if (email === '') {
        document.getElementById("emailErr").innerHTML = 'Please Enter Email';

    } else {
        var reEmail = /\S+@\S+\.\S+/;

        if (reEmail.test(email)) {
            document.getElementById("emailErr").innerHTML = '';
            emailE = false;
        } else {
            document.getElementById("emailErr").innerHTML = 'Please Enter Valid Email';
        }
    }

    //Mobile
    if (mobile === '') {
        document.getElementById("mobileErr").innerHTML = 'Please Enter Mobile';
    } else {
        var reNumber = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

        if (reNumber.test(mobile)) {
            document.getElementById("mobileErr").innerHTML = '';
            mobileE = false;
        } else {
            document.getElementById("mobileErr").innerHTML = 'Please Enter Valid Mobile';
        }
    }

    //Country:
    if (country === '0') {
        document.getElementById("countryErr").innerHTML = 'Please Select Country';
    } else {
        document.getElementById("countryErr").innerHTML = '';
        countryE = false;
    }

    //Gender:
    if (gender === '') {
        document.getElementById("genderErr").innerHTML = 'Please Select Gender';
    } else {
        document.getElementById("genderErr").innerHTML = '';
        genderE = false;
    }

    //Hobbies:
    let flag = false;

    for (let i = 0; i < hobby.length; i++) {
        console.log(hobby[i].value, hobby[i].checked);

        if (hobby[i].checked) {
            flag = true;
            break;
        }
    }

    if (flag) {
        document.getElementById("hobbyErr").innerHTML = '';
        hobbyE = false;
    } else {
        document.getElementById("hobbyErr").innerHTML = 'Please Select Atlest One Hobbies';
    }

    if (nameE || emailE || mobileE || countryE || genderE || hobbyE) {
        return false;
    } else {
        return true;
    }

}