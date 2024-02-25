//talk about SingleTone Object
const tinderUser = new Object();      
// console.log(tinderUser);  //{} this object is a singletone object because it is created thriugh constructire

// const tinnderuser ={};
// console.log(tinnderuser); //{} non singletone object
tinderUser.id ='123abc';
tinderUser.name = 'Sammy';
tinderUser.isloggedin =false;
console.log(tinderUser);

const regularUser = {
    email :"rohit@google.com",
    fullname:{
        userfullname :{
            first :'roit',
            lame:'soni'
        }
    }
}
console.log(regularUser.fullname.userfullname.lame); 

//ther is also  another way to access nested properties called operatore chaning

let obj1 ={1:'a',2:'b'};
let obj2={1:'A',2:'B'};
// let obj3 ={obj1,obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'A', '2': 'B' } }
                        //target,source,source         //means all source target me chala jayega
let obj3 = Object.assign({},obj1,obj2); //mean that {} iske andar obje1 and obj2 dal do
console.log(obj3); //{ '1': 'A', '2': 'B' }

//another way of combining of oject
let obj4 ={...obj1,...obj2};
console.log(obj4); //{ '1': 'A', '2': 'B' }


console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedin', false ] ]