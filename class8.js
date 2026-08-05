

// string : string is used to stote the text . 

    // how to store the string in a variable : to store the string , declare a variable and then store the text inside the single and double quotes . 

    // let mystring='groot academy'
    // let mystring2="groot academy"

    // document.write(mystring ,"<br/>")
    // document.write(mystring2)



    // how to access the string elements : to access the string elements by using the index number and the string index start with 0 . 
    // let a="hello js"
    // document.write(a[0], "<br/>") // h 
    // document.write(a[1], "<br/>") // e
    // document.write(a[2]) // l  


    
    // special char :  
    // let a="my name is \"groot academy.\" "
    // document.write(a)

    // let a='it\'s groot'
    // document.write(a) 

    // let a="my name is groot academy\\ groot software"
    // document.write(a)


    // let a=`Hello
    //         groot 
    //         academy`
        
    // document.write(a)



    // let year=2026 
    // let name="ravi"

    // let mystring=`my name is ${name}. and year is ${year}`
    // document.write(mystring)



    // let a=prompt("enter first name:")
    // let b=prompt("enter last name:")
    // let mystring=`your full name is ${a+b}.`
    // document.write(mystring)


    // string function : 
    // 1. length: the length is used to get/access the number of length in a string . 
    // let a="groot academy."
    // let b=a.length 
    // document.write("string length is: ",b)



    // 2. at() : the at function is used to access the string element by index number .  
    // let a="groot academy."
    // let b=a.at(4) 
    // document.write(b)


    // 3. charAt() : the charAt function is used to access the string element by index number .  
    // let a="groot academy."
    // let b=a.charAt(2) 
    // document.write(b)


    // 4. slice() : used to select the string elements . 
        // slice(start,end) // end not count

    // let a="groot academy."
    // let b=a.slice(1,8)  // 1,7 
    // document.write(b)


    // 5. substring : similar to slice function . 



    // 6. touppercase() : the touppercase function is used to convert the uppercase letter of a string .
    
    // let a="Groot academy"
    // let b=a.toUpperCase()
    // document.write(b)

    // 7. tolowercase() : 

    // let a="GROOT ACADEMY"
    // let b=a.toLowerCase()
    // document.write(b)


    // 8. trim(): the trim method is used to remove the extra space from both . 

    // let a="      Groot academy   "
    // let newstr=a.trim()
    // let b=newstr.length 
    // document.write(a)


    // 9. trimstart() : 

    // let a="      Groot academy   "
    // let newstr=a.trimStart()
    // let b=newstr.length 
    // document.write(b)

    // 10 : trimend() : 
    // let a="      Groot academy   "
    // let newstr=a.trimEnd()
    // let b=newstr.length 
    // document.write(b)

    // 11. indexof : the indexof method is used to access the index number . 
    // let a="jatin"
    // let b=a.indexOf("j")
    // document.write(b)



    // 12. includes :the includes function is used to check the letter present or not . 
    
    // let a="Groot academy"
    // let b=a.includes("root")
    // document.write(b)

    // 13. search() : the search method is used to access the index number .
    // let a="jatin"
    // let b=a.search("i")
    // document.write(b) 


    // 14. startwith() : 

    // let a="Groot academy"
    // let b=a.startsWith("oot")
    // document.write(b)

    // 15. endswith :
    // let a="Groot academy"
    // let b=a.endsWith("mr")
    // document.write(b)



    // looping : 
    // let a="groot academy sdkjhfkjfhjkh"
    // let lastindex=a.length-1
    // for(i=0;i<=lastindex;i++){
    //     document.write(a[i],"<br/>")
    // }

