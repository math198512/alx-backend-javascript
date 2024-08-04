export default function hasValuesFromArray(set, array) {
  let bool = false;
  for (let i = 0; i < array.length; i += 1) {
    if (set.has(array[i]) === true) {
      bool = true;
    } else {
      return false;
    }
  }
  return bool;
}
