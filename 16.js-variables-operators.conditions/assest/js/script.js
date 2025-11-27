let number = 12;   //menimsetdiyim reqemm 12 dir

for (let i = 1; i <= number; i++) {    //i-onun basladqi noqteye verdyim bu komandadir ve men deyiremki
    if (number % i === 0) {  //egr 12 verdiyim 1 den 12 ye qeder ozu daxil ededlere qalqsiz bolunurse
        console.log(i); //consuluda icinde yazmisamki cixisi tam mene gosdersin ekrana cixar
    }
}





let number2 = 12; //mensetdym 12 dir
let count = 0; //toplamaq usdune gelmek ucun acdiqim bos yer
for(let i = 1; i<=number2; i++){ //yuxaridaki qayda ile eynidir
    if(number2 % i===0) { //buda eynidi
        count ++; // ama bu hemen bolunleri usd usde gel demekdi
    }
}     console.log(number2 + " ədədinin " + count + " böləni var"); //buda cixiwdi







let TekNumber = 0; //Iki dene bos menimsetme edirik tek ve cut ucun
let CutNumber = 0;

for (let i = 0; i <= 100; i++) { // 0dan boyuk 100 daxil olmaqla ama 100den kicik

    if (i % 2 === 0) { //qaliq olmamalidi
        CutNumber += i;  // cüt ədədlərin cəmi
    } else {
        TekNumber += i;  // tək ədədlərin cəmi
    }
}

console.log("Tək ədədlərin cəmi: " + TekNumber); //her ikisinin cixiwi
console.log("Cüt ədədlərin cəmi: " + CutNumber);


let sampleNews = `Menim Adim Fatimedi. Menim 26 yasim var. 2 qiz anasiyam, ve evladlarimi cox sevirem. Terezi burcuyem. Haqq-edaleti menim tek seven birisini dusunmurem. Bezen kobud ve ya aci dil ola bilerem.Cunki bu menim xarakterimdi. Sevmiye bilerler ama hormet etmeye MECBURDURLAR!.. En boyuk sevgim hobbim Motosiklet idare etmek ve en yaxin sirdawimsa Nergizdir. Ozumde devloper olmaq iseyirem lakin hele Java-scripde can verirem. Umidvaram bu gelecek yaxin zamanda hell yolunu tapacaq SAQOLUN!!!`;

let spaceCount = 0;

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === " ") {  //bosluqdaki simvolu tapanda arryn icinde verdym i o biride hesablayacaq
        spaceCount++;
    }
}

console.log("Mətn daxilində " + spaceCount + " boşluq var");



const numbers = [3, 7, 12, 70, 25];
let input = 70;
let found = false; //bu boolen novundendi fals true deyeri axdarir ve evvelcen bunu yazdmki cunki ede hele tapilmayib 

for (let i = 0; i < numbers.length; i++)
    if (numbers[i] === input) { //arreydeki eded verdym menetdiyim edede beraberdirse duzgundu demekdi
        found = true;
        break;  // tapdıqdan sonra dövrü dayandırw
    }

if (found) {
    console.log(input + " array daxilində mövcuddur");
} else {
    console.log(input + " array daxilində yoxdur");
}





const number3 = [4, 2, 7, 9, 12, 3, 46, 74, 19];

let min = number3[0]; //o ci indexden baslayr hemde minimum sifir goturur
let max = number3[0]; // buda eynisidi cunki muqayise noqtesi lazimdir

for (let i = 1; i < number3.length; i++) { // i reqemi 1dir yeni reqemler  verilen ilk indeks reqmden den kicikdirseboyukdurse
    if (number3[i] < min) {
        min = number3[i];  
    }
    if (number3[i] > max) { //buda boyukdurse
        max = number3[i];  
    }
}

console.log("Minimum: " + min + "Maximum: " + max);



//eslnde yuxaridaki tapswrqwla eynidi bilirem ama dehwet cetinlik cekdim ve AI den komek isdedim bunu tam olaraq ozum yazdm deye bilmirem....

const fruits = ["alma", "banan", "qarpiz", " portağal  ", "ananas", "nar"];

let longestWord = fruits[0];       // en uzun sozu saxlamaq ucun
let maxLength = fruits[0].length;  // onun uzunluğunu saxlamaq ucun

for (let i = 1; i < fruits.length; i++) {  
    if (fruits[i].length > maxLength) {
        longestWord = fruits[i];       // yeni en uzun soiz tapldi
        maxLength = fruits[i].length;  // onun uzunluğunu saxla
    }
}

console.log('Ən uzun söz: "' + longestWord + '"');
console.log("Uzunluq: " + maxLength);



let str = "racecar-assdasd"; //ters oxunanda ferqli soz olur 
let isPalindrome = true; // Əvvəlcə polindrom olduğunu inaniram
let len = str.length; //strngin uzunluqunu goturem ama asaqini basa dusmedm komek isdedim


for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) { // simvolları başdan və sondan müqayisə edirik
        isPalindrome = false;           // əgər fərqlidirsə, polindrom deyil
        break;                           // artıq yoxlamağa ehtiyac yoxdur
    }
}

if (isPalindrome) {
    console.log('"' + str + '" polindromdur');
} else {
    console.log('"' + str + '" polindrom deyil');
}






//bu tapsrqda sual verdmki nie 1 ve ya 0 yazmamaliyam dediki her heded 1 e bolunur ona gore dongunu 2 den baslamaq lazmdi
for (let num = 2; num <= 100; num++) { // 0 və 1 sadə deyil, ona görə 2-dən başlayırıq
    let isPrime = true; // sade olduqunu tesdiq eden bir let deyiseni yaradiram

    //  
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false; // boldunse fso sade deyl
            break;           // artiq yoxlamiram dongunden cixiram
        }
    }

    if (isPrime) {
        console.log(num); // eger sadedirden yazmalidir
    }
}




//bunuda basa dusmedm mellim
const products = [
  { id: 1, title: "Smartphone", description: "A high-end smartphone with the latest features.", price: 799.99 },
  { id: 2, title: "Laptop", description: "Powerful laptop with a large screen and fast processor.", price: 1299.99 },
  { id: 3, title: "Coffee Maker", description: "An automatic coffee maker with a built-in grinder.", price: 99.99 },
  { id: 4, title: "Headphones", description: "Wireless over-ear headphones with noise-cancellation.", price: 199.99 },
  { id: 5, title: "Smart TV", description: "55-inch 4K Smart TV with streaming apps built-in.", price: 699.99 },
];

let totalPrice = 0; //umumi bir sifir qiymet yazdmki muqayse edim usdune gelmek ucun

for (let i = 0; i < products.length; i++) { //0qiymet usdune 
  totalPrice += products[i].price; // hər məhsulun qiymətini toplamaq
}

let averagePrice = totalPrice / products.length;

console.log("Məhsulların qiymət cəmi: $" + totalPrice.toFixed(2));
console.log("Məhsulların qiymət ortalaması: $" + averagePrice.toFixed(2));
