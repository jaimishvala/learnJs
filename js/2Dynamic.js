let arr = [
    [1, 'Jaimish', 22],
    [2, 'Anand', 23],
    [3, 'Dubi', 24],
    [4, 'Jay', 21]
]

let print = ''

print += '<table border="1"><tr><th>ID No</th><th>Name</th><th>Age</th></tr>'

for (let i = 0; i < arr.length; i++) {
    print += '<tr>'
    for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        print += '<td>'
        print += arr[i][j]
        print += '</td>'
    }
}

print += '</tr>'

print += '</table>'

document.getElementById("disp").innerHTML = print;