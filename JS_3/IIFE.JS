// //Immediate Invoked Function Expression

// (function chai(){
//     console.log(`DB Connected`);
// })()
// //output of chai ==DB connecte
// (function chaiaurcode(){
//     console.log(`DB Connected`);
// })()
// //this wiil give error because chai() exexcute //Invoked to ho gaaya but use pata nahi he ki rukna kaha pe to iife fnction me hame semi column lagana hoga

// //like this
// (function chai(){
//     console.log(`DB Connected`);
// })();
// //output of chai ==DB connecte
// (function chaiaurcode(){
//     console.log(`DB Connected`);
// })();

// chai();

//why use iifi?
//global scope ke polliution se bachne ke liye iife use kiya he


///how to pass parametein iifi functione


//named iifi
(function parameter(name){
console.log(name);
})('Soni Rohit HimanshuKumar');   //Soni Rohit HimanshuKumar

//there  is two type of iifi
//1)Named iifi
//2)unknown iifi

//unknown iifi

// ((name)=>{
//     console.log(name);
//     })('Soni Rohit HimanshuKumar');

