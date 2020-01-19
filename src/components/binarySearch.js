const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;
  target = parseInt(target);
  let i = 1;
  while (min <= max) {
    let guess = Math.floor((min + max) / 2);
    setTimeout(() => {
      array[guess].style.backgroundColor = "red";
    }, 1000 * i);
    i++;
    if (target == array[guess].id) {
      setTimeout(() => {
        array[guess].style.backgroundColor = "green";
      }, 1000 * i);
      return console.log("Target was found at index " + guess);
    } else if (target > array[guess].id) {
      for (let x = 0; x <= array[guess].id; x++) {
        setTimeout(() => {
          array[x].style.backgroundColor = "grey";
        }, 1000 * i);
      }
      min = guess + 1;
    } else if (target < array[guess].id) {
      for (let x = array[guess].id - 1; x <= array.length - 1; x++) {
        setTimeout(() => {
          array[x].style.backgroundColor = "grey";
        }, 1000 * i);
      }
      max = guess - 1;
    }
  }
  return "Target value not found in array";
};

export default binarySearch;
