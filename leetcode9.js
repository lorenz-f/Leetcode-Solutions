function isPalindrome(number) {
    let numString = number.toString();
    let string1, string2;
    numString.length % 2 !== 0 
    // checking for an even or odd number of amount of characters in the given answer and slicing/cross-referencing each half thusly
    ? [string1, string2] 
    = [numString.slice(0, numString.length / 2), 
      numString.slice(numString.length / 2 + 1, numString.length)]    
    : [string1, string2] 
    = [numString.slice(0, numString.length / 2), 
      numString.slice(numString.length / 2, numString.length)]
    let [check1, check2] = [string1, string2.split("").reverse().join("")];
    return check1 === check2;
}

// test condition
console.log(isPalindrome(123454321));
