
// Solution function
function convertToRoman(num) {
    // Store common numerals in arabicNumerals and commonNumerals array 
    let arabicNumerals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let commonNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    // Use romanNumeral to store the results
    let romanNumeral = "";

    // Recursively find the roman numeral
    function convert(num) {
        // return if num is equal to 0
        if (num == 0) {
            return
        }
        // Loop through the common numerals, extract the common numeral from num and call the convert function
        for (let i = 0; i < arabicNumerals.length; i++) {
            // Check if num is equal to arabicNumerals[i]
            // Check if num is bigger than arabicNumerals[i] and i is equal to arabicNumerals.length - 1
            // Check if num is in range of arabicNumerals[i] and arabicNumerals[i+1]
            if ((num == arabicNumerals[i]) || (num > arabicNumerals[i] && i == arabicNumerals.length - 1) || (num > arabicNumerals[i] && num < arabicNumerals[i + 1])) {
                // Add common roman numeral to romanNumeral variable
                romanNumeral += commonNumerals[i];
                // Extract arabicNumerals[i] from num
                num = num - arabicNumerals[i];
                // Call convert recursively
                convert(num);
            }
        }
    }
    convert(num)
    // Return romanNumeral
    return romanNumeral;
}

// Driver code
console.log(convertToRoman(3999));
convertToRoman(3999);