function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Initialize closestSum with a large value

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer for the element next to arr[i]
    let right = arr.length - 1; // Pointer for the last element in the array

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum; // Update closestSum if the current sum is closer to the target
      }

      if (sum === target) {
        return sum; // Found an exact match, return the target sum
      } else if (sum < target) {
        left++; // Increment left pointer to increase the sum
      } else {
        right--; // Decrement right pointer to decrease the sum
      }
    }
  }

  return closestSum; // Return the sum closest to the target
}

module.exports = threeSum;
