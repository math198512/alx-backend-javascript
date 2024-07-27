export default function iterateThroughObject(reportWithIterator) {
  let result = `${reportWithIterator[0]}`;
  for (let i = 1; i < reportWithIterator.length; i += 1) {
    result += ` | ${reportWithIterator[i]}`;
  }
  return result;
}
