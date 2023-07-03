export default function createInt8TypedArray(length, position, value) {
  // creating a new buffer
  const buffer = new ArrayBuffer(length);

  // creating the data view
  const dataView = new DataView(buffer, 0, length);

  try {
    // setting the val at given offset or index
    dataView.setUint8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }

  return dataView;
}
