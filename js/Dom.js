// const handleSubmit = () => {
//     console.log("handleSubmit");
// }

// let divElem = document.getElementById("disp")
// let h1Elem = document.createElement("h1")

// let h1Text = document.createTextNode("Hello World !")

// h1Elem.appendChild(h1Text)
// divElem.appendChild(h1Elem)


// let aElem = document.createElement("a")
// aElem.setAttribute("href", "#")
// aElem.setAttribute("onclick", "handleSubmit()")

// let aText = document.createTextNode("Home")

// aElem.appendChild(aText)
// divElem.appendChild(aElem)





/*************************************Dom Todo:*************************************** */

const handleRemove = (id) => {
    console.log("handleRemove");
    // let div = document.getElementById("disp");
    let RemoveRef = document.getElementById("div-", id)
    RemoveRef.remove();
}

const handleSubmit = () => {
    event.preventDefault();
    // console.log("handleSubmit");

    let parentDiv = document.getElementById("disp")

    let name = document.getElementById("name").value;
    console.log(name);

    let id = Math.floor(Math.random() * 1000)

    let divElem = document.createElement("div")
    let divText = document.createTextNode(name)

    let btnElem = document.createElement("button")

    let btnText = document.createTextNode("X")

    btnElem.setAttribute("onclick", "handleRemove(" + id + ")")

    // divElem.appendChild(id)
    divElem.appendChild(divText)
    divElem.appendChild(btnElem)
    btnElem.appendChild(btnText)

    parentDiv.appendChild(divElem)

}


/**************************************************************************************** */
