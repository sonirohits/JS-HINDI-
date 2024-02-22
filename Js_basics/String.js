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
