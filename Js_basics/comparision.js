console.log(2>1); // output:true
console.log("2" >1); //output:true
console.log(null == 0) //false;
// comparison work diferntly then equality  in comparision the null is converted into number means 0
//thats why below this are false
console.log(null>0);//false
console.log(null <0);//false
console.log(undefined >0); //false
console.log(undefined<0); //false


//Strict Check
console.log("2"===2); //false;
//in which the data types and vaue should be same
