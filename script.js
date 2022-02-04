// function test(...args){
// let numbersSum = 0;

// for(let item of args){
//   numbersSum = numbersSum + item;
// }
// console.log(numbersSum);
// }

// test (10, 50, 6, 7, 8, 11, 6, 3, 9)


function test(...args){
let numbersSum = 0;

for(let item of args){
  numbersSum = numbersSum + item;
}
     if (numbersSum > 0) {
       console.log(numbersSum);
  }
}
  test(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)