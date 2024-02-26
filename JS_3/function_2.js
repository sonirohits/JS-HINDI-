/// ... rest operatore ; 
//rest operatore means  ki sari values ko bundle kar do 


// function calculatecartprice(a,...num1){
//     console.log(...num1); //3 4 5 6
// return a; 
// }
// console.log(calculatecartprice(2,3,4,5,6)); //2


// const user ={
//     username :'Rohit Soni',
//     price: 199
// }
// function handleObj(anyobject){
// console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
//handleObj(user);

///another way  to pass object as parameter is below
// handleObj(temp={
//     username :'vishal Soni',
//     price: 599
// });


//you can pass array like this
// const newarray =[100,200,300,400];
// function returnSecondValue(temp){
//     console.log(temp[1]);
// }
//returnSecondValue([100,200,300,400]);
//returnSecondValue(newarray); //200

// function one(){
//     const  username ='Rohit';
//     function two(){
//         const website ='YouTube';
//         console.log(username); //error nai dega
//     }
//     console.log(website); erroe dega
//     two();
// }
 
// one();
// console.log(addOne(1)); //this will not give error :output 2

// function addOne(value){
//     return value + 1;
// }
// console.log(addOne(1)); //output :2

 
console.log(addTwo(1));     ///this weill give error
 const  addTwo=function (value){
    return value +2;
}
// console.log(addTwo(1));  //this will print 3