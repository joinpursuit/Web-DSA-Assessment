/*
# Find Common Characters

Given an array words of strings made only from lowercase letters,
return a list of all characters that show up in all strings within the list
(including duplicates).  For example, if a character occurs 3 times in all
strings but not 4 times, you need to include that character three times in
the final answer.

You may return the answer in any order.

Example 1:
Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: ["cool","lock","cook"]
Output: ["c","o"]

Notes:
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.

*/

/**
 * Find the common characters in an array of strings
 *  @param {string[]} words An array of word strings
 * @return {string[]} An array of characters
 */
const findCommonChars = (words) => {
    let blueprint = createMap(words[0]);
    let output = []

    for(let word of words) {
        let filter = {};
        
        for(let letter  of word) {
            if(blueprint[letter]) {
                blueprint[letter]--

                if(filter[letter]) filter[letter]++
                else filter[letter] = 1
            }
        }
        blueprint = filter
    }

    for(let key in blueprint) {
        let occurences = key.repeat(blueprint[key]).split('')
        output.push(...occurences)
    }

    return output
    

};

function createMap (word)  {
    let map = {};
    for(let letter of word) {
        if(map[letter]) map[letter]+=1
        else map[letter]=1
    }

    return map;
}



module.exports = findCommonChars
