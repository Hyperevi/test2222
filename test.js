// var map = function(arr) {
//     return arr+1;
// };

// let arr=[1,2,3]
// let newarr=[];
// arr.forEach(
//     function (element){
//        let ele = map(element);
//        newarr.push(ele);
//     }
// );

// // console.log(newarr);

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function(arr, fn) {
//     const transformedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         transformedArr[i] = fn(arr[i], i);
//     }
//     return transformedArr;
// };
// let arr=[4,5,6]

// console.log(map(arr));

// var map = function(arr,fn) {
//     for(let i=0;i<arr.length;i++){
//         newarr.push(fn(arr[i],i))
//     }
//   return newarr;
// };

// let arr=[8,10,20]
// function fn(arr){
//     console.log("fn function called",arr);
//     return arr+1
// }

// let newarr=[];

// map(arr,fn);
// console.log("answer----")
// console.log(newarr)

// let str = "how are you"
// let sentense="";
// str.split(" ").forEach((word)=>{
//     // console.log(word.split("").reverse("").join(""));
//     // .forEach((letter)=>{
//     //   console.log(letter);
//     // })
//     sentense=sentense+word.split("").reverse("").join("")+" "
// })
// console.log(str);
// console.log(sentense);

// --------------------------------------------------------

// let str = "how are you"
// let sentense="";
// console.log(str);
// sentense=str.split(" ");
// console.log("After split sentence =",sentense);

// let reversedsent = sentense.map((word)=>{
// //   console.log(word.split("").reverse(""));
// console.log("After split word =",word.split(""));
// console.log("After reverse word =",word.split("").reverse(""));
// console.log("After join word =",word.split("").reverse("").join(""));
//  return word.split("").reverse("").join("")

// })
// console.log(reversedsent.join(" "));

// --------------------------------------------------------

// let duplicate =(element)=>{
// return element.concat(element)
// }

// let arr= [1,2,3]

// let newarr=duplicate(arr);
// console.log(newarr);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// // const reversed = months.toReversed();
// const reversed = months.reverse();

// console.log(reversed);
// console.log(months);

// function convert(str){
//     let newstr=str.split(" ").forEach((word)=>{
//         console.log(word.split(""));
//         let upper=word.split("")[0].toUpperCase()
//         console.log(upper);
//     })
// }

// let str="how are you";
// console.log(convert(str));

// ------------------------------------------------------------

// function convert(str){
//     let newstr=str.split(" ");
//     let helo=newstr.map((word)=>{
//         let upper=word.split("");
//        upper = upper[0].toUpperCase() + word.slice(1)
//         return upper
//     })
//     return helo.join(" ");
// }

// let str="how are you";
// console.log(convert(str));

// ------------------------------------------------------------
// function count(str) {
//     let obj={};
//     str.split("").forEach((element) => {
//         if(obj.hasOwnProperty(element)===false){
//             obj[element]=1;
//         }
//         else{
//             obj[element]=obj[element]+1
//         }
//     });
//     console.log(obj);
// }

// count("apple");
// ------------------------------------------------------------
// function clone(...arr) {
//     console.log(...arr);
//     return arr;
// }
// let newarr=clone([1,2,3,4])
// console.log(newarr);
// ------------------------------------------------------------
    // let arr=[{name : "shivam",gender : "male"},
    //     {name : "helo",gender : "female"},
    //     {name : "vxfx",gender : "hlw"},
    //     {name : "hhwv",gender : "male"},
    //     {name : "cccc",gender : "helo"},
    // ]
    // let fileteredarr=arr.filter((element)=>{
    //     if(element.gender==="male"){
    //         return element
    //     }
    // })
    // console.log(fileteredarr);
//    let newarr= [];
//    arr.forEach((element,index) => {
//         // if(element.gender!=="male"){
//         //             // newarr.push(element)
//         //             arr.splice(index,1)
//         //            index--
//         //         }
//                 // else{
//                 //     // let index = arr.indexOf(element)
//                 //     // console.log("this is index" ,index);
//                 //    arr.splice(index,1)
//                 //    index--
//                 // }
//                 for(let i=0;i<arr.length;i++){
//                     if(arr[i].gender!=="male"){
//                         arr.splice(i,1)
//                         index--
//                     }
//                 }
//     });
//     console.log("New array=",newarr);
//     console.log("old array=",arr);
// ------------------------------------------------------------
// function print(arg,n=1) {
//     for(let i=0;i<n;i++){

//         console.log(arg[i]);
//     }
// }
// print([1,2,3,4,5,6],4)
// ------------------------------------------------------------
// let obj = {
//     name :"shivam",
//     lastname : "dixit"
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// ------------------------------------------------------------
// function shuffel(arr) {
//     let index = arr.length;
//    do{
//     index--;
//     let randomnum = Math.floor(Math.random() * arr.length);
//     console.log("This is randomnumber = ",randomnum);
//     let temp;
//     temp = arr[index];
//     arr[index]=arr[randomnum];
//     arr[randomnum]=temp;
//     console.log(arr);
//    }while(index!=0)
// return arr;
// }
// console.log(shuffel([1,2,3,4,5,6,7]));
// ------------------------------------------------------------
let arr = [1,2,32,45,6,8,9,51,4,1,2,3,5,6,32,45,8,9,6];
// let newarr=arr.filter((elem)=>{
//     return elem>4
// })

// let newarr=arr.map((elem)=>{
//      elem = elem + 1;
//     return elem
// })
// arr.slice(0,3);
// console.log(arr.slice(0,3));
// console.log(newarr);
// console.log(arr);
// let innititalvalue=0
// let ans = arr.reduce((accum,value)=>{
//     return accum+value
// },innititalvalue)
// console.log(ans);
// ------------------------------------------------------------------------
// function count(str) {
//     let obj={};
//     str.split("").forEach((element) => {
//         if(obj.hasOwnProperty(element)===false){
//            if(element!==" "){
//             obj[element]=1;
//            }
//         }
//         else{
//             obj[element]=obj[element]+1
//         }
//     });
//     console.log(obj);
// }

// count("apple how");
// ------------------------------------------------------------------------
let freq = {};
arr.forEach((elem)=>{
    // console.log(elem);
    if(freq.hasOwnProperty(elem)===true){
        freq[elem]=freq[elem]+1
    }
    else {
        freq[elem] = 1
    }
})
console.log(freq);
console.log(Object.values(freq));







