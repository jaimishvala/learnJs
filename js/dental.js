
let tseat = 1, tcost = 500;
let fseat = 2, fcost = 1500;
let rootseat = 4, rootcost = 2500;
let rctseat = 6, rctcost = 12000;
let bseat = 12, bcost = 35000;

let tr_name, tr_s, tr_c;

const handleAppointment = () => {
    // console.log("DATE");

    let APTdate = document.getElementById("date").value;
    console.log(APTdate);

    let d = new Date(APTdate);
    // for (let i = 0; i < 4; i++) {
    //     console.log(d.getDate());
    //     d.setDate(d.getDate() + 7)
    // }


    let print = '';
    print += '<table border="1"><tr><th>Treatment</th><th>Date</th><th>Costing</th></tr>'
    for (let i = 0; i < tr_s; i++) {

        if (i === 0) {
            print += '<tr>'

            print += '<td rowspan="12">'
            print += tr_name
            print += '</td>'
        }


        print += '<td>'
        print += d.toLocaleDateString(d.getDate() + 7)
        print += '</td>'

        print += '<td>'
        print += tr_c / tr_s
        print += '</td>'


        print += '</tr>'

        d.setDate(d.getDate() + 7)
    }
    print += '</table>'

    console.log(tr_name, tr_s, tr_c);

    document.getElementById("result").innerHTML = print;

}

const handleTreatment = () => {
    event.preventDefault();
    // console.log("handleTreatment");

    let treatment = document.getElementById("treatment").value;
    console.log(treatment);



    if (treatment === "TeethCleaning") {
        tr_name = "TeethCleaning";
        tr_s = tseat;
        tr_c = tcost;
    } else if (treatment === 'Filling') {
        tr_name = "Filling";
        tr_s = fseat;
        tr_c = fcost;
    } else if (treatment === 'RootCT') {
        tr_name = "Root Canal Treatment";
        tr_s = rootseat;
        tr_c = rootcost;
    } else if (treatment === 'RCT') {
        tr_name = "RCT + Cover";
        tr_s = rctseat;
        tr_c = rctcost;
    } else if (treatment === 'Brace') {
        tr_name = "Brace";
        tr_s = bseat;
        tr_c = bcost;
    }

    document.getElementById("display").style.display = 'block';

    document.getElementById("treat").innerHTML = treatment;
    document.getElementById("seating").innerHTML = tr_s;
    document.getElementById("costing").innerHTML = tr_c;
}