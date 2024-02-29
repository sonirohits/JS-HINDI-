
// console.log('This is map,fillter,reduce');

// const nums =[1,2,3,4,5,6,7,8,9,10,11,12,13];
// // nums.filter(function(val){
// //     if(val %2 !=0){
// //     console.log(val);
// //     }
// // });
// //output : 1 3 5 7 9 11 13

// // const new_array =nums.filter(function(val){
// //     return val >4;
// // })
// // console.log(new_array); //[5,6,7,8,9,10,11,12,13]

// const new_nums=[] ;
// nums.forEach(function(val){
//     if(val > 4){
//             new_nums.push(val);
//     }
// })
// console.log(new_nums); // [5,6,7,8,9,10,11,12,13]

// //fillter ke through directe return ho  jyagea
// //for each me hame khude se push karna padega 
// const books =[
//     {
//         titlt:'book one',
//         gener:'science',
//         publish:2011,
//         edition:2004
//     },
//     {
//         title:'book two',
//         gener:'History',
//         publish:2012,
//         edition:2001
//     },
//     {
//         title:'book three',
//         gener:'Noval',
//         publish:2020,
//         edition:20187
//     }
// ]
// const userbookd =books.filter(function(val){
//    return val["gener"] =='History';
// });
// console.log(userbookd);
// ///output [
// //   { title: 'book two', gener: 'History', publish: 2012, edition: 2001 }
// // ]


let mynums =[1,2,3,4,5,6,7,8,9,10];
// let new_ways=mynums.map(function(val){
//     return val + 10;
// })
// console.log(new_ways); //[11,12,13,14,15,16,17,18,19,20]

// let new_ways =mynums.map(function(val){
//     if(val % 2==0){
//         return val;
//     }
 
// });
// console.log(new_ways);
// output is below
// [
//     undefined, 2,
//     undefined, 4,
//     undefined, 6,
//     undefined, 8,
//     undefined, 10
//   ]

//map hamesa sari value return karta he

//chaniiiiing of  maps
const num1 =[1,2,3,4,5,6,7,8,9,10];
let num2  =num1.map(function(val){return val+10}).map(function(val){return val+1}).filter(function(val){if(val %2==0){return val;}});
console.log(num2);
//output  [10,12,13,14,15,16,17,18,19,20]
//        [ 12, 13, 14, 15, 16,17, 18, 19, 20, 21]
 ///      [12,14,16,18,20]


 //reduce
 const reduce_nums =[1,2,3];
 const mytotal =reduce_nums.reduce(function(acc,currval){
    console.log(`curr => ${currval} ,acc => ${acc}`);
    return acc + currval;
 },0);
 console.log(mytotal);