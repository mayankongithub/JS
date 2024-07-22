// keyy = Symbol("me")

// let = student = {
//     "name" : "mayank sharma",
//     nickname : "monu",
//     email : "mayank1909.be22@chitkara.edu.in",
//     mobileno : 9649356720,
//     [keyy] : "me"
// }
// // THIS ARE THE TWO WAYS TO PRINT THE VARIABLE OF THE OBJECT
// console.log(typeof student[keyy]);  // BEST WAY
// console.log(student["email"]); 
// console.log(student.email);


// // Object.freeze(student);// IT ENABLE US TO CHANGE THE VARIABLE CONTENT
// student.marks = 85;
// console.log(student.marks);

// student.greeting = function(){
//     console.log("Welcome!!");
// }

// student.greeting2 = function(){
//     console.log(`Welcome!! ${student["name"]}`);
//     console.log(`Welcome!! ${this.nickname}`);
// }
// console.log(student.greeting2());

// console.log(student);


// user = new Object()
// user.id = 19;
// user.name = "mayank"
// console.log(user);

// obj1 = {
//     1 : 'a',
//     2 : 'b',
//     3 : 'c'
// }
// obj2 = {
//     4 : 'd',
//     5 : 'e',
//     6 : 'f'
// }
// obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(obj1));
// console.log(Object.entries(obj1));
// obj1 = {
//     nameofthestudent : "mayank"
// }

// let {nameofthestudent : name} = obj1// DESTRUCTURING
// console.log(name);


// user = {
//     name : "mayank",
//     greeting : function(){
//         console.log(`Hey ${this.name} Welcome to V.S Code`);
//     }
// }
// user.greeting()



obj = {
    name : function(){
        console.log(this);
    } 
}
obj.name()




//  apply
//  call
//  bind