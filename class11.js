

// students : 

// let myallstudents=[
//     {
//         students_name:"Ravi",
//         coursedetails:{
//             course_name:"Web Development",
//             course_duration:"5-6 Months",
//             course_fee:25000       
//         },
//         email:"ravi@gmal.com",
//         parent_information:{
//             parents_name:"xyz",
//             parents_email:"xyz@gmail.com",
//             contact:9876543211
//         }
//     },
//     {
//         students_name:"Ravi",
//         coursedetails:{
//             course_name:"Web Development",
//             course_duration:"5-6 Months",
//             course_fee:25000       
//         },
//         email:"ravi@gmal.com",
//         parent_information:{
//             parents_name:"xyz",
//             parents_email:"xyz@gmail.com",
//             contact:9876543211
//         }
//     },
//     {
//         students_name:"Ravi",
//         coursedetails:{
//             course_name:"Web Development",
//             course_duration:"5-6 Months",
//             course_fee:25000       
//         },
//         email:"ravi@gmal.com",
//         parent_information:{
//             parents_name:"xyz",
//             parents_email:"xyz@gmail.com",
//             contact:9876543211
//         }
//     },
//     {
//         students_name:"Ravi",
//         coursedetails:{
//             course_name:"Web Development",
//             course_duration:"5-6 Months",
//             course_fee:25000       
//         },
//         email:"ravi@gmal.com",
//         parent_information:{
//             parents_name:"xyz",
//             parents_email:"xyz@gmail.com",
//             contact:9876543211
//         }
//     }
// ]



// map method/ function : the map method/function is used in an array inside the map method use the call back function . that return each element of an array . 
// Array.map((parameter)=>{
//     return value
// })

// let marks=[67,78,89,90,45,67,89,65]
// marks.map((data)=>{
//     console.log(data) // each array element 
// })


// let student=[
//     {
//         name:"xyz",
//         course:"dkjh"
//     },
//     {
//         name:"abc",
//         course:"abc"
//     }
// ]

// student.map((item)=>{
//     console.log("student name:",item.name)
//     console.log("student course:",item.course)
// })



// json 

let allstudents = {
    mystudentsdata: [
        {
            "students_name": "Ravi Kumar",
            "coursedetails": {
                "course_name": "Web Development",
                "course_duration": "5-6 Months",
                "course_fee": 25000
            },
            "email": "ravi@gmail.com",
            "parent_information": {
                "parents_name": "Rajesh Kumar",
                "parents_email": "rajesh@gmail.com",
                "contact": 9876543211
            }
        },
        {
            "students_name": "Anjali Sharma",
            "coursedetails": {
                "course_name": "MERN Stack Development",
                "course_duration": "6 Months",
                "course_fee": 30000
            },
            "email": "anjali@gmail.com",
            "parent_information": {
                "parents_name": "Suresh Sharma",
                "parents_email": "suresh@gmail.com",
                "contact": 9876543212
            }
        },
        {
            "students_name": "Mohit Singh",
            "coursedetails": {
                "course_name": "React JS",
                "course_duration": "3 Months",
                "course_fee": 15000
            },
            "email": "mohit@gmail.com",
            "parent_information": {
                "parents_name": "Rakesh Singh",
                "parents_email": "rakesh@gmail.com",
                "contact": 9876543213
            }
        },
        {
            "students_name": "Priya Verma",
            "coursedetails": {
                "course_name": "Python Development",
                "course_duration": "4 Months",
                "course_fee": 22000
            },
            "email": "priya@gmail.com",
            "parent_information": {
                "parents_name": "Mahesh Verma",
                "parents_email": "mahesh@gmail.com",
                "contact": 9876543214
            }
        },
        {
            "students_name": "Aman Gupta",
            "coursedetails": {
                "course_name": "Java Development",
                "course_duration": "5 Months",
                "course_fee": 28000
            },
            "email": "aman@gmail.com",
            "parent_information": {
                "parents_name": "Dinesh Gupta",
                "parents_email": "dinesh@gmail.com",
                "contact": 9876543215
            }
        },
        {
            "students_name": "Neha Joshi",
            "coursedetails": {
                "course_name": "UI/UX Design",
                "course_duration": "3 Months",
                "course_fee": 18000
            },
            "email": "neha@gmail.com",
            "parent_information": {
                "parents_name": "Vijay Joshi",
                "parents_email": "vijay@gmail.com",
                "contact": 9876543216
            }
        },
        {
            "students_name": "Rahul Meena",
            "coursedetails": {
                "course_name": "Node JS",
                "course_duration": "3 Months",
                "course_fee": 16000
            },
            "email": "rahul@gmail.com",
            "parent_information": {
                "parents_name": "Kailash Meena",
                "parents_email": "kailash@gmail.com",
                "contact": 9876543217
            }
        },
        {
            "students_name": "Sneha Patel",
            "coursedetails": {
                "course_name": "Data Science",
                "course_duration": "6 Months",
                "course_fee": 35000
            },
            "email": "sneha@gmail.com",
            "parent_information": {
                "parents_name": "Prakash Patel",
                "parents_email": "prakash@gmail.com",
                "contact": 9876543218
            }
        },
        {
            "students_name": "Vikas Sharma",
            "coursedetails": {
                "course_name": "C++ Programming",
                "course_duration": "3 Months",
                "course_fee": 12000
            },
            "email": "vikas@gmail.com",
            "parent_information": {
                "parents_name": "Ashok Sharma",
                "parents_email": "ashok@gmail.com",
                "contact": 9876543219
            }
        },
        {
            "students_name": "Pooja Saini",
            "coursedetails": {
                "course_name": "React Native",
                "course_duration": "4 Months",
                "course_fee": 24000
            },
            "email": "pooja@gmail.com",
            "parent_information": {
                "parents_name": "Ramesh Saini",
                "parents_email": "ramesh@gmail.com",
                "contact": 9876543220
            }
        }
    ]
}


let newarray=allstudents.mystudentsdata



// console.log(newarray[0])


// newarray.map((data) => {
//     console.log(data.students_name)
//     console.log(data.email)
//     console.log(data.coursedetails.course_name)
//     console.log(data.parent_information)
// })


// filter :
   let filterdata= newarray.filter(data=> data.coursedetails.course_name=="Web Development")
   console.log(filterdata)
