const maxOfTwoArray = (array1, array2) => {
    const newArray = [...array1, ...array2];
    maxNumber = Math.max(...newArray);
    return maxNumber;
}

console.log(maxOfTwoArray([1,2,3], [4,5,6]));