let start = 5;
let end = 9;
let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

console.log("Cəm:", sum);



let text = "I love Javascript and coding";
let wordCount = text.trim().split(" ").length;   //trim artq bosluqlari sildm split ele vergul atib butun sozleroi ayri ayri yazdm z

console.log(wordCount);



let ad = "aZEr"; //mene verilen ilkin soz 

ad = ad.charAt(0).toUpperCase() + ad.slice(1).toLowerCase(); //charat o-inci indeksi verir tupor case onu balacadan boyuk edir sclice 1 yazmisam cunki 0 inci a herfidi 1 yazdimki ani kessin qalanida balaca olsun tolover ile
console.log(ad);






let cumle = "Salam necesen dosdum"; //verdiym cumle

cumle = cumle.replace(/a/gi, "*"); //bu oz defaultutu men yazmadim ama birinci yazdqm a deywmek isdeidyimdi sonda yazdqm * ise onun yerine qoyduqumdu

console.log(cumle);





let email = "user123@gmail.com"; //verilmis olan cumledi

let domen = email.split("@")[1]; //split @ eledim cumle iki yere ayrdi et isaresi etden evvelki 1 ci hisse ikinci ise ele ikinci hissedi menede user123 ve @ isaresi silinmelidi idi
//burda cetin lik cekdim komeyli yazmisam
console.log(domen); // gmail.com


let write = "Javascript is really powerful language";

let sozler = write.split(" "); //cumleni sozlere bolur " usdunden"

let enUzunSoz = "";
for (let i = 0; i < sozler.length; i++) {
    if (sozler[i].length > enUzunSoz.length) { //bundua ai ile komekli yazmisam cunki mkodum sef idi
        enUzunSoz = sozler[i];
    }
}

console.log("en uzun soz:", enUzunSoz);





let text1 = "I love coding";
let sozler1 = text1.split(" ");  //buda yuxarikanin eksi idi
let enQisaSoz = sozler1[0];

for (let i = 1; i < sozler1.length; i++) {
    if (sozler1[i].length < enQisaSoz.length) {
        enQisaSoz = sozler1[i];
    }
}

console.log("en qisa soz:", enQisaSoz);




let text3 = "hello";

text3 = "#" + text3 + "#";

console.log(text3);
