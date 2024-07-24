// function add(a,b){
//     return a+b;
// }
// result = add(4,4)
// console.log(result);


// ARROW FUNCTION
// add = (a,b) => {
//     return a+b;
// }
// result = add(4,4)
// console.log(result);


// add(4,4)      // GIVE ERROR KYU KI PHELE CALL HUA H
// add = (a,b) => {
//     console.log(a+b);
// }




//   IMPLICIT FUNCTION

// add = a => a + 4
// console.log(add(4));

// add = (a,b) => a + b
// console.log(add(4,4));


// add = () => {
//     return ({username:"mayank"});
// }
// name = add()
// console.log(name);

// ab = (a,b) => {
//     var c = 10;
//     console.log(this);
//     return a+b;
// }

// ab(1,2);

// abc = function(){
//     console.log(this);
// }

// abc();
// console.log(this);

// ab = (a,b) => {
//     var c = 10;
//     console.log(arguments);
// }

// ab(1,2);

// console.log("start");

// setTimeout(() => {
//    console.log('timeout1'); 
// }, 1000);

// setTimeout(() => {
//     console.log('timeout2'); 
//  }, 500);
//  setTimeout(() => {
//     console.log('interval'); 
//  }, 300);
// console.log('end');

function fetchdata(callback,errorCallback){
    setTimeout(() => {
        const error = false;
        if(error){
            errorCallback("Error fetching data");
        }
        else{
            console.log("Data fetched from server");
            callback;
        }
    },2000);
}

function process(){
    console.log("Processing data");
}

function handel(error){
    console.error(error);
}
fetchdata(process,handel)