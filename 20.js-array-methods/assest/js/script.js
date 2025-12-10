const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")

let i = shoppingCart.indexOf("Honey");   //1
if (i !== -1) {
    shoppingCart.splice(i, 1);
}


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
const indexAzerbaijan =countries.indexOf("Azerbaijan");   //2

if(indexCanada !== -1) countries.splice(indexCanada ,1)
if(indexDenmark !== -1) countries.splice(indexDenmark ,1) 
if(indexAzerbaijan === -1) countries.splice(countries.length, 0, "Azerbaijan")


console.log(countries);




const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']   //3
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)



console.log(fullStack);



const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const firstThree = itCompanies.slice(0, 3);
const lastThree = itCompanies.slice(-3);
const middleStart = Math.floor(itCompanies.length / 2) - 1;  //4
const middleEnd = middleStart + 2;
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
    return arr1.concat(arr2).join(char);   //5
}
console.log(number([1, 2], [3, 4], '*'))




console.log("-----------------------------------------------");



const arr = [
  { name: 'test',     key: 1 },
  { name: 'task',     key: 2 },
  { name: 'tanqo',    key: 3 },
  { name: 'like',     key: 4 },
  { name: 'task',     key: 5 },
  { name: 'trust',    key: 6 },
  { name: 'test',     key: 7 },
  { name: 'last',     key: 8 },
  { name: 'tanqo',    key: 9 },
  { name: 'elephant', key: 10 },
  { name: 'love',     key: 11 },
  { name: 'small',    key: 12 },
  { name: 'little',   key: 13 },
]; 

const newArr = arr.filter(item => item.name.toLowerCase().includes("t"));  //ilk hrfi t olan 1
console.log(newArr);

const newArr2 = arr.filter(item => item.name.toLowerCase().startsWith("t"));  //icinde t olan ilk son 2
console.log(newArr2);

const longest = arr.reduce((max, item) => {
  return item.name.length > max.name.length ? item : max; //en uzun elemet3
});

console.log(longest);

const long = arr.reduce((max, item) => {
  return item.name.length > max.name.length ? item : max;  //en uzun acar(key) 4
});

console.log(long.key);


const newArr3 = arr.filter(item => item.name.length === 4);  //filter ile 4 elemet tutani yiqdim arreye 5

console.log(newArr3);

const result = arr.filter(item => 
  item.key > 10 && item.name.toLowerCase().startsWith("l")  //hem l ile baslasin hemde keyi 10 den boyuk  olsun 6
);

console.log(result);


const sumKeys = arr
  .filter(item => {
    const name = item.name.toLowerCase();
    return name.startsWith("t") && name.endsWith("t"); //t ile baslayib t ile bitenin keylerin cemi 7
  })
  .reduce((sum, item) => sum + item.key, 0);

console.log(sumKeys);
