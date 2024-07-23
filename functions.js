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

ab = (a,b) => {
    var c = 10;
    console.log(arguments);
}

ab(1,2);

