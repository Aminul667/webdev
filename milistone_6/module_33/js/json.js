const user = { id: 1, name: "Rahat" };
const stringified = JSON.stringify(user);
const obj = JSON.parse(stringified);

console.log(user);
console.log(stringified);
console.log(obj);