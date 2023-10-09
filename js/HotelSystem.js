
const handleHotel = () => {
    // console.log("handleHotel");
    event.preventDefault();

    let date = document.form.date.value;
    let table = document.form.table.value;
    let food = document.form.food.value;
    let person = document.form.person_number.value;
    let id = Math.floor(Math.random() * 100)

    console.log(id, date, table, food, person);

    let total_bill = person * food
    console.log(total_bill);

    let obj = {
        id,
        date,
        table,
        food,
        person,
        total_bill
    }

    console.log(obj);



    let localData = JSON.parse(localStorage.getItem("HotelSystem"))
    console.log(localData);

    if (localData) {
        localData.push(obj)
        localStorage.setItem("HotelSystem", JSON.stringify(localData))
    } else {
        localStorage.setItem("HotelSystem", JSON.stringify([obj]))
    }


    if (date == '') {
        document.getElementById("dateError").innerHTML = "Please Enter Date"
    } else {
        document.getElementById("dateError").innerHTML = ""
    }

    if (table == '0') {
        document.getElementById("tableError").innerHTML = "Please Anyone Table Number Select"
    } else {
        document.getElementById("tableError").innerHTML = ""
    }


    if (food == '0') {
        document.getElementById("foodError").innerHTML = "Please Select Anyone Food Option"
    } else {
        document.getElementById("foodError").innerHTML = ""
    }


    if (person == '') {
        document.getElementById("personError").innerHTML = "Please Enter No Of Person"
    } else {
        document.getElementById("personError").innerHTML = ""
    }

}


const display = () => {

    let localData = JSON.parse(localStorage.getItem("HotelSystem"))
    console.log(localData);
    // let final_bill = localData.reduce((acc, v) => acc + v.total_bill, 0)
    // console.log(final_bill);

    let tableDiv = document.getElementById("disp");

    if (localData != null) {
        localData.map((t) => {
            // console.log(t);
            let Tr = document.createElement("tr")

            let Td = document.createElement("td")
            let TdText = document.createTextNode(t.date)
            Td.appendChild(TdText)
            Tr.appendChild(Td)

            let Td1 = document.createElement("td")
            let TdText1 = document.createTextNode(t.table)
            Td1.appendChild(TdText1)
            Tr.appendChild(Td1)

            let Td3 = document.createElement("td")
            let TdText3 = document.createTextNode(t.food)
            Td3.appendChild(TdText3)
            Tr.appendChild(Td3)

            let Td4 = document.createElement("td")
            let TdText4 = document.createTextNode(t.person)
            Td4.appendChild(TdText4)
            Tr.appendChild(Td4)

            let Td5 = document.createElement("td")
            let TdText5 = document.createTextNode(t.total_bill)
            Td5.appendChild(TdText5)
            Tr.appendChild(Td5)


            let btnTd = document.createElement("td")

            let Td6 = document.createElement("button")
            Td6.setAttribute("onclick", "handleDelete(" + t.id + ")");
            let TdText6 = document.createTextNode("X")
            Td6.appendChild(TdText6)
            btnTd.appendChild(Td6)

            Tr.appendChild(btnTd)

            // let btnTd = document.createElement("td")

            let Td7 = document.createElement("button")
            Td7.setAttribute("onclick", "handleEdit(" + t.id + ")");
            let TdText7 = document.createTextNode("E")
            Td7.appendChild(TdText7)
            btnTd.appendChild(Td7)

            Tr.appendChild(btnTd)



            // let btntd = document.createElement("button")
            // Td7.setAttribute("onclick", "handleEdit(" + t.id + ")")
            // let TdText7 = document.createTextNode("E")
            // Td7.appendChild(TdText7)
            // Tr.appendChild(Td7)
            // btntd.appendChild(td7)


            tableDiv.appendChild(Tr)
        })
    }



}

const handleEdit = (id) => {
    console.log(id);

    let localData = JSON.parse(localStorage.getItem("HotelSystem"))

    let index = localData.findIndex((v) => v.id == id)
    console.log(localData[index]);


    // localStorage.setItem("HotelSystem", JSON.stringify(fdata));

    document.getElementById("date").value = localData[index].date;
    document.getElementById("table").value = localData[index].table;
    document.getElementById("food").value = localData[index].food;
    document.getElementById("person_number").value = localData[index].person;

}

const handleDelete = (id) => {
    // console.log("handleDelete");
    // console.log(id);
    let localData = JSON.parse(localStorage.getItem("HotelSystem"))

    let fdata = localData.filter((v) => v.id != id)

    localStorage.setItem("HotelSystem", JSON.stringify(fdata));

    window.location.reload();
}

display()