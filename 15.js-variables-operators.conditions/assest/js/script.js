let number = 15;

if (number % 2 === 0) {
    console.log("This numer is EVEN!");   //1
} else {
    console.log("This number is ODD!");
}


let first = 7;
let second = 7;
let thered = 7;

if (first === second && second === thered) {
    console.log("Bu bərabərtərəfli üçbucaqdır");   //2
} else {
    console.log("Bu bərabərtərəfli üçbucaq deyil");
}




let cathet1 = 3;
let cathet2 = 4;   //3
let hypotenuse = 5;

if (hypotenuse * hypotenuse === cathet1 * cathet1 + cathet2 * cathet2) {
    console.log("Result: Right-angled triangle");
} else {
    console.log("Result: Not a right-angled triangle");
}







let num = 125; // Daxil edilmiw ədəd
let a;
if (num >= 100) {
    a = (num - (num % 100)) / 100;  //100lu reqemi tapmaq   //4
} else {
    a = 0;
}
let b;
if (num >= 10) {
    b = ((num % 100) - (num % 10)) / 10; //10luqu tapmaq
} else {
    b = 0;
}
let c = num % 10;  // Birlik rəqəmi

//  cəmi
let sum = a + b + c;

//  hasili
let product = a * b * c;

// ədədi ortası
let average = sum / 3;

console.log("Reqemlerin cemi: " + sum);
console.log("Reqemlerin hasili: " + product);
console.log("Reqemlerin ededi ortasi: " + average);









// function monthDays(month) {
//     switch(month.toLowerCase()) {  //JS METODURU STRINDE YAZILAN BUTUN HERFLERI D C BALACAYA KECIRIR USER HERFI BOYUK YA BALACADA YAZSA CAVAB CIXACAQ ESAS BOYUK VE YA BALACA YAZMAQI TELEB OLUNMUR
//         case "january":
//                            console.log("January 31 days");
//             break;
//         case "february":
//                  console.log("February only 28 days");
//             break;
//         case "march":
//                      console.log("March 31 days");
//              break;
//         case "april":
//               console.log("April 30 days");
//             break;
//         case "may":
//             console.log("May 31 days");
//             break;
//         case "june":
//             console.log("June  30 days");
//             break;
//         case "july":
//                 console.log("July  31 days");
//             break;
//         case "august":
//                   console.log("August 31 days");
//             break;
//         case "september":
//             console.log("September 30 days");
//             break;
//         case "october":
//                console.log("October 31 days");
//             break;
//         case "november":
//             console.log("November 30 days");
//             break;
//         case "december":
//                            console.log("December 31 days");
//             break;
//         default:
//                                console.log("Invalid month name");
//     }
// }


// monthDays("January");
// monthDays(""); 


let month = "January"; //5  

switch(month) {
    case "January":
        console.log("January 31 days");
        break;
    case "February":
        console.log("February only 28 days");
        break;
    case "March":
        console.log("March 31 days");
        break;
    case "April":
        console.log("April 30 days");
        break;
    case "May":
        console.log("May 31 days");
        break;
    case "June":
        console.log("June 30 days");
        break;
    case "July":
        console.log("July 31 days");
        break;
    case "August":
        console.log("August 31 days");
        break;
    case "September":
        console.log("September 30 days");
        break;
    case "October":
        console.log("October 31 days");
        break;
    case "November":
        console.log("November 30 days");
        break;
    case "December":
        console.log("December 31 days");
        break;
    default:
        console.log("Invalid month name");
}


let score=100
    if (score < 0 || score > 100) {
        console.log("Daxil edilən rəqəm 0-100 araliğinda olmalidir!"); //6
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





let d = 10;
let f = 90;
let g = 9;

if (d >= f && d >= g) {
    console.log(a + " ən boyuk ededdir"); //7
} else if (f >= d && f >= g) {
    console.log(f + " en boyuk ededdir");
} else {
    console.log(g + " en boyuk ededdir");
}



