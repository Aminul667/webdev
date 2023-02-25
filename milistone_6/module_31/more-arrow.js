const add = (first, second) => first + second;
const multiplay = (first, second) => first * second;
const fullName = (first, second) => first + " " + second;

console.log(add(10, 20));
console.log(multiplay(10, 20));
console.log(fullName("Hello", "World"));

// no parameter arrow function
const getPie = () => 3.14;
console.log(getPie());

// multiline arrow function
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplay = firstSum * secondSum;
  const result = multiplay / 2;
  return result;
};

console.log(doMath(1, 2, 3));
