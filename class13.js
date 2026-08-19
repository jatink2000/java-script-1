

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



    // how to style the html elements using dom : 

    // 1. by id : 
        document.getElementById("groot").style.color="red"
        document.getElementById("groot1").style.backgroundColor="blue"


    // 2. byclassname : 
        let ab=document.getElementsByClassName("groot1")
        ab[0].style.color="yellow"
        ab[1].style.backgroundColor="blue"


    // 3. by tagname : 
       let cd= document.getElementsByTagName("p")
       cd[1].style.fontSize="40px"
       cd[1].style.backgroundColor="black"
       cd[1].style.color="blue"


    // how to create a element by using dom : 
       let myheading= document.createElement("h2") // create h2 tag 
       myheading.innerHTML="this is my dom heading 2" // add the text into h2 tag 

       let myheading5= document.createElement("h5") // create h5 tag 
        myheading5.innerHTML="this is my dom heading 5" 

       
       let mainbox= document.getElementById("box1")
       mainbox.appendChild(myheading)
       mainbox.appendChild(myheading5)


    
    // how to change the image by using dom : 
      let image=  document.getElementById("myimage")
      image.src="https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png"



    let myimage=document.createElement("img")
    myimage.src="https://static.vecteezy.com/system/resources/thumbnails/060/843/811/small/close-up-of-raindrops-on-leaves-hd-background-luxury-hd-wallpaper-image-trendy-background-illustration-free-photo.jpg"

    let xy=document.getElementById("mynewimage")
    xy.appendChild(myimage)


    

