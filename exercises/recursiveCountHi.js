/*
# recursiveCountHi

Return the number of times that the string "hi" appears anywhere in the given string.

Solution must be recursive. (no while or for loops)

Examples:
recursiveCountHi('abc hi ho') → 1
recursiveCountHi('ABChi hi') → 2
recursiveCountHi('hihi') → 2

Notes:
* We are only interested in lowercase "hi"s

*/

/**
 * Count how many "hi"s there are in a string recursively
 * @param {string} str A string of charters
 * @return {number} The total number of "hi"s in the string
 */
const recursiveCountHi = (str) => {
   
    if(str.length < 2) return 0

    const sub = str.substring(0,2);

    if(sub === "hi")return 1 + recursiveCountHi(str.substring(1));
    else return recursiveCountHi(str.substring(1));
    
}

module.exports = recursiveCountHi
