let number = prompt("Uc reqemli eded daxil edin:");
number = Number(number);
while (isNaN(number) || number < 100 || number > 999) {
    if (isNaN(number)) {
        number = prompt("Yanlis deyer uc reqemli eded daxil edin :");
    } else if (number < 100 || number > 999) {
        number = prompt("Yanlis eded daxil olundu. Uc reqemli eded daxil edin:");
    }
    number = Number(number);
}
let num1 = 0;
let num2 = 100;
while (num2 < 1000) {
    if (num2 % number === 0) {
        console.log(num2);
        num1 += num2;
    }
    num2++;
}
console.log(" " + number + ", Bolunen butun uc reqemli ededlerin cemi beraberdir " + num1);
let num3 = 90;
while (num3 + 10 < 1000) {
    num3 += 10;
    console.log(num3);
}
let num4 = 10
while (num4 < 100) {
    if (num4 % 2 !==0) {
        console.log(num4);
    }
    num4++;
}
