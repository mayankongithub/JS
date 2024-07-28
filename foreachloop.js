
// coding = ['c++','python','ruby','js','java']
// coding.forEach(function(i){
//     console.log(i);
// })


 
// coding = ['c++','python','ruby','js','java']
// coding.forEach(function(i,index,arr){
//     console.log(i," ",index," ",arr);
// })


// arr = [1,2,3,4,5,6,7,8,9,10]
// let store = arr.filter((num) => {
//     return num > 4;
// })

// console.log(store );

// arr = [1,2,3,4,5,6,7,8,9,10]
// let store = arr.map((val) =>  val + 10 )
// console.log(store);




// arr = [1,2,3,4,5,6,7,8,9,10]
// let store = []
// store = arr.forEach((val) => {
//     console.log(val + 10);
// })


//reduce
num = [1,2,3,4,5]
sum = num.reduce((accu,currval) => {
    return accu+currval
},0)

console.log(sum);