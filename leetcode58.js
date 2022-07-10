function lengthOfLastWord(s) {
    let [arr1, arr2] = [s.split(" "), []];
    for (let i in arr1) {
      if (arr1[i] !== "") {
        arr2.push(arr1[i])
      }
    }
    // check for last result in given phrase, setting lastWord to the last result
    let lastWord = arr2[arr2.length - 1]
    return lastWord.length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))
