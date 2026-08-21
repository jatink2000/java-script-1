

// row first : 
let row1=document.createElement("tr")
let row1data1=document.createElement("th")
row1data1.innerHTML="No."


let row1data2=document.createElement("th")
row1data2.innerHTML="Full Name"

let row1data3=document.createElement("th")
row1data3.innerHTML="Postion"

let row1data4=document.createElement("th")
row1data4.innerHTML="Salary"


// row second : 
let row2=document.createElement("tr")
let row2data1=document.createElement("td")
row2data1.innerHTML="1"

let row2data2=document.createElement("td")
row2data2.innerHTML="Bill Gates"

let row2data3=document.createElement("td")
row2data3.innerHTML="Founder Microsoft"

let row2data4=document.createElement("td")
row2data4.innerHTML="$1000"



// select / access : 
let mytable=document.getElementById("table")

// add row in table 
mytable.appendChild(row1)
mytable.appendChild(row2)


// add data in row : 
row1.appendChild(row1data1)
row1.appendChild(row1data2)
row1.appendChild(row1data3)
row1.appendChild(row1data4)


row2.appendChild(row2data1)
row2.appendChild(row2data2)
row2.appendChild(row2data3)
row2.appendChild(row2data4)
