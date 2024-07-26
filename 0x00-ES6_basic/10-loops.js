export default function appendToEachArrayValue(array, appendString) {
  const temp = [];

  for (let elem of array) {
    const value = elem;
    elem = appendString + value;
    temp.push(elem);
  }

  return temp;
}
