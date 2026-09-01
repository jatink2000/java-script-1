
// java script promises : a promises in java script is like a container for a future value . it is a way of saying , i dont have any value right now but i will have it later .

// a promises can be in three states : 
// 1. pending : the promises is waiting for something to finish . the data to load from a website . 

// 2. fulfiled : the promises has been complete success . the data you were waiting now it avaliable .  

// 3. rejected : the promises has failed . maybe there was a problem like the server not response . 


// syntex : 
// Promise (function(resolve,reject){
// })

let a = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = true
        if (data) {
            resolve("data avaliable..")
        }
        else {
            reject("data not avaliable..")
        }
    }, 5000)

})

// console.log(a)
// a.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


// async , await : 

    // console.log(a)
    // async function getdata(){
    //     let result=await a
    //     console.log(result)
    // }
    // getdata()


