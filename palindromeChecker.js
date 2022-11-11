// Solution function
function palindrome(str) {
    // Convert given string to lower case english letters and extract the valid 
    // string exclusing the special characters using the regular expression
    let lowerMatchedStr = str.toLowerCase().match(/[A-Za-z0-9]+/g);
    // Join the matched string array
    let testStr = lowerMatchedStr.join("");
    /* 
        Use two pointers to move in a string
            1. firstPointer to iterate from start to end
            2. secondPointer to iterate from end to start
    */
    let secondPointer = testStr.length - 1;
    // Loop through the testStr
    for (let firstPointer = 0; firstPointer < testStr.length; firstPointer++) {
        // Check if character from the start and the end is same
        if (testStr[firstPointer] != testStr[secondPointer]) {
            return false;
        }
        // Break the loop if first and second pointer meet eachother
        if (firstPointer == secondPointer) {
            break;
        }
        // Decrement the secondPointer
        secondPointer--;
    }
    // Return true if the string is a palindrome
    return true;
}

// Check solution function
console.log(palindrome("1 eye for of 1 eye."));