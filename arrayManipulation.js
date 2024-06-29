// arrayManipulation.js

/**
 * Transforms an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The new array with transformed numbers.
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage
const inputArray = [11, 12, 13, 14, 15];
 const result = processArray(inputArray);
console.log(result); // Output: [33, 144, 39, 196, 45]




//task 2
// arrayManipulation.js

/**
 * Transforms an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The new array with transformed numbers.
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

/**
 * Modifies an array of strings based on a corresponding array of numbers.
 * @param {string[]} strings - The array of strings to format.
 * @param {number[]} numbers - The array of numbers to guide formatting.
 * @returns {string[]} - The new array with formatted strings.
 */
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error('Arrays must be of the same length');
    }
    
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage
const strings = ["hey", "bro", "Life", "is", "good"];
const numbers = [2, 3, 4, 5, 6];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log('Processed Numbers:', processedNumbers);  
console.log('Formatted Strings:', formattedStrings);  





