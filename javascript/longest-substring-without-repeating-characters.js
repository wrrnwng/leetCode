/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var count = 0;
    var usedLetters = {};
    var lastIndex = 0;
    
    var setLongest = function() {
        if (count > longest) {
            longest = count;
        }
    };
    
    var deleteLetters = function(letterPosition, letters) {
        for (var index = lastIndex; index < letterPosition; index++) {
            delete usedLetters[letters[index]];
        }
    };
    
    s.split('').forEach(function(letter, i, letters) {
        if (usedLetters[letter] === undefined) {
            usedLetters[letter] = i;
            count++;
            setLongest();
        } else {
            setLongest();
            deleteLetters(usedLetters[letter], letters);
            count = i - usedLetters[letter];
            lastIndex = usedLetters[letter] + 1;
            usedLetters[letter] = i;
        }
    });
    return longest;
};