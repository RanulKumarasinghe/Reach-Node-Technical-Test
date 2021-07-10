/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: O(n)
// Explain: The function below is doing linear passes through the string

module.exports = function reverseWordsInSentence(input) {
  return input.split("").reverse().join("").split(" ").reverse().join(" ");
};
