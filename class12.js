

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
    // argument : argument is a data or value it is used where the function call .
    
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

    // function groot(){
    //     let a=60 // local 
    //     return(a)
    // }

    // document.write(groot())



    // function structure : 
    // 1. no return no argument 

    // function groot(){
    //     let myname="groot academy"
    //     document.write(myname)
    // }

    // groot() 


    // 2. no return with argument 

    // function groot1(myname){
    //     document.write("my name is ",myname)
    // }

    // groot1("groot academy") 



    // 3. with return no argument 
    // function groot2(){
    //     let myname="groot academy"
    //     return(myname)
    // }   

    // let returndata=groot2()
    // document.write(returndata)


    // 4. with return with argument 

    // function groot3(myname){
    //     return(myname)
    // }

    // let returndata=groot3("groot academy")
    // document.write(returndata)



    // types of function : 
    // 1. simple function : 
            // syntex : 
            // function function_name(){
            //     //code to be excute 
            // }


    // 2. anonymous function: an anonymous function is a function that does not have a function name unlike named function . which are declered with a name for easy referance. 
            // syntex : 
            // function (){
            //     function body/ code to be excute 
            // }


            // let a=function (){
            //     document.write("hello groot")
            // }

            // a() 




    // 3. arrow function :in an arrow function we cannot need the function keyword , here we define the function by a single () the => followed by the function body . 

        // syntex : 
        // function_name=()=>{
                // function body/ code to be excute 
        // }


        // groot=()=>{
        //     document.write("this is my arrow function <br/>")
        //     document.write("this is my arrow function <br/>")
        // }

        // groot() 

        // if we have only single statment in the function body , we can even remove the curly braces . 

        // groot1=()=> document.write("this is my second arrow function")
        // groot1()



    // 4. self invoked function : the self invoked function are javascript function that excute immediately as they are defined , to defined a self invoked function, you can enclose an ()
        
    //    (function (){
    //         // function body/code to be excute 
    //     })()


        (function (){
            document.write("this is my self invoked function")
        })()

