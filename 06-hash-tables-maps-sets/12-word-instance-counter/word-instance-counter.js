const HashTable = require('../11-custom-hash-table/custom-hash-table');

function wordInstanceCounter(str, word) {
    const words = str.toLowerCase().split(/\W+/);
    
    const wordFrequency = new HashTable();
    const targeWord = word.toLowerCase();

    let count = 0;

    for (const currentWord of words){
        if (currentWord === '') continue;
        if(wordFrequency.has(currentWord)){
            wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
        } else {
            wordFrequency.set(currentWord, 1);
        }
        if (currentWord === targeWord) {
            count = wordFrequency.get(currentWord);
        }
    }
    return count;
}

module.exports = wordInstanceCounter;
