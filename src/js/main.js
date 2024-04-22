const fruitList = [
  "apple",
  "orange",
  "banana",
  "grape",
  "strawberry",
  "kiwi",
  "pineapple",
  "watermelon",
  "mango",
  "pear",
  "peach",
  "plum",
  "cherry",
  "blueberry",
  "raspberry",
  "blackberry",
  "lemon",
  "lime",
  "coconut",
  "pomegranate",
];

console.group('forEach')
// print list with classic for
for( let i = 0;i<fruitList.length; i++) {
    console.log(fruitList[i]);
}
console.log('');
fruitList.forEach((fruta) => console.log(fruta.toUpperCase()));
console.log('');
fruitList.forEach((fruta) => console.log(fruta.toLowerCase()));
console.groupEnd();


console.group('for In')
for (let key in fruitList) {
    console.log(key);
};

console.log('');

for (let key in fruitList) {
    console.log(fruitList[key]);
};

console.log('');

//en el forEach, cuando se le pasan dos argumentos al callback esta despliega el valor y el indice de cada elemento, en ese ordend e variables respectivamente.
fruitList.forEach((element, index) => {
     console.log(`the fruit ${element} is in the ${index} position`)
});
console.groupEnd()
console.log(' ');
console.group('for of');
for (fruit of fruitList) {
    console.log(fruit);
};
console.groupEnd()
