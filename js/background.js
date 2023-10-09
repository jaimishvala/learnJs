

const CountryChange = () => {
    // console.log("CountryChange");

    let country = document.getElementById("country").value;
    //   console.log(country);

    if (country === 'bharat') {
        // console.log("India");
        document.getElementById("body").style.backgroundColor = 'orange'
    } else if (country === 'uk') {
        // console.log("UKKKKK");
        document.getElementById("body").style.backgroundColor = 'pink'
    } else if (country === 'us') {
        // console.log("USSSSSSSSSSSSS");
        document.getElementById("body").style.backgroundColor = 'blue'
    } else {
        // console.log("0000000000");
        document.getElementById("body").style.backgroundColor = 'white'
    }

}