function maximumWealth(accounts) {
    let max = 0;
    for (i in accounts) {
        // reducer function to cross-compare all accounts supplied in the function call
        let maxCompare = accounts[i].reduce((x, y)w => (x + y), 0);
        max = max < maxCompare ? maxCompare : max;
    }
    return max;
};
