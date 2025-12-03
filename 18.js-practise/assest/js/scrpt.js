let numbers = [12, 7, 3, 9, 6, 15, 8];
let newArray=[];
for (let i = 0; i < numbers.length; i++) {
newArray.push(numbers[i] **2);
}
console.log(newArray);


let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Austria","Azerbaijan","Bahamas","Bahrain","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Estonia","Ethiopia","Falkland Islands","Faroe Islands"];
//  for (let i = 0; i < countries.length; i++) {
//   let country = countries[i];  //bu kod duzdu sadece qardawdirmirm diye slewe aldim
//   console.log(country + " - " + country.length);
// }

for (let i = 0; i < countries.length; i++) {
  let country = countries[i];

  if (country[0] === "A" && country[country.length - 1] === "a") {
    console.log(country);
  }
}


const webTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "Redux",
  "Node",
  "JS",
  "MongDB",
];

let newArrey = [];

for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > 4) {
    newArrey.push(webTechs[i]);
  }
}

console.log(newArrey);



const products = [
  { id: 1, title: "Smartphone", price: 799.99, category: "Electronics" },
  { id: 2, title: "Smartwatch", price: 249.99, category: "Electronics" },
  { id: 3, title: "Laptop", price: 1299.99, category: "Computers" },
  { id: 4, title: "Gaming PC", price: 1599.99, category: "Computers" },
  { id: 5, title: "Coffee Maker", price: 99.99, category: "Home Appliances" },
  { id: 6, title: "Air Fryer", price: 149.99, category: "Home Appliances" },
  { id: 7, title: "Headphones", price: 199.99, category: "Audio" },
  { id: 8, title: "Bluetooth Speaker", price: 89.99, category: "Audio" },
  { id: 9, title: "Smart TV", price: 699.99, category: "TV & Entertainment" },
  { id: 10, title: "Projector", price: 299.99, category: "TV & Entertainment" }
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 500) {   //500-den yuxari olan 
    console.log(products[i]);
  }
}

let tutal = 0;

for (let i = 0; i < products.length; i++) {
  tutal += products[i].price;
}

let average = tutal / products.length;  //cemi ve oratalamasi

console.log("Cemi:", tutal);
console.log("Ortalama:", average);

let computers = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "Computers") {  //comp sozu olanlardi
    computers.push(products[i]);
  }
}

console.log(computers);



let smallMany = products[0];

for (let i = 1; i < products.length; i++) {
  if (products[i].price < smallMany.price) { //en ucuz oaln mehsuldi
    smallMany = products[i];
  }
}

console.log("en ucuz mehsul:", smallMany);

