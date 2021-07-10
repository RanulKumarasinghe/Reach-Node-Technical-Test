/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: O(n^2)
// Explain: It is a bubble sort function which contains two loops and the best time complexity can be O(n) if the array was sorted

module.exports = function sortArray(arr) {
  var finish = false;
  if(arr.length === 0){
    return arr;
  } else if(arr.every(Number.isInteger) === false){
    throw new TypeError()
  } else {
    while(!finish){
      finish = true;
      for (var i = 0; i < arr.length; i++) {
        if(arr[i - 1] > arr[i]){
          finish = false;
          var tmp = arr[i-1];
          arr[i-1] = arr[i];
          arr[i] = tmp;
        }
      }
    }
    return arr;
  }

};
