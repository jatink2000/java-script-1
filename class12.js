

// function : Function is a block of code it works when it is called . 

    // how to create the function : to create the function declare the function keyword. then define the function name followd by the () the start the function body using the {} . 

        // syntex : 
            // function function_name(){
            //     //code to be excute 
            // }

        // function groot(){
        //     document.write("hello <br/>")
        // }

    // how to call the function : to call the function write the function name using the () in your program file . 
        
        // function_name() // call 

        // groot()
        // groot()
        // groot()
        // groot()
        // groot()


    // note : function reuseable . you can call the function multiple times . 


    // function parameter & argument : the function parameter & argument is used to pass the data / information inside the function . 

            // function function_name(name/variable){
                
            // }

            // // call 
            // function_name(data/value)

    // parameter : parameter is a name or variable it is used where the function declare . 
    // argument : parameter is a data or value it is used where the function call .
    
        // function groot(myname,year){
        //     document.write("my name is ",myname)
        //     document.write("year is ",year)
        // }

        // groot("Groot Academy",2026)


    
    // 1. global scope :
    
    
    
    // let a=30
    // function groot(){
    //     // let a=60 // local 
    //     document.write(a) // 30 
    // }
    
    // groot()
    // document.write(a) // 30 


    // function return : function return is used to pass the data ouside the function . 

    function groot(){
        let a=60 // local 
        return(a)
    }

    document.write(groot())

