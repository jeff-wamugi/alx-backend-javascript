export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  // set count to 1 if weakMap.get is undefined and gives NAN
  const count = weakMap.get(endPoint) + 1 || 1;
  weakMap.set(endPoint, count);

  if (count >= 5) { throw Error('Endpoint load is high'); }
}
