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
const newarray =[100,200,300,400];
function returnSecondValue(temp){
    console.log(temp[1]);
}
//returnSecondValue([100,200,300,400]);
//returnSecondValue(newarray); //200