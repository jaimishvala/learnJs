
// let arr = [];

const handleSubmit = () => {
    // event.preventDefault()

    let localData = JSON.parse(localStorage.getItem("name"));
    let name = document.getElementById("name").value;
    // console.log(name);

    document.getElementById("disp").innerHTML = ""

    if (localData) {
        localData.push(name)
        localStorage.setItem("name", JSON.stringify(localData))

    } else {
        localStorage.setItem("name", JSON.stringify([name]))
    }

    Display()
}


const Display = () => {

    let localData = JSON.parse(localStorage.getItem("name"));
    console.log(localData);

    let ulDiv = document.getElementById("disp");

    localData.map((l) => {
        let liDiv = document.createElement("li")
        let Text = document.createTextNode(l)

        liDiv.appendChild(Text)
        ulDiv.appendChild(liDiv)
    })

}
Display()