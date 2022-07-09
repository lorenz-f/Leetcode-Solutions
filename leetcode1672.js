function maximumWealth(accounts) {
    let max = 0;
    for (i in accounts) {
        let maxCompare = accounts[i].reduce((x, y) => (x + y), 0);
        max = max < maxCompare ? maxCompare : max;
    }
    return max;
};
