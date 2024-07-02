/ var arr = ["abc","123"] // collection of data

// var obj = {
//     fname: "Saad",
//     lname: "Ali",
//     age: 24,
//     roll_no: "CSC-204",
//     bool: true,
//     arr: ['expertizo','faraz','smit'],

//     foo: function(){
//         return this.fname + this.age
//     }

//     // pri: function(){
//     //     return obj.fname + obj.lname
//     // }


//     // sum: function(){
//     //     alert('hello world')
//     // }
// }

// console.log(obj.foo())

// console.log(obj.pri())




// obj.sum()


// for(var key in obj.arr){
//     document.write(obj.arr[key]+"<br>")
// }


// document.write(obj.arr)

// console.log(obj)


// document.write(obj.fname)

// for(var key in obj){
//     document.write(${key} : ${obj[key]} <br>)
// }


// fnam… "Saad"
// lname: "Ali"

// for(var key in obj){
//     document.write(obj[key]+"<br>")
// }

// for(var value in obj){
//     document.write(value+"<br>")
// }


// for in --> object
// document.write(obj)
// console.log(obj)

// var arr = [
//     {
//         ques: "what is the sum of 2 + 2",
//         opt1: '4',
//         opt2: '12',
//         opt3: '9',
//         correctOption: '4'
//     },
//     {
//         ques: "what is the sum of 10 + 10",
//         opt1: '40',
//         opt2: '20',
//         opt3: '90',
//         correctOption: '20'
//     }
// ]

// document.write(arr[1].ques)



// var products = [
//     {
//         p_id: '01',
//         p_name: 'Samsung',
//         p_price: '85000',
//         p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a057fzshpkd/gallery/pk-galaxy-a05s-sm-a057-sm-a057fzshpkd-539158417?$ORIGIN_PNG$?$450_450_PNG$'
//     },
//     {
//         p_id: '02',
//         p_name: 'iPhone',
//         p_price: '185000',
//         p_img: 'https://images.priceoye.pk/apple-iphone-13-pro-pakistan-priceoye-wb6qy.jpg'
//     },
//     {
//         p_id: '03',
//         p_name: 'Motorola',
//         p_price: '15000',
//         p_img: 'https://images.priceoye.pk/motorola-moto-one-macro-pakistan-priceoye-sudw1.jpg'
//     },
// ]


// var showProducts = document.getElementById('showProducts')

// function show1(){
//     for(var i=0; i<products.length; i++){
//         var getProducts = products[i]
        
//         var pid = document.createElement('p')
//         var ptext = document.createTextNode(getProducts.p_id)
//         pid.appendChild(ptext)
//         showProducts.appendChild(pid)

        
//         var pname = document.createElement('p')
//         var ptext = document.createTextNode(getProducts.p_name)
//         pname.appendChild(ptext)
//         showProducts.appendChild(pname)

        
//         var pprice = document.createElement('p')
//         var ptext = document.createTextNode(getProducts.p_price)
//         pprice.appendChild(ptext)
//         showProducts.appendChild(pprice)
        
//         var pimg = document.createElement('img')
//         pimg.setAttribute('src',${getProducts.p_img})
//         pimg.setAttribute('width','200')
//         showProducts.appendChild(pimg)

//     }
// }