"use strict";
//  Arrays
let array1 = [5, 6, 7, 8, 9]; //correct syntax
array1.pop();
array1.shift();
console.log(array1[0]); //correct syntax
console.log(array1[1]); //correct syntax
console.log(array1[2]); //correct syntax
let array2 = [1, 2, 3]; //alternative correct syntax
console.log(array2);
let array3 = []; //correct syntax to define an empty array
console.log(array3);
// let array4: number[] = new number[2];//error
//                      0 , 1 , 2 , 3 , 4 , 5
let array5 = [18, 83, 94, 99, 44, 77];
// array5.push(1234);//dynamically adding
// array5.unshift(71)
// array5.splice(2,0, 33, 196)
// console.log(array5)
let a = array5.slice(3, 4);
console.log(a);
