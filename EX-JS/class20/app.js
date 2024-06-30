// const obj = {
//     fname : "Sheikh Abdullah",
//     lastname :"Ahmed",

// }
// console.log (obj.fname)
// let obj = prompt ("Enter any word")
// let check = ''
// if (obj == check){
//     obj+= check
// }



// let user = prompt ("Enter any word")
// let check  = ''
// for (let i = user.length-1; i >= 0; i--) {
//     check += user[i]
// }
// if (user == check) {
//     alert("word is solid")
// }
// else {
//     alert("word is unsolid")

// }


// let user = prompt("enter any word")
// let check = ''
// for (let i = user.length-1; i>=0; i--) {
//     check+=user[i]
// } 
// if( user == check ) {
//     alert('word are solid')
// }
// else {
//     alert('word are unsolid')

// }



// function factorail (n) {
//     let num = 1
//     for (let i = 2; i<= n ; i++) {
//         num*=8
//     }
//     return num
// }
// console.log(factorail (9))

// function factorail (n) {
//     let num = 1
//     for (let i = 2; i<= n; i++) {
//         num*=2
//     }
//     return num
// }

// console.log (factorail (5))
// ek thar ka operator ho ta hai



// const obj = {
//     p_id : '09',
//     p_name : "Sheiks",
//     p_price : "3000"
// }
// const obj2 = {
//     ...obj,
//     p_des :"mobile phones"
// }
// console.log (obj2)
// const obj = {
//     p_id : "30",
//     p_name : "Sheo=ikh Abdullah",
//     P_model : "2010"
// }
// const obj2 = {
//     // ...obj, important line 
//     p_price : "300"

// } 
// console.log(obj2)
// // alert("obj")


// function factorail (n) {
//     let num = 1
//     for (let i = 2; i<=n;i++) {
//         num*=2
//     }
//     return num
// }

// console.log (factorail (6))

// let user = prompt("enter any word")
// let check  = ''
// for (let i= user.length-1; i>=0; i--) {
//     check += user[i]
// }
// if(user == check ) {
//     alert("word are solid")
// }
// else{
//     alert("word are unsolid")

// }
// ... is ka matlab ha ek sath
// let friuts = ["apply", "banana", "peach"]
// let sabzi = ["poodina", "kheeraa", "Aloo"]
// let finalarry = [...friuts,...sabzi]
// document.write(finalarry)

// map new arry return karta hai
// or foreach new arry return nhi karta hai




// let friuts = ["Apply", "Mango", "Peach", "Banana"]
// let sabzi = ["alloo","temator", "cake"]
// let finalarry = [...friuts,...sabzi]
// let newarry = finalarry.map(function(data){
//     return `${data}`
// })
// console.log (newarry)

// for(var i=0; i<finalArray.length; i++){
//         document.write(finalArray[i]+"<br>")
//      }

// let are = [2,3,4,5,6,70,8,9,20]
// let ans = are.filter(function (data, index){
//     console.log (data)
//     return data > 50
// }) 

// let ans1= are.map(function (data){
//     return data*2
// })
// console.log (are)
// console.log (ans1)



// let arr = [2, 4, 6, 8, 10, 10, 100, 20, 45, 97, 40]

// let ans = arr.filter(function (data, index) {
//     console.log(data)
//     return data > 50
// })
// let ans1 = arr.map(function(data){
//     return data * 2
// })
// console.log(arr)

// let promise = new Promise(function (res , rej) {
//     let treat = "zinger"
//     if (treat == "zinger") {
//         res ("pher thk ha")
//     }
//     else {
//         rej ("karway ho tum")
//     }
// })
// console.log (promise)

// promise .then (function (data) {
//     console.log (data)


// })

// promise .catch (function (data) {
//     console.log (data)
// })

// let promise = new Promise (function (res, rej) {
//     let treat = "undey  burger"
//     if (treat == "undey wala burger") {
//         console.log ("pher thkha")
//     }
//     else {
//         console.log ("karway")
//     }
// })

// console.log (promise) 

// promise.then (function (data) {
//     console.log(data)
// })
// promise .catch (function (data ) {
//     console.log (data)
// })

// let promise = new Promise (function (res , rej) {
//     let treat = "burger"
//     if (treat == "burger" ){
//         res("burger")
//     }
//     else {
//         rej("kutay")
//     }
// })
// console.log(promise)

// promise.then (function (data) {
//     console.log(data)
// })
// promise .catch (function (data) {
//     console.log(data)
// })