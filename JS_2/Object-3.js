console.log("This is Destructureing of an object");
const course ={
    Course :'Js in Hindi',
    price :'999',
    CourseInstructore :'Hitesh'
}
// const {CourseInstructore} = course;
// console.log(CourseInstructore);   // output :Hitesh course.CourseInstructore  == const {CourseInstructore} = course;

const {CourseInstructore :Instructore} =course;
console.log(Instructore); //Hitesh

 //Lets Begin API :apna kame kisi aur pe dale de te  he use hame API kete he

 //API  ka response hamesa JSON me aata he

//  {
//     "name" :'Hitesh',
//     "CourseName" :'JS_HINDI',
//     "price" :'free'
//  }