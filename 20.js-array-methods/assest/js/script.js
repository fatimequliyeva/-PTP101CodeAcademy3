const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")

let i = shoppingCart.indexOf("Honey");
if (i !== -1) {
    shoppingCart.splice(i, 1);
}

// Tea -> Green Tea etmək
let tea = shoppingCart.indexOf("Tea");
if (tea !== -1) {
    shoppingCart[tea] = "Green Tea";
}
console.log(shoppingCart);




const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]  
countries.reverse()

const indexDenmark = countries.indexOf("Denmark");
const indexCanada =countries.indexOf("Canada");
const indexAzerbaijan =countries.indexOf("Azerbaijan");

if(indexCanada !== -1) countries.splice(indexCanada ,1)
if(indexDenmark !== -1) countries.splice(indexDenmark ,1) 
if(indexAzerbaijan === -1) countries.splice(countries.length, 0, "Azerbaijan")


console.log(countries);




const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)



console.log(fullStack);



const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


const firstThree = itCompanies.slice(0, 3);


const lastThree = itCompanies.slice(-3);


const middleStart = Math.floor(itCompanies.length / 2) - 1;
const middleEnd = middleStart + 3;
const middleCompanies = itCompanies.slice(middleStart, middleEnd);


const sortedCompanies = itCompanies.slice().sort();

const upperCompanies = itCompanies.map(company => company.toUpperCase());


const checkGoogle = itCompanies.includes("Google") ? "Google movcuddur" : "Company is not found";

const companiesWithO = [];
for (let company of itCompanies) {
    const countO = company.toLowerCase().split('').filter(ch => ch === 'o').length;
    if (countO >= 2) companiesWithO.push(company);
}


console.log("İlk 3 sirket:", firstThree);
console.log("Son 3 sirket:", lastThree);
console.log("Orta sirketler:", middleCompanies);
console.log("Siralanmis sirketLeR:", sortedCompanies);
console.log("Boyuk herifle sirketlr:", upperCompanies);
console.log( checkGoogle);
console.log("2 ve ya daha cox 'o' herfi olan sirketler:", companiesWithO);


function number(arr1, arr2, char) {
    return arr1.concat(arr2).join(char);
}
console.log(number([1, 2], [3, 4], '*'))
