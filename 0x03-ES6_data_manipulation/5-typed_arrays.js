export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer).setInt8(position, value);
  return buffer;
}
