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


var map = function(arr,fn) {
    for(let i=0;i<arr.length;i++){
        newarr.push(fn(arr[i],i))
    }
  return newarr;
};

let arr=[8,10,20]
function fn(arr){
    console.log("fn function called",arr);
    return arr+1
}

let newarr=[];

map(arr,fn);
console.log("answer----")
console.log(newarr)

