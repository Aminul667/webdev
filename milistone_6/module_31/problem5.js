const squareSum = (numbers) => {
    let sum = 0;
    for(let number of numbers){
        sum += number**2;
    }
    const average = sum/numbers.length;
    return average;
}

console.log(squareSum([1,2,3]));