console.log(2 <"1"); 

console.log(false<"1") //true
console.log( false <"") // false
console.log(false == "");//true

//avaoid thes kind of consversions 
console.log(null>0)//false
console.log(null==0);//false
console.log( null >= 0);//true

//=== strict check that is also checks data types 

console.log("2" === 2)//false 
console.log("2" == 2)//true 
 