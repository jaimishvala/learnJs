const handleOnclick = () => {
    console.log("handleOnclick");
}


const handleOnmousUp = () => {
    console.log("handleOnmousUp");
}

const handleOnmousDown = () => {
    console.log("handleOnmousDown");
}

const handleOnmousOut = () => {
    console.log("handleOnmousOut");
}

const handleOnmousOver = () => {
    console.log("handleOnmousOver");
}

const handleOnmousMove = () => {
    console.log("handleOnmousMove");
}

const handleUp = () => {
    // console.log("handleUp");
    let x = document.getElementById("up").value;
    console.log(x);
}

const handleDown = () => {
    // console.log("handleUp");
    let x = document.getElementById("down").value;
    console.log(x);
}

const handleFocus = () => {
    console.log("handleUp");

    document.getElementById("name").style.backgroundColor = 'pink'
}

const handleBlur = () => {
    console.log("handleBlur");
    document.getElementById("name").style.backgroundColor = 'white'
}

window.onload = function () {
    console.log("OnLoad");
    alert("Hello World!");
}

window.onunload = function () {
    console.log("OnUnLoad");
}

window.onresize = function () {
    console.log("OnResize");
}
