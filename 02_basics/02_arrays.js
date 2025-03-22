const companies = ["genpact" , "Phillips"];
const startups = ["FT" , "pazcare" , "beast life"];

// companies.push(startups)

const newarr = companies.concat(startups);
// console.log(newarr);

const all = [...companies , ...startups]//spread operator
console.log(all);

const arr = [1,2,3,4,[56,78] , 7,[56,[7,8]]]
const realarr= arr.flat(Infinity)
console.log(realarr);


// convert string t array 
console.log(Array.from("Apurva"));
console.log(Array.of("Apurva" , "prachi"));




