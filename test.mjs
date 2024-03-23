//creating Arrays
//declaring array
//literal method
//let cars = ["toyota", "suzuki","bmw","mazda"]; let x = 3; let y = "string";  
//let varname = [item1,item2,item3];
//ideally arrays should be declared with a key word const
const carBrands = ["toyota", "suzuki", "bmw", "mazda"]; //ivan
const crBrands = new Array("toyota", "suzuki", "bmw", "mazda");

const groupTwo = ["Eken", "Kenneth", "Ivan", "Tevin", "Winifred"];
const groupTwoFullNames = [];

groupTwoFullNames[1] = "Eken Mbabazi";
groupTwoFullNames[0] = "Kenneth Lwanga";

//new Array method
const cars = new Array("saab","volvo","bmw");

//accesing array elements
//you access the array element by refferinf the index number
const currency = ["USD","UGX", "Rand", "EUR"];
let euro = currency[3];

//array indexes start with 0 where 0 is the first element

//changing an array element


//The javascript method toString() converts an array to a string

const fruits = ["banana", "orange", "apple", "mango"];

//export the fruits variable
export {fruits, euro, groupTwoFullNames};