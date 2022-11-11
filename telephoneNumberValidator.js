// Solution function
function telephoneCheck(str) {
    // Create a regular expression that matches
    // exactly the valid phone number
    let regex = /^(1\s|1)?(\([0-9]{3}\)|[0-9]{3})[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}$/g;
    // Test the regular expression using test function
    return regex.test(str);
}

// Driver code
console.log(telephoneCheck("27576227382"));