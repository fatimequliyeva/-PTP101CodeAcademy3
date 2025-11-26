let number = 15;

if (number % 2 === 0) {
    console.log("This numer is EVEN!");
} else {
    console.log("This number is ODD!");
}


function ucbucaqiYoxla(a, b, c) {
    if (a == b && b == c) {
        console.log("Bu bərabərtərəfli üçbucaqdr.");
    } else {
        console.log("Bu bərabərtərəfli üçbucaq deyil.");
    }
}
ucbucaqiYoxla(7, 7, 7);  //buda bir kolkulyatordu yeni sadece reqemleri deyiwmekle bu kod tekrarlana bilecek guce sahibdi dusunduyum qeder hec bir prioblem cixarmali deyil


function rightTriangleCheck(cathet1, cathet2, hypotenuse) {
    if (hypotenuse ** 2 === cathet1 ** 2 + cathet2 ** 2) {
        console.log("Result: Right-angled triangle");
    } else {
        console.log("Result: Not a right-angled triangle");
    }
}

rightTriangleCheck(3, 4, 5); //bu yoxlamaq ucun kolkulyatordu //bunu ozum inglisce yazdm ferqli olsun deye 
//hipotenuz ** 2 → hipotenuzun kvadratı
//katet1 ** 2 + katet2 ** 2 → katetlərin kvadratlarının cəmi
//Bərabərlik doğru olarsa → düzbucaqlı üçbucaq




function digitsStats(number) {

    let digits = number.toString().split('').map(Number); // Ədədin rəqəmlərini stringə çevirir


    let sum = digits.reduce((acc, val) => acc + val, 0);   // Rəqəmlərin cəmi

    let product = digits.reduce((acc, val) => acc * val, 1);      // Rəqəmlərin hasili


    let average = sum / digits.length;      // Rəqəmlərin ədədi ortası



    console.log("Rəqəmlərin cəmi: " + sum);
    console.log("Rəqəmlərin hasili: " + product);   // bunu qetiyyen basa dusmedm
    console.log("Rəqəmlərin ədədi ortasi: " + average);
}


digitsStats(1, 2, 3);

function monthDays(month) {
    switch(month.toLowerCase()) {  //JS METODURU STRINDE YAZILAN BUTUN HERFLERI D C BALACAYA KECIRIR USER HERFI BOYUK YA BALACADA YAZSA CAVAB CIXACAQ ESAS BOYUK VE YA BALACA YAZMAQI TELEB OLUNMUR
        case "january":
                           console.log("January 31 days");
            break;
        case "february":
                 console.log("February only 28 days");
            break;
        case "march":
                     console.log("March 31 days");
             break;
        case "april":
              console.log("April 30 days");
            break;
        case "may":
            console.log("May 31 days");
            break;
        case "june":
            console.log("June  30 days");
            break;
        case "july":
                console.log("July  31 days");
            break;
        case "august":
                  console.log("August 31 days");
            break;
        case "september":
            console.log("September 30 days");
            break;
        case "october":
               console.log("October 31 days");
            break;
        case "november":
            console.log("November 30 days");
            break;
        case "december":
                           console.log("December 31 days");
            break;
        default:
                               console.log("Invalid month name");
    }
}


monthDays("January");
monthDays(""); 



function qiymetTeyinEt(score) {
    if (score < 0 || score > 100) {
        console.log("Daxil edilən rəqəm 0-100 araliğinda olmalidir!");
    } else if (score >= 90) {
        console.log("Qiymətiniz: A Siz yuksek-seref diplomunu qazandiniz Fatime!!");
    } else if (score >= 80) {
        console.log("Qiymətiniz: B");
    } else if (score >= 70) {
        console.log("Qiymətiniz: C");
    } else if (score >= 60) {
        console.log("Qiymətiniz: D");
    } else {
        console.log("Qiymətiniz: F");
    }
}


qiymetTeyinEt(95); 






  //burda her her setrde bir deyisenin o biri deyisenlerden boyuk olmasini qqeyd etdimki isdenilen yerde yeni colculyatorda reqemlerin yeri bele deyisik yazilarsa ve yaxud boyuk kicik reqemlerin yeri ayri yazilarsa neticede kod duzgun sekilde islesin
function enBoyuk(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " ən böyük ədəddir");
    } else if (b >= a && b >= c) {             
        console.log(b + " ən böyük ədəddir");
    } else {
        console.log(c + " ən böyük ədəddir");
    }
}


enBoyuk(10, 100, 9);  



