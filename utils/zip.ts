/**
 * Zips any number of arrays. It will always zip() the largest array returning undefined for shorter arrays.
 * @param  {...Array<string>[]} arrays
 */
export default function* zip(...arrays: Array<string>[]) {
  const maxLength = arrays.reduce(
    (max, curIterable) => curIterable.length > max ? curIterable.length : max,
    0,
  );
  for (let i = 0; i < maxLength; i++) {
    yield arrays.map((array) => array[i]);
  }
}
