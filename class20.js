


    async function getdata(){
        let apidata=await fetch("https://dummyjson.com/products")
        let result=await apidata.json()
        let myproducts=result.products

        let allproducts=document.getElementById("allproducts")

        myproducts.map((item)=>{
           
            let box1=document.createElement("div")
            box1.id="box1"

            let product_image=document.createElement("img")
            product_image.src=item.thumbnail


            let product_name=document.createElement("h3")
            product_name.innerHTML=item.title

            let product_price=document.createElement("p")
            product_price.innerHTML="$ "+item.price

            let product_category=document.createElement("p")
            product_category.innerHTML=item.category

            let btn1=document.createElement("button")
            btn1.innerHTML="Add To Cart"


            box1.appendChild(product_image)
            box1.appendChild(product_category)
            box1.appendChild(product_name)
            box1.appendChild(product_price)
            box1.appendChild(btn1)
            allproducts.appendChild(box1)

        })

    }
    getdata()





