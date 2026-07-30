


// loops : loops are used to excute the block of code till the condition is true. 
    // every loop create with three experssion : 
    //     1. expr 1 : start 
    //     2. expr 2: condition / end 
    //     3. expr 3 : increment / decrement 


    // 1. entry loop : checks the condition when enter the statment . 
        // 1. for loop : 
            // for(expr 1;expr 2;expr 3){
            //     // code to be excute 
            // }

            // for(i=100;i>=1;i--){
            //     document.write("groot academy ",i , "<br/>")
            // }


        // 2. while loop : 

            // start 
            // while(condition){
            //     // code to be excute 
            //     increment/ decrement 
            // }


            // i=1
            // while(i>=200){
            //     document.write("groot academy ",i , "<br/>")
            //     i++
            // }



    // 2. exit loop : checks the condition when exit the statment .
        // 1. do while loop : 

        // start 
        // do{
        //     // code to be excute 
        //     increment/ decrement 
        // }while(condition)


        // i=1
        // do{
        //     document.write("groot academy ",i , "<br/>")
        //     i++ 
        // }while(i>=50)




    // Q 1: 
    // *************
    // for(i=11;i<=20;i++){
    //     document.write("* ")
    // }


    // i=1
    // while(i<=10){
    //     document.write("* ")
    //     i++
    // }


    // i=10
    // do{
    //     document.write("* ")
    //     i--
    // }while(i>=1)


    // Q 2: 
    // *
    // *
    // * 
    // * 
    // * 
    // * 

    // for(i=1;i<=10;i++){
    //     document.write("* <br/>")
    // }

    // i=1
    // while(i<=10){
    //     document.write("* <br/>")
    //     i++
    // }


    // i=1
    // do{
    //     document.write("* <br/>")
    //      i++
    // }while(i<=10)



    // Q 3: 
    // *****
    // *****
    // *****
    // *****
    // *****
    
    // for(j=1;j<=10;j++){
    //     for(i=1;i<=10;i++){
    //         document.write("* ") // *****
    //     }
    //     document.write("<br/>")
    // }



    // outer loop 
    // j=1
    // while(j<=5){
    //     // inner loop : 
    //     i=1
    //     while(i<=5){
    //         document.write("* ") // *****
    //         i++
    //     }
    //     document.write("<br/>")
    //     j++
    // }


    // j=1
    // do{
    //     i=1
    //     do{
    //         document.write("* ") // *****
    //         i++
    //     }while(i<=5)

    //     document.write("<br/>")
    //     j++
    // }while(j<=5)



    // i=1
    // while(i<=5){
    //     // inner loop (for)
    //     for(j=1;j<=5;j++){
    //         document.write("* ")
    //     }
    //     document.write("<br/>")
    //     i++
    // }


    // Q 4: 
    // *    : 1,1
    // **   : 2,2
    // ***  : 3,3
    // **** : 4,4
    // *****: 5,5

    // row 1: i=1 , j<=1 
    // row 2 : i=2, j<=2 
    // row 3 : i=3 , j<=3
    // row 4: i=4 , j<=4 



    // for(i=1;i<=5;i++){
    //     for(j=1;j<=i;j++){
    //         document.write("* ") 
    //     }
    //     document.write("<br/>")
    // }



    // outer loop 
    // j=1
    // while(j<=5){
    //     // inner loop : 
    //     i=1
    //     while(i<=j){
    //         document.write("* ") // *****
    //         i++
    //     }
    //     document.write("<br/>")
    //     j++
    // }


    // j=1
    // do{
    //     i=1
    //     do{
    //         document.write("* ") // *****
    //         i++
    //     }while(i<=j)
    //     document.write("<br/>")
    //     j++
    // }while(j<=5)




    // Q 5: 
    // ****** :1,5
    // *****  :2,4
    // ***   : 3,3
    // **   : 4,2
    // *    : 5,1



    // for(i=1;i<=5;i++){
    //     // inner loop : 5,4,3,2,1
    //     for(j=5;j>=i;j--){
    //         document.write("* ")
    //     }
    //     document.write("<br/>")
    // }


    // i=5
    // while(i>=1){
    //     j=1
    //     while(j<=i){
    //         document.write("* ")
    //         j++
    //     }
    //     document.write("<br/>")
    //     i--
    // }


    // 5*3 : 15 

    // Q 6: 
    //     *
    //    **
    //   ***
    //  ****
    // *****
