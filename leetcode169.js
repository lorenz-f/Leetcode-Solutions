function majorityElement(array) {
    // stores a current max variable and the amount of times it has been iterated
    let max = 0, count = 0;
    for (let i = 0; i < array.length; i++) {
        if (count == 0) {
            max = array[i];
            count = 1;
        }
        else if(max == array[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return max;
};
