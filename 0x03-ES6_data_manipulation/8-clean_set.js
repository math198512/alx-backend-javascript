export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let cleanString = '';
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      cleanString += `${value.slice(startString.length)}-`;
    }
  }
  return cleanString.slice(0, cleanString.length - 1);
}
