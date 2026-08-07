

// javascript object : java script object ia like a variable but is used to store multiple key and value pair data . 




    // How to create/declare the object in java script :to create the object in java script use the object name and then store the multiple key and value data inside the {} . 

    // let objectname={
    //     key:value ,
    //     key2:value2 , 
    //     key3: value3 
    //     ...
    // }

    // let student_details={
    //     studentname:"Ravi kumar",
    //     marks:87 ,
    //     course: 'C & C++'
    // }

    // key : properties 
    // value/data : property value 

    // how to access the object properties : 
            // 1. using dot: 
                // objectname.propertyname
                // document.write(student_details.marks , "<br/>")
                // document.write(student_details.course, "<br/>")



            // 2. using property name  / bracket notation: 
                // objectname[propertyname]

                // document.write(student_details["studentname"], "<br/>")
                // document.write(student_details["marks"])



    
    // another way to create the object : you can declare the empty object and add the properties later . 

        // let student_details={} // empty object 
        // let student_details2={} // empty object 

        //add properties
        // objectname.propertyname=data/value 

        // student_details.firstname="groot"
        // student_details.lastname="academy"

        // student_details2.marks=60 
        // student_details2.age=26


        // document.write(student_details.firstname, "<br/>")
        // document.write(student_details2.age, "<br/>")


    // using the new keyword : 

        // let student_details=new Object({
        //     firstname:"groot",
        //     lastname:"academy"
        // })


        // there is no need to use the new Object() . 



    // change the properties value / data : you can change the value of property .
        
        // objectname.propertyname=newdata 

    // let student_details={
    //         firstname:"groot",
    //         lastname:"academy"
    // }

    // student_details.firstname="ravi"
    // student_details.lastname="kumar"

    // document.write(student_details)



    // add new property : you can add a new property .
        // objectname.newpropertyname=data 
    
    // let student_details={
    //         firstname:"groot",
    //         lastname:"academy"
    // }

    // student_details.course="Web designing"

    // console.log(student_details)



    // delete property : the delete keyword is used to delete the property . 
        // delete objectname.properyname

    // let student_details={
    //         firstname:"groot",
    //         lastname:"academy",
    //         course:"Web designing"
    // }
    // delete student_details.firstname 
    // console.log(student_details)


    // check : 

    let student_details={
            firstname:"groot",
            lastname:"academy",
            course:"Web designing"
    }

    let result=("age" in student_details)
    console.log(result)









    



