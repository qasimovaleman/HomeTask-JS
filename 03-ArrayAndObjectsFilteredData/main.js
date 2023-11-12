//

let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
//----1'ci hell:
//
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].name[0].toLowerCase() === "t") {
//     newArray.push(arr[i]);
//   }
// }
// console.log(newArray);
//----2'ci hell:
//
// let newArrays = arr.filter((item) => item.name[0].toLowerCase() === "t");
// console.log(newArrays);
//
// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
//- ---1'ci hell:
//
// let count = 0;
//  arr.forEach((elem) => {
//  if( elem.name[0].toLowerCase() === "t" && elem.name.slice(-1) === "t"){
//     count++;
//  }
// });
// console.log(count);
//----2'ci hell:
//
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   let elemName = arr[i].name.toLowerCase();
//   if (elemName[0] === "t" && elemName.slice(-1) === "t") {
//     count++;
//   }
// }
// console.log(count++);
// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// let keySum = 0;
// arr.forEach((elem) => {
//   if (elem.name[0].toLowerCase() === "t" && elem.name.slice(-1) === "t") {
//     keySum += elem.key;
//   }
// });
// console.log(keySum);
// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
//
// arr.filter((item) => {
//   if (item.name.slice(-1).toLowerCase() === "e") {
//     item.name = "SuperDev";
//   }
// });
//console.log(arr);
//
// 5) "name"-i en uzun olan obyekti tapin
//
// let longName = arr[0];
// arr.forEach((elem) => {
//   if (elem.name.length > longName.name.length) {
//     longName = elem;
//   }
// });
// console.log(longName);
//
// 6) "name"-i en uzun olan obyektin key'ni tapin

// let longName = arr[0];
// arr.forEach((elem) => {
//   if (elem.name.length > longName.name.length) {
//     longName = elem;
//   }
// });
// let keyName = longName.key;
// console.log(keyName);
// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
let filterObject = [];
arr.forEach((elem) => {
  if (elem.name[0].toLowerCase() === "l" && elem.key > 10) {
    filterObject.push(elem);
  }
});
console.log(filterObject);
