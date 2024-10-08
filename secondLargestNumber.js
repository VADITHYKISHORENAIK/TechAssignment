function findSecondLargest(arr) {
  if (arr.length < 2) return null; // Edge case: less than 2 elements

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const array = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
console.log("Second largest element:", findSecondLargest(array));
