console.log("Lets Begin the Data type Summary");
//there is two types of data type
//7 types of primitive
//string NUmber Bollean NULL undefind symbol
//symbol is used to make a  unique component
//BigInt

//Refernce type  (Non -Primitve)
//arrays objects  Functions

//JS is dynamic typed language or static -typed language?
//JS is a dynamic typed language

// const score =100;
// const scoreValue =100.3;
// const isLoggedin =false;
// const OutsideTemp =NULL;
// let userEmail ;
const  id =Symbol('123'); //returrn a new unique symbol value
const new_id =Symbol('123');
console.log(id);   //output Symbol(123)
console.log(new_id);//output Symbol(123)

console.log(id===new_id); //output falsed


const bigNumber ='12222222222222222222222';
console.log(bigNumber);

const heros =["shaktiman", "naagraj", "doga"];

console.log(heros);

let my_first_obj ={
    name:'rohit',
    age:22
}
console.log(my_first_obj);

 let my_first_function = function (){
    console.log("Helo Rohit");
 }

my_first_function();

console.log(typeof(heros));
console.log(typeof(my_first_obj))