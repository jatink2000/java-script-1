


let myusers=JSON.parse(localStorage.getItem("allusers"))

let user_data=document.getElementById("user_data")
// listing : 
    myusers.map((data)=>{
      let tablerow= document.createElement("tr")
      
      let data1=document.createElement("td")
      data1.innerHTML=data.firstname
      let data2=document.createElement("td")
      data2.innerHTML=data.lastname
      let data3=document.createElement("td")
        data3.innerHTML=data.email



    tablerow.appendChild(data1)
    tablerow.appendChild(data2)
    tablerow.appendChild(data3)

    user_data.appendChild(tablerow)

    })