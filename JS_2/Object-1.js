//console.log("This is Objects");
//two ways to declare object 
///1)constructore  
//2)literals

// koi bhi constructoroe se object banta he to wo singletone object he
// literals ke through jo object banega wo singletone nai hoga

const mysymm = Symbol("key1");
// console.log(mysymm); // symbol(key1)
// console.log(typeof mysymm); //Symbol

const jsUser = {
    name:'Rohit', //by default system name ko "name " consider karke process karta he
    age:20,
    smartness :'NO',
    Hardwork :'Yes',
    location:'Khambhat',
    Email:'rohitsoniofficial21@gmail.com',
    lastloginDAYS :["monday","saturday"],
    "Full Name" :"Soni Rohit HimanshuKumar",
    mysymm :'This is not a actual way to use a symbol'
    //[mysymm] : 'This is a  actual way to use a symbol'
};

//   if we use  symbol like  [mysymm] : 'This is a  actual way to use a symbol' inn object then output of  console.log(jsUser); this will be niche che ae
// {
//     name: 'Rohit',
//     age: 20,
//     smartness: 'NO',
//     Hardwork: 'Yes',
//     location: 'Khambhat',
//     Email: 'omega_Golien_Akshat_Hectore',
//     lastloginDAYS: [ 'monday', 'saturday' ],
//     'Full Name': 'Soni Rohit HimanshuKumar',
//     [Symbol(key1)]: 'This is a  actual way to use a symbol'
//   }

// { if we use  symbol like    mysymm :'This is not a actual way to use a symbol' this will be niche che ae
//     name: 'Rohit',
//     age: 20,
//     smartness: 'NO',
//     Hardwork: 'Yes',
//     location: 'Khambhat',
//     Email: 'omega_Golien_Akshat_Hectore',
//     lastloginDAYS: [ 'monday', 'saturday' ],
//     'Full Name': 'Soni Rohit HimanshuKumar',
//     mysymm: 'This is not a actual way to use a symbol'
//   }
// console.log(jsUser.Email);
// console.log(jsUser['Email']);

// console.log(jsUser["lastloginDAYS"]);
// console.log(jsUser['Full Name']);

//console.log(jsUser.mysymm); //This is a symbole

//console.log(typeof jsUser.mysymm); // string this used in  object as a string
// console.log(typeof jsUser.age); //number
// console.log( jsUser[mysymm]); 

jsUser.Email="omega_Golien_Akshat_Hectore";
console.log(jsUser.Email);
// console.log(jsUser);


jsUser.greeting =function(){
    console.log('hELLO jS User');
}

//console.log(jsUser);
console.log(jsUser.greeting);  // output [Function (anonymous)]

console.log(jsUser.greeting()); //output hELLO jS User undefined

jsUser.greetingTwo =function(){
    console.log(`Hello Jsuser, ${this["Full Name"]}`);
}
// console.log(jsUser);
console.log(jsUser.greetingTwo()); //Hello Jsuser, Soni Rohit HimanshuKumar undefined