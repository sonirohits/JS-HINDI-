///Date and Time
//it is  pain point off javascript
//Date is a object
let myDate =new Date();
console.log(myDate);//2024-02-23T11:54:19.637Z
console.log(myDate.toString()); //fri feb 23 2034 11.54:19
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate) ///object

                          //year month date hours miniuts
let createDate  = new Date(2023,0,23,5,39);
console.log(createDate);
console.log(createDate.toDateString());  //todatestring show onluy the day date and month and year Mon Jan 23 2023

console.log(createDate.toLocaleString()); //1/23/2023 ,5:39:00
//in  js the months is starting from the oth index 
//means 0 =>jan
//1=>feb
//2=>march like that
//converte date into datestring so we can unerstand propely

let create_more_date =new Date("2023-02-23");
console.log(create_more_date.getTime()); //1677110400000 //૧ જાન્યુઆરી ૧૯૭૦ થી ૨૩ ફેબ્રુઆરી ૨૦૨૩ સુધી, અંગે આપેલ સમય અંદર, ૧૬,૭૧૧,૦૪૦,૦૦૦ મિલિસેકન્ડ બીત ગયા છે।
console.log(createDate.toLocaleString());  //1/23/2023 ,5:39::00

console.log("More daresss");

let more_date = Date.now();
console.log(more_date); //1708691291759 
//નિર્દિષ્ટ વ્યાખ્યાયિકા જોઈએ તો Date.now() જાવાસ્ક્રિપ્ટમાં વર્તમાન સમયની મિલિસેકન્ડમાં આ નાનું પ્રમાણદંડ પ્રદાન કરે છે, જે 1970ના જાન્યુઆરી 1 થી હવેની તારીખ અને સમયથી કેટલાક સમયમાં બીત્યું છે. આ મૂલ્ય મ્લિસેકન્ડમાં વર્તમાન સમયને મૂલ્યાંકન કરવા માટે ઉપયોગમાં લઈ જાય છે અને સામાન્યવાયુ પ્રમાણમાં નાનામુકાબજીનું અનુમાન કરવા માટે પણ ઉપયોગ થાય છે.

//if you want to converte mili second into second
console.log(Math.floor(Date.now()/1000));

console.log("thank you");
let date1 =new Date();
console.log(date1.getDay()); //5 means friday
console.log(date1.getHours()); //14
console.log(date1.getMinutes()); //28
console.log(date1.getMonth()); //1 beacud  0 based index and this is month of februaray


let currentDate = new Date();
console.log(currentDate.toLocaleString());
