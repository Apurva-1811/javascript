let myDate = new Date();//type of date is object
// console.log(myDate.toString());

// let myCretaeDate = new Date(2025 , 3, 8);
// let myCretaeDate = new Date(2025 , 3, 8 , 5 , 3);
let myCretaeDate = new Date("2025-03-08");
console.log(myCretaeDate.toLocaleString());

console.log(`the day today is ${myDate.getDay().toLocaleString()} and date is${myDate.getDate()}`)


myDate.toLocaleString('default' , {
    weekday : "long"

})