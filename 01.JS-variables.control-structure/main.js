// Task-1

let number = 342;
let a = 3;
let b = 4;
let c = 2;
console.log(
  `sum:${a + b + c} , multiply:${a * b * c}  , average:${a + b + c}/3`
);

// //TASK-2
let num = 40;
for (i = 0; i <= 40; i++) {
  if (num % i === 0) console.log(i);
}
//TASK-3
let number1 = 0;
for (let i = 1; i <= 40; i++) {
  num % i === 0 && number1++;
}
console.log(number1);
//TASK-4
for (let i = 0; i <= 10; i++) {
  console.log(`${i} *${i} = ${i ** 2}`);
}
//TASK-5
console.log(`i i^2 i^3`);
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2}  ${i ** 3}`);
}
//TASK-6   0-100 arasi yalniz sade ededleri consolede cap edin
//TASK-7  0-100 arasi tek ededlerin ve cut ededlerin cemini tapin
let tek = 0;
let cut = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    tek = tek + i;
  } else {
    cut = cut + i;
  }
}
console.log("tek:", tek);
console.log("cut:", cut);
