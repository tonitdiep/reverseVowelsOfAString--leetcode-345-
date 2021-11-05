345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0,
        right = s.length - 1;
    s = s.split("")
    let leftStr = '',
        rightStr = '';
    
    while (left < right) {

        if ((vowels.indexOf(s[left]) !== - 1) && (vowels.indexOf(s[right]) !== - 1 )) {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--

//         if (){
            
//         }   
    }
    return s.join("")
};