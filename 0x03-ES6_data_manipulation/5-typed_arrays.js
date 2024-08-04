export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer, 0, length);
  const myArr = new Int8Array(buffer);
  myArr[position] = value;
  return data;
}
