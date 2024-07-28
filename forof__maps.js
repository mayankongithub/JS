// for of loop is used for array and maps 


// for in loop for Objects and array too per it works like for loop only if we want to print value use v[i]







// arr = [1,2,3,4,5]
// for(let num of arr){
//     console.log(num);
// }

// mp = new Map();
// mp.set('in',"india")
// mp.set('au',"australia")
// mp.set('pak',"pakistan")
// // console.log(mp);

// for([key,value] of mp){
//     console.log(key,':-',value);
// }


let myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(key in myobject){
    console.log(`${key} and ${myobject[key]}`);
}