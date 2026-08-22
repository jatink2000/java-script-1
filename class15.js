

// javascript events : javascript events are action that is used to excute the function when the user interaction in the browser .  
// there are two types of events : 
// 1. HTML events : the html events is attributes of our elements . 
// some examples of html events : 
// 1. when a user click the mouse over an element . 
// 2. when input is changed . 
// 3. when move the mouse over an element . 
// 4. when move out the mouse of an element .  


// 1. onclick events : the onclick event is used when a user clicks the mouse of an element . 

function events1() {
    document.getElementById("groot1").innerHTML = "hello java script"
}


function onn() {
    let myimage = document.getElementById("img")
    myimage.src = "./on.jpg"
}

function off() {
    let myimage = document.getElementById("img")
    myimage.src = "./off.jpg"
}



// 2. onmouseover: the onmouseover event is used to move the mouse over of an element . 

function event2() {
    document.getElementById("groot2").innerHTML = "hello java script"
}


function onn2() {
    let myimage = document.getElementById("img2")
    myimage.src = "./on.jpg"
}

// 3. onmouseout: the onmouseout event is used to move the mouse out of an element .

function event3() {
    document.getElementById("groot2").innerHTML = "hello html"
}


function onn3() {
    let myimage = document.getElementById("img2")
    myimage.src = "./off.jpg"
}


// 4. onchange event : the onchnage event is used to excute a function when input value is changed . 
function groot(){
    let a= document.getElementById("input")
    let b=a.value
    document.getElementById("name").innerHTML=b
}  



// 2. timing events : java script can excute the code in time interval this is known as timing events . 

    // 1. settimeout :  the settimeout function excute the code give time interval only single time . 
        // syntex : 

        // settimeout(function,timeinterval)

        // function groot1(){
        //     alert("hello java script")
        // }

        // let d=setTimeout(()=>{
        //     groot1()
        // },5000)


    // 1. cleartimeout : the cleartimeout is used to stop the settimeout . 
        // snytex : 
            // clearTimeout(settimeout_variable)

            // function clear_time(){
            //     clearTimeout(d)
            // }
        


    // 2. setinterval : the setinterval is used to excute a code repeated given time interval . 
        // setInterval(function,timeinterval)

        function groot2(){
            alert("hello java script")
        }

        let e=setInterval(()=>{
            groot2()
        },5000)
     
    // 1. clearinterval : the clearinterval is used to stop the setinterval . 
        // snytex : 
        //     clearinterval(setinterval_variable)

            function clear_time2(){
                clearInterval(e)
            }
