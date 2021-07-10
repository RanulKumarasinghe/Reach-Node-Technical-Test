// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: O(1)
// Explain: Since the function has only an addition operation it will run at a constant time.


module.exports = function createBase(integer) {
  function base(num) {
    return num + integer;
   };
 return base;
};
