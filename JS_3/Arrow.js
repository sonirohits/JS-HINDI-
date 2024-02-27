// hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
//output of welcomeMessage()ke andar tthis he uska  output
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//Function ke Andar ape this use nai kar sakte

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   //{}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefind
//     console.log(this);    //output is  below
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     structuredClone: [Function: structuredClone],
    //     atob: [Getter/Setter],
    //     btoa: [Getter/Setter],
    //     performance: [Getter/Setter],
    //     fetch: [Function: fetch],
    //     crypto: [Getter]
    //   }
//}
//chai()

const chai = function () {
    let username = "hitesh"
    console.log(this); //output is below
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     structuredClone: [Function: structuredClone],
    //     atob: [Getter/Setter],
    //     btoa: [Getter/Setter],
    //     performance: [Getter/Setter],
    //     fetch: [Function: fetch],
    //     crypto: [Getter]
    //   }
    console.log(this.username);      //undefind 
}
// chai();

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); //undefind
//     console.log(this);   // {}
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2 //no need to write return because the this called Implicite Retruen


//easy tric {} this used hua to return likhna padega  () this used hua to return nai likna padea
//another way for implicite return 
const addthree = (n1,n2,n3) =>(n1 + n2 + n3);
console.log(addthree(1,1,1));

//how to return object in arrow functione
const returnObject =() =>({username:'RohtiSoni Himanshukumar'});

console.log(returnObject()); //{ username: 'RohtiSoni Himanshukumar' }

//browser pr c.log(this) likonge to output me window aayega kyu ki pehle js browser ke through hi execute hoti thi and jo  js ka engine tha vo bhi browser ke sathe he 
//aata tha is vahajse .lekin abhi to js engine alge aa chuka he node me 