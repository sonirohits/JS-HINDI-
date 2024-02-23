const score =400;
console.log(score);

 const balance =new Number(100); //
 console.log(balance); //Number{100}
 console.log(balance.toString());//100

 console.log(balance.toFixed(2)); //100.00

 const otherNumber =23.8966;
//  console.log(otherNumber.toPrecision(3)); //23.9
//  console.log(otherNumber.toPrecision(4));  //23.90
//  console.log(otherNumber.toPrecision(5)); //23.897
//  console.log(otherNumber.toFixed(6));//23.8966
//  console.log(otherNumber.toPrecision(7)); //23.89660
//  console.log(otherNumber.toFixed(6)); //23.896600

//tofixed vs toprecison
//let num = 123.456789;
//console.log(num.toPrecision(4)); // Output: "123.5"
console.log("Differnece betwwen tofixed and toprecison");

let num =123.456789;
// console.log(num.toFixed(2));  //123.46
// console.log(num.toPrecision(4)); // Output: "123.5"
// console.log(num.toFixed(4)); //123.4568

// console.log(num.toPrecision(5)); //123.46
// console.log(num.toFixed(5)); //123.45679

//  const hundreds =100000;
//  console.log(hundreds.toLocaleString('en-In')); //1,00,000
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// +++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++

// console.log(Math);//object[Math]{}
// console.log(Math.abs(-2));  //2
// console.log(Math.round(4.3));  //4
// console.log(Math.round(4.6));//5
// //floor hamesa lowest valu lega
// //ceil hamesa highest  value lega

// console.log(Math.floor(4.1));//4
// console.log(Math.floor(4.9));//4

// console.log(Math.ceil(4.1));//5
// console.log(Math.ceil(4.9));//5

// generate the random value
console.log("Explore the Math.random ");
console.log(Math.random()); // generate values  between 0(inclusibve) to 1(not include the 1)
console.log(Math.floor(Math.random() * 10) +1); //this generate the  value from  1 to 10
//0 nahi aa sakta kyu ki chalo man lete he ki math.random() generate karta he 0 then multiply with 10 so  Math.floor(0) = 0 then we add 1 
//so  output is 1


min =10;
max=20;
console.log("generate value ");
//create a funciton that generate  the value  from 10 t0 20
console.log(Math.floor(Math.random() *(max-min)) + min ); //generate value from 10 to 19