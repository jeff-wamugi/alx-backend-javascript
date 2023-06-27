export default function uploadPhoto(filename) {
  const rejProm = Promise.reject(new Error(`${filename} cannot be processed`));
  rejProm.catch(() => {});
  return rejProm;
}
