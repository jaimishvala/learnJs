//CRUD Opration:
let arr = []
updateIndex = null;

const handleTodo = () => {
    event.preventDefault();
    // console.log("handleTodo");

    let Todo = document.getElementById("todo").value;
    // console.log(Todo);

    if (updateIndex !== null || updateIndex === 0) {
        console.log("Update Opration");
        arr[updateIndex] = Todo;
    } else {
        console.log("Add Opration");
        arr.push(Todo)
    }

    updateIndex = null;

    document.getElementById("todo").value = ''

    DisplayData()
}

const handleRemove = (i) => {
    // console.log("handleRemove");
    // console.log(i);

    arr.splice(i, 1)
    // console.log(arr);

    DisplayData()
}

const handleEdit = (i) => {
    // console.log("handleEdit");
    // console.log(i);
    document.getElementById("todo").value = arr[i]
    // console.log(arr[i]);

    updateIndex = [i]

    DisplayData()
}

const DisplayData = () => {

    let ulElem = document.getElementById("disp")
    console.log(ulElem);

    let LiElem = document.createElement("li")
    // console.log(LiElem);
    let Text = document.createTextNode("10");

    LiElem.appendChild(Text)
    ulElem.appendChild(LiElem)

    // let print = '';

    // arr.map((v, i) => {
    //     print += `<li>${v}<button onclick = handleRemove(${i})>X</button><button onclick = handleEdit(${i})>E</button></li>`
    // })

    // document.getElementById("disp").innerHTML = print;
}