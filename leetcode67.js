function addBinary(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}

// updated in accordance with E56 conventions
