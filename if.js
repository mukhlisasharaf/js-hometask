/* 1-masala
let num = +prompt("Son kiriting: ");

if (num++ >= 0) {
 console.log("Bu son musbat son");
} else {
 console.log("Bu son manfiy son");
};*/

/* 2-masala
let num = +prompt("son kiriting: ")
if (num > 0) {
 num++
console.log(num)
}else{
num -= 2
console.log(num) 
} */

/* 3-masala 
let num = +prompt(`Son kiriting: `)

if (num > 0) {
 num++
} else if(num < 0) {
    num -= 2
} else{
    num = 10
}
console.log(num) */

/* 4-masala 
let son1 = +prompt('butun son kiriting: ')
let son2 = +prompt("butun son kirit: ")
let musbat = 0

if (son1 >= 0) {
 musbat++
} else {
 musbat = 0
}

if (son2 >0) {
 musbat++
}else{
 musbat = 0
}

console.log(`musbat sonlar: ` + musbat)*/

/* 5-masala 
let son1 = +prompt('butun son kiriting: ')
let son2 = +prompt("yana kiriting: ")
let son3 = +prompt("yana(so'ngisi:): ")
let musbat = 0
let manfiy = 0

if (son1 > 0) {
 musbat++
} else{
 manfiy++
}
if (son2 < 0) {
 manfiy++
} else{
 musbat++
}
if (son3 > 0) {
 musbat++
} else{
 manfiy++
}
console.log("manfiy sonlar: " + manfiy)
console.log("musbat sonlar: " + musbat)
*/

/* 6-masala
let son1 = +prompt('Butun son kiriting: ')
let son2 = +prompt("Yana bir bor kiriting: ")

if (son1 > son2) {
 console.log("Eng katta raqam: " + son1)
}else{
 console.log("Eng katta raqam: " + son2)
}*/

/* 7-masala 
let raqam1 = +prompt("istalgan raqam kiriting: ")
let raqam2 = +prompt("istalgan raqam kiriting: ")

let tr = "eng kichigining tartib raqami: "

if (raqam1 < raqam2) {
 console.log("1-si eng kichkina edi")
}else {
 console.log("2-si eng kichkinasi edi")
} */ 

/* 8-masala 
let son1 = +prompt("raqam kiriting: ")
let son2 = +prompt("raqam kiriting: ")

if (son1 > son2) {
 console.log( "eng katta raqam " + son1)
 console.log("eng kichik raqam " + son2)
} else {
 console.log("eng katta raqam " + son2)
 console.log("eng kichik raqam " + son1)
}
*/

/* 9-masala  
let a = +prompt("son yozing: ")
let b = +prompt("son yozing: ")

if (a > b) { 
 a = 1
}else {
 a = 1
}

console.log(a + b)*/

/* 10-masala 
let a = +prompt("son yozing: ")
let b = +prompt("son kiriting: ")
let num = 0

if (a !== b) {
 num = a+b
} else {
 num = 0
}

console.log(num)*/

/* 11-masala 
let a = +prompt("son kiriting: ")
let b = +prompt("son kiriting: ")
let num = 0

if (a !== b) {
 if( a > b) {
  num = a
 } 
 if (a < b) {
  num = b
 }
} else {
 num = 0
}

console.log(num) */

/* 12-masala 
let a = +prompt('son kiriting: ')
let b = +prompt('son kiriting: ')
let c = +prompt('son kiriting: ')

let result = 0

if(a > b){
 result = b
} if (b > c) {
 result = c
} if (c > a) {
 result = a
}else{
 result = c
}

console.log(result)*/

/* 13-masala 
let a = +prompt("1-son: ")
let b = +prompt("2-son: ")
let c = +prompt("2-son: ")

let result1 = 0
let result2 = 0

if(a > b && a > c) {
result1 = a
} else if(b > a && b > c) {
result1 = b
} else {
result1 = c
}
if(a < b && a < c) {
result2 = a
} else if(b < a && b < c) {
result2 = b
} else {
result2 = c
}
if(a != result1 && a != result2) {
console.log(a)
} else if(b != result1 && b != result2) {
console.log(b)
} else {
console.log(c)
} */

/* 14-masala 
let a = +prompt('son kiriting: ')
let b = +prompt('son kiriting: ')
let c = +prompt('son kiriting: ')

let result1 = 0
let result2 = 0

if(a > b) {
 result1 = b
} if (b > c) {
 result1 = c
} if (c > a) {
 result1 = a
}else {
 result1 = c
}

if(a < b) {
 result2 = b
} if (b < c) {
 result2 = c
} if (c < a) {
 result2 = a
}else {
 result2 = c
}

console.log("eng kichik raqam: " + result1)
console.log("eng katta raqam: " + result2) */

/* 15-masala 
let a = +prompt('son kiriting: ')
let b = +prompt('son kiriting: ')
let c = +prompt('son kiriting: ') 
*/











