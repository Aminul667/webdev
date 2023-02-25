// function expression
const add1 = function add(num1, num2){
    const total = num1 + num2;
    return total;
}

// function expression with anonymous function
const add2 = function (num1, num2){
    const total = num1 + num2;
    return total;
}

// arrow function
const add3 = (first, second) => first + second;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));