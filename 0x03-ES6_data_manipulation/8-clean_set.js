export default function cleanSet(set, startString) {
  if (!startString || !(set instanceof Set) || typeof startString !== 'string') { return ''; }

  const strArr = [];
  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString) && elem !== startString) {
      strArr.push(elem.slice(startString.length));
    }
  }

  return strArr.join('-');
}
