const person = {
    name:'Almas',
    age: 27,
    role: "Executive"
};

console.log(person);

const {name, age} = person;
console.log(name);
console.log(age);

// array destructing
const [a, b] = [44, 25, 40, 30];
console.log(a, b);