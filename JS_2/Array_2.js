const marevel_heros =["thor","spider_man","IronMan"];
const dc=["superman","flash","batman"];

marevel_heros.push(dc);
console.log(marevel_heros); //[ 'thor', 'spider_man', 'IronMan', [ 'superman', 'flash', 'batman' ] ] //array ke andar array aa gaya he
dc.concat(marevel_heros); 
console.log(dc); // /not change in original array
//console.log(dc.concat(marevel_heros));  //concate return the new array
//[
//     'superman',
//     'flash',
//     'batman',
//     'thor',
//     'spider_man',
//     'IronMan',
//     [ 'superman', 'flash', 'batman' ]
//   ]
const new_array =dc.concat(marevel_heros);

console.log(new_array);



// Spread Operattor

let first = [1100,1220,133000,113132];
let second =['rohit','parth','rudra'];
let third =['HimanshuKuamr','AlpaBen'];

let using_spread=[...first,...second,...third];
console.log(using_spread);//[  1100,  1220,  133000,  113132,  'rohit',  'parth',  'rudra',  'HimanshuKuamr',  'AlpaBen']

const another_array =[1,2,3,4,[5,6],[7,8,[9,122]]];
const another_usable_array =another_array.flat(Infinity);
console.log(another_usable_array);//[ 1, 2, 3, 4,   5, 6, 7, 8, 9, 122 ]
console.log(another_array);//[ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8, [ 9, 122 ] ] ]

console.log(Array.isArray("Hitehs")); //return false
console.log(Array.from("Hitesh")); // ['h','i','t','e','s','h']
let score1 = 111;
let score2 =121;
let score3 =131;
console.log(Array.of(score1,score2,score3)); //111 121 131
console.log(Array.of([1,2,3])); //[[1,2,3]]

let temp =Array.from([1,2,3]);
console.log("HI");
    console.log(temp); //[1,2,3]

    // let temp =Array.from([1,2,3]);
    // console.log("HI");
    //     console.log(temp); //[[1,2,3]]
    