// //for lopp
// let arr =[110,210,310,410,510];
// for(let i=1;i<arr.length;i++){
//     console.log(arr[i]);
// }
///high order lops
// const arr =[1,2,3,40,5];
// // for (const it of arr) {
// //     console.log(it); //1 2 3 4 5
// // }

// let obj ={
//     name:'Rohit Soni',
//     age:20
// }
// //for of can not use on object //Object is not iterable through for of loop
// for (const iterator in obj) {
//     console.log(iterator);  //name age    
// }
// for (const key in arr) {
//     console.log(arr[key]); //1 2 3 40 5
// }

// Map  
//for of :Array,Map pe kam kart he
const map =new Map();
map.set('Country','India');
map.set('DSA','Half-King');
map.set('Acadmics','noKing');

console.log(typeof map); //Object
console.log(map);
//it is a collection of unique value
//Map(3) {
   // 'Country' => 'India',
//     'DSA' => 'Half-King',
//     'Acadmics' => 'noKing'
//   }
// for (const key of map) {
//     console.log(key); //output will be collection of arrays 
//     //[ 'Country', 'India' ]
// // [ 'DSA', 'Half-King' ]
// // [ 'Acadmics', 'noKing' ]
// }

// for (const [key,value] of map) {
//     console.log(key,"=>",value); //output will like below called ddestructureing of array
// //     Country => India
// // DSA => Half-King
// // Acadmics => noKing
// }


//for in loops  wokr in arr and object but it prints the keys not a value


//map is not iterable so for in loop can not use in map


const coding =['ruby','cpp','java'];

//foreach loop have three parameter  index value array
coding.forEach(
  function(value,index,arr){
console.log(index,value,arr); //ruby cpp java
  }
)

//output 
// 0 ruby [ 'ruby', 'cpp', 'java' ]
// 1 cpp [ 'ruby', 'cpp', 'java' ]
// 2 java [ 'ruby', 'cpp', 'java' ]

//array of object ko kese access kar sakte he

let temp =[
    {
      lname :'Rohit',
      call:'121212121'
    },
    {
        lname :'Roit',
        call:'121212121'
      },
      {
        lname :'Roit',
        call:'121212121'
      },
      {
        lname :'Roht',
        call:'121212121'
      },
      {
        lname :'Rohi',
        call:'121212121'
      }

]

// temp.forEach(function(vla){
//     console.log(vla.call);
// })

// 121212121
// 121212121
// 121212121
// 121212121
// 121212121