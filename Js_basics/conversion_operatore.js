let score = 33;
// console.log(typeof(score)); // number
// console.log(typeof score);  //number

let temo ="33";
// console.log(typeof(score)); // string
// console.log(typeof score);  //string

let valueInnumber=Number(temo); 
// console.log(typeof(valueInnumber));  // number

// "33" => 33
//"33abc"=>NAN Not a Number  //but type is number
//true =>1 false =>0

// console.log("Lets Begin the game");
// let score1 ="33anc";
// let conversion_score1 =Number(score1);
// console.log(conversion_score1); // Output =?NAN
// console.log(typeof(conversion_score1)); //output=>number

// console.log("Lets begin another game 2");
let score2= undefined;
let conversion_score2 =Number(score2);
// console.log(conversion_score2); // Output =?NAN
// console.log(typeof(conversion_score2)); //output=>number

// console.log("Lets begin another game 3");
let score3= null;
let conversion_score3 =Number(score3);
// console.log(conversion_score3); // Output = 0
//console.log(typeof(conversion_score3)); //output=>number

console.log("Lets begin another game 4")
let isLoggedIn ="rohit";
let conversion_isLoggedIn  =Boolean(isLoggedIn);
// console.log(conversion_isLoggedIn); // Output = true
// console.log(typeof(conversion_isLoggedIn)); //output=>boolean

// console.log("Lets begin another game 5")
let is ="";
let conversion_is  =Boolean(is);
// console.log(conversion_is); // Output = false
// console.log(typeof(conversion_is)); //output=>boolean

//console.log("Lets begin another game 6")
let someNumber =33;

let string_someNumber = String(someNumber);
// console.log(string_someNumber); // output =>33
// console.log(typeof string_someNumber)// output=>string

// Operations in Javascript
// console.log(1+2);
// console.log(1 /2);
// console.log(1 %2);

// let str1 ="hello";
// let str2 =" Rohit";
// let str3 = str1 + str2;
// console.log(str3);  //Output : hello Rohit


console.log("1"+2) ;//output ;12
console.log(1 +"2"); //output :12
console.log("1" + 2+2);//output:122
console.log(1+2+"2");//output:32  //this is rule
 console.log(true);//output:true
 console.log(+true);//output:1


 let num1 =num2 =num3 =2+4;
console.log(num1); //6
console.log(num2);//6
console.log(num3)//6

//preincremnt and postincrement operatore
num1++; //num1 =num1 +1; post
++num1 //num1 =num1 + 1; pree
