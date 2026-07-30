


// control statment : the control statment is used to perfrom different action based on different statment . 

    // 1. if : if is specified a block of code to be excute if the condition is true . 
        // syntex : 
        // if(condition){
        //     // code to be excute . 
        // }


        // let mynum=prompt("enter a number")
        // if(mynum<50){
        //     document.write("your number is less the 50")
        // }


    // 2. else : else is specified a block of code to be excute if the same condition is false . 
        // syntex : 
        // if(condition){
        //     // code to be excute / statment 2 
        // }
        // else{
        //     code to be excute / statment 2
        // }



        // let mynum=prompt("enter a number")
        // if(mynum<50){
        //     document.write("your number is less the 50")
        // }
        // else{
        //     document.write("your number is greater the 50")
        // }



    // 3. else if : else if is pecified a block of code to be excute if we check a new condition after the first condition is false .
    
        // syntex : 
        // if(condition){
        //     // code to be excute / statment 1
        // }
        // else if(condition){
        //     // code to be excute / statment 2
        // }
        // else{
        //     code to be excute / statment 3
        // }



        // let mynum=prompt("enter a number")
        // if(mynum<50){
        //     document.write("your number is less the 50")
        // }
        // else if(mynum==50){
        //     document.write("your number is equal to 50")
        // }
        // else if (mynum==100){
        //     document.write("your number is equal to 100")
        // }
        // else{
        //     document.write("your number is greater the 50")
        // }


    // Q 1: 
    // let num1=prompt("enter first number")
    // let num2=prompt("enter second number")
    // if(num1>num2){
    //     document.write("first number is maximum ",num1)
    // }
    // else{
    //     document.write("second number is maximum ",num2)
    // }


    // Q 17 : 
    // let a=prompt("enter a week number(1-7):")
    // if(a==1){
    //     document.write("monday")
    // }
    // else if(a==2){
    //     document.write("tusday")
    // }
    // else if(a==3){
    //     document.write("wednesday")
    // }
    // else{
    //     document.write("not a week number")
    // }


    // Q 19 : 
    // let a=parseInt(prompt("Enter First Angle:"))
    // let b=parseInt(prompt("Enter second Angle:"))
    // let c=parseInt(prompt("Enter third Angle:"))
    // if(a+b+c==180 && a>0 && b>0 && c>0){
    //     document.write("valid")
    // }
    // else{
    //     document.write("not valid")
    // }


    // Q 22 : 
    // 1m = 100cm 
    // cm= 1/100 m 

    // 1km = 1000* 100  cm 
    // cm = 1/100000 km 

    // let a=prompt("enter length in CM: ")
    // let m= a/100 
    // let km = 1/100000
    // document.write("M: ",m,"M", "<br/>")
    // document.write("KM: ",km,"KM")




    // ternary operators : the ternary operator is used to shorthand of if & else statment . 

        // syntex : 
        // (condition)? statment1 : statment2 

        let a=prompt("Enter A Number: ")
        let result=(a<50) ? "Less then 50" : "greater then 50"
        document.write(result)

