// Solution function
function rot13(str) {
    // alphabets will be used to identify the letter
    // position
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // key will be used to shift the letter key times
    let key = 13;
    // res will be used to store the result
    let res = "";
    // Loop through the given string
    for (let i = 0; i < str.length; i++) {
        // Check if str[i] is not a letter, if
        // true add str[i] to res and continue the loop
        if (/[^A-Z]/.test(str[i]) == true) {
            res += str[i];
            continue;
        }
        // Loop through alphabets and shift each letter
        // by key times
        for (let m = 0; m < alphabets.length; m++) {
            // Check if str[i] is equal to alphabets[m]
            if (str[i] == alphabets[m]) {
                // Check if m + key position falls under
                // the 26 letters of alphabets
                if (m + key < 26) {
                    // If true, add alphabets[m + key] to res
                    res += alphabets[m + key];
                } else {
                    // If false, move the position in circular manner
                    // by taking the mode of (m + key) with alphabets 
                    // length
                    res += alphabets[(m + key) % alphabets.length];
                }
            }
        }
    }
    // Return output array
    return res;
}

// Driver code
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));