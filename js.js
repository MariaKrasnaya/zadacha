//Задача
let originalPrice = 3500;
let discountPercent = 15;

let discountAmount = (originalPrice * discountPercent) / 100;

let finalPrice = originalPrice - discountAmount;

console.log("Скидка составляет: " + discountAmount + " рублей");
console.log("Итоговая цена после скидки: " + finalPrice + " рублей");
