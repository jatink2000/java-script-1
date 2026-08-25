

function submit_btn(){
   let firstname_value= document.getElementById("firstname").value
   let lastname_value= document.getElementById("lastname").value
   
   let email_value= document.getElementById("email").value
   
    // object for input value 
    let userdata={
        "firstname":firstname_value,
        "lastname":lastname_value,
        "email":email_value
    }

    // already signup : 
    let already_users=JSON.parse(localStorage.getItem("allusers"))||[]

    already_users.push(userdata)


    localStorage.setItem("allusers",JSON.stringify(already_users))
   
}