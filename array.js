// myarr = [1,2,3,4]
// myarr.unshift(0); // put's the value at the starting of the array!!
// myarr.unshift(6);
// // console.log(myarr);
// myarr.shift();
// // console.log(myarr);


// arr = [1,2,3,4,5,6];
// console.log(typeof arr.join());


// arr1 = [1,2,3,4];
// arr2 = [5,6,7,8];
// all = arr1.concat(arr2);    // CONCAT HAS TO BE STORED IN NEW VARIABLE (CONCAT -> IT ADD TWO ARRAY)
// arr1 = all;
// console.log(arr1);


// SPREAD YE DO SE JADA ARRAY KO BI ADD KR SKTHA H BETTER THAN CANCAT SPREAD OPERATOR IS USED LIKE THIS => ...ANS ARRAY NAME  
// arr1 = [1,2,3,4,5];
// arr2 = [6,7,8,9,10];
// newarr = [...arr1,...arr2];
// console.log(newarr);


// FLAT => IT CONVERT 2-d,3-D ANY ARRAY TO 1-D ARRAY 
// arr1 = [1,2,[3,4,[5,6],[7,8]]];
// console.log(arr1.flat(Infinity));


// FROM HAAR EK WORD KE LETTER KO ALAG KR DETA H
// console.log(Array.from("mayank"));


// isArray -> IT CHECKS WHETHER THE ARRAY GIVEN IS ARRAY OR NOT
// arr1 = [1,2,3,4,5];
// console.log(Array.isArray(arr1));


// Array.of => YE VARIABLES KO ARRAY MAI CONVERT KR DETA H

let s1 = 100;
let s2 = 200;
let s3 = 300;
newarr = Array.of(s1,s2,s3);
console.log(newarr);

