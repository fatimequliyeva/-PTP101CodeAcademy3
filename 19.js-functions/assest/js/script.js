function maxOfThree(a, b, c) {
    return Math.max(a, b, c);  //bunu matsh nene yazdm bunu  ekside olur hansiki minumum reqemi verir
}

console.log(maxOfThree(95, 46, 8)); 


function calculateDiscount(price, discountPercent) {
    const discountAmount = price * (discountPercent / 100);  //mellim buna komek isdedim fazi hesablanmasi bilmirem
    const finalPrice = price - discountAmount;
    return finalPrice;
}


console.log(calculateDiscount(100, 20)); 



function findAverage(array) {
    if (array.length === 0) {
        return "Xəta: Array boşdur!";
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum += array[i];
    }

    const average = sum / array.length;
    return `Average: ${average}`;
}
console.log(findAverage([1,5,3]));            
console.log(findAverage([17,54,10,]));     


const divisorCountSimple = (number) => {
    if (number <= 0) {
        return "imtina: eded musbet olmalidir!"; //eger isdifadeci her kimse 0 ve ya onda kicik eded yazarsa imtina versn
    }

    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    return count;
};

console.log(divisorCountSimple(100));
console.log(divisorCountSimple(-5));







function getGradeByScore(score) {
    if (score < 0 || score > 100) {
        return "Diqqetli ol: Reqemi duzgun teyin et!";
    }

    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
              return "F";
}
console.log(getGradeByScore(1021)); 
console.log(getGradeByScore(72)); 


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) { //sizin koddaki ile baxb yazdm
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("code"));  
console.log(reverseString("hello")); 
console.log(reverseString("JavaScript bezdirib meni"));





function sumRange(start, end) {
    if (start > end) return "BASlanqic SONDA BOYUK OLMAMALIDIR!";

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}


console.log(sumRange(3, 4));
console.log(sumRange(4, 6));
console.log(sumRange(6, 5));




const doubleArray = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
};


console.log(doubleArray([1, 2, 3]));  




const sentenceCapitalization = (sentence) => {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {  //BUNU BASA DUSMEDM 
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(" ");
};


console.log(sentenceCapitalization("a short sentence")); 
console.log(sentenceCapitalization("hello world"));        
console.log(sentenceCapitalization("javaScript is fun"));  





const power = (base, exponent) => Math.pow(base, exponent);


const base = Number(prompt("ilkin reqemi daxxil ele:"));   //BUNU HEC BASA DUSMEDM ((((
const exponent = Number(prompt("quvveti daxi ele:"));



alert(`ALINAN caVab: ${power(base, exponent)}`);
