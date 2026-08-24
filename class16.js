

// localStorage : the localStorage is allow us to store the key/ value pair data in browser . these data is not deleted when the browser is closed . 

    // there are 4 methods : 
    // 1. setitem : the setitem method is used to save the data in localstorage . 
        // syntex : 
            // localStorage.setItem(Key,value)

            function groot1(){
                localStorage.setItem("name","Groot academy")
                localStorage.setItem("city","jaipur")
                localStorage.setItem("email","Groot@gmail.com")
                localStorage.setItem("secondname","Groot Software")
            }



    // 2. getitem  : the getitem method is used to access/get the data from localstorage . 
            // syntex : 
                // localStorage.getItem(key)

            function groot2(){
              let a=localStorage.getItem("secondname")
              let b=localStorage.getItem("city")
              console.log(a)
              console.log(b)
            }


    // 3. removeitem : the removeitem method is used to remove the data from localstorage.
            // syntex : 
            // localStorage.removeItem(key)

            function groot3(){
                localStorage.removeItem("secondname")
                localStorage.removeItem("email")
            }


    // 4. clear : the clear method is used to clear all the data from localstorage . 
            // syntex : 
            // localStorage.clear() 

            function groot4(){
                localStorage.clear()
            }