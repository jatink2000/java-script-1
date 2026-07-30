

    // variablename = data / value . 


    // how to update / change the variable value : 
    // students=20  // 20 
    // document.write(students) // 20 
    // students=23 // 23 
    // document.write(students) // 23 



    // general rules of a variable : 
    // 1. variable name start with letter or underscore . 
    //     marks,_marks  : allow 
    // 2. variable name cannot start with number . 
    //     2marks , 5marks  : not allow
    // 3. variable name can contain letter, number and $ symbol . 
            // marks,m2arks,m$arks : allow 
    // 4. variable name cannot contain any extra space . 
            // ma rks=40   : not allow 
    // 5. variable name are case senstive . 
            // year=2026
            // document.write(year)



    // how to declare the variable : to declare the variables in java script we can use the two method . 
    // 1. old java script : 
    //     1. using var keyword : using the var keyword you can redeclare and update the variable . 
            // var variablename=data / value 

            // var groot=40  
            // groot=45  // update 
            // document.write(groot) // 45 

            // var groot=60  // redeclare 
            // document.write(groot) // 60 


    //     2. automatic 

    // 2. modren java script : 
    //     1. let : using the let keyword you cannot redeclare and can update the variable . 
            // let variablename=data / value 

            // let groot=40  
            // groot=45  // update 
            // document.write(groot) // 45 

            // let groot=60  // redeclare 
            // document.write(groot) // 60 



    //     2. const : cont keyword is used to create the constant variables . 
    // cannot redeclare & update . it can read only . 

            // const variablename = data / value 

            // const groot=50 
            // // groot=45  // update
            // document.write(groot)

            // const groot= 60 
            // document.write(groot)



    
        // let groot  // empty variable declare 
        // groot=60 
        // document.write(groot)


        // const groot ; 
        // groot =60 
        // document.write(groot)


        let a=50 
        let b=30 
        let c ; 
        c=a ; 
        a=b ; 
        b=c ; 
        document.write(a, "<br/>")
        document.write(b)
