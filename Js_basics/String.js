//to concant
// temp ="Rohiy";
// atak ="Soni";
// console.log(temp +" " + atak);

//Modernway to concate the js 
// console.log(`This is Modern Way to Concate the string ${temp}        ${atak}`);

const strings ="Rohit";
console.log(typeof(strings)); //output string

let temp =new String("Rohit Soni");
console.log(temp);
console.log(temp[0]); //R
console.log(temp.__proto__); //{}
console.log(temp.length); //10
console.log(temp.toUpperCase()); //ROHIT SONI ////NOT a change in original string
console.log(temp.charAt(0)); //R
console.log(temp.indexOf('R')) ; //0 position


let another  ="Rohit_Soni";
const newstring =another.substring(0,3); //ROh
console.log(newstring);//Roh


console.log(another.slice(1,4)); // output is ohi from 1 index to 3 index
console.log(another.slice(-8,5)); ///output is hit

//the -8 means it is coutnt 8 from end side   so it pickup characters from 8 index from end to 4th index from start

//if we remove space in string the trim method is used
let space_consistent  ="            My   name    is    Rohit   Soni         ";
console.log(space_consistent.trim()) ; // it remove the space from starting and ending
console.log(space_consistent.trimEnd()); //it is remove the space from  the end
console.log(space_consistent.trimStart());//it remove the space from the start

const url = "https://www.google.com"
console.log(url.replace('https://','time_pass'));
console.log(url); //https://www.google.com"outpt

// url.includes("https");
console.log(url.includes("https")) //output is true