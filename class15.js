

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



// 2. timing events 