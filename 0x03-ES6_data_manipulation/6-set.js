export default function setFromArray(array) {
  const mySet = new Set();
  for (let i = 0; i < array.length; i += 1) {
    mySet.add(array[i]);
  }
  return mySet;
}
