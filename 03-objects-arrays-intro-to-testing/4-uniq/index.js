/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (arr === undefined) return [];
  if (!arr.length) return [];
  return arr.reduce((val, key) => {
    if (!val.includes(key)) {
      val.push(key);
    }
    return val;
  }, []);
}
