

// DOM : document object model 
//     with the help of dom java script can access , change/update , style all the element of an HTML document . 


    // there are three way to access / select the html element : 
    // 1. byid  : 
        // syntex : 
        // let a=document.getElementById("groot")
        // let b=document.getElementById("groot1")
        // console.log(a)
        // console.log(b)


    // 2. byclassname
        // syntex : 
    //    let c = document.getElementsByClassName("groot1")
    //    let d = document.getElementsByClassName("groot2")
    //    console.log(c[1])
    //    console.log(d[0])


    // 3. bytagname: 
        // syntex: 
    //    let e= document.getElementsByTagName("p")
    //    console.log(e[1]) 



// how to change/update the element : 
    // 1. by id : 
        document.getElementById("groot").innerHTML="hyy Java script"
        document.getElementById("groot1").innerHTML="hye java"


    // 2. by classname: 
        let c = document.getElementsByClassName("groot1")
        c[2].innerHTML="hello java"
        let d = document.getElementsByClassName("groot2")
        d[0].innerHTML="groot"


    
    // 3. bytagname: 
        let e= document.getElementsByTagName("p")
        e[0].innerHTML="this is my updated paragraph"
        e[3].innerHTML="this is my second updated paragraph"
