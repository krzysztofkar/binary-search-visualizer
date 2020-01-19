const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;
  target = parseInt(target);

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (target == array[guess].id) {
      return console.log("Target was found at index " + guess);
    } else if (target > array[guess].id) {
      min = guess + 1;
    } else if (target < array[guess].id) {
      max = guess - 1;
    }
  }
  return "Target value not found in array";
};

export default binarySearch;
