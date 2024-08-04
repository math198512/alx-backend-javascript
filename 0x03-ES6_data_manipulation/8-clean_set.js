export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let cleanString = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanString = cleanString.concat(value.slice(startString.length)).concat('-');
    }
  }
  return cleanString.slice(0, -1);
}
