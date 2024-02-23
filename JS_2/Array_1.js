//let begin the array in js

const my_arr =[0,1,2,3,4,5,6];
//resizable array
//it is access by index
//index start from 0
//array make shallow copy
//reference type
const new_way =new Array(1,2,3,4,5,6,7);
console.log(new_way); //1 2 3 4 5 6 7 

new_way.push(100);
console.log(new_way);

new_way.pop();
console.log(new_way);


new_way.unshift(1,100); //at 1 index 100 will arrive
console.log(new_way);
new_way.shift();//delet first front element of the array
console.log(new_way);

let new_array =new_way.join(". ");  
console.log(new_array); //100.1.2.3.4.5.6.7
console.log(typeof new_array) //STRING


//slice and splice
console.log("Let Understand the Slice And Splice");
let my =[100,200,400,600,700,800,900,1100];;
console.log("A",my);
my.slice(1,4);  //this wiill not change in original array
console.log(my.slice(1,4)); //200 400 600 print elements from 1st indext to 3rd index
console.log("B",my);
my.splice(1,4);
console.log("C",my); //100 800 900 1100 remove the  part of array fro 1 to 4 th index in original array