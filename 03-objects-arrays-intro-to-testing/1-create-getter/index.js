/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(field) {
  let arr = field.split(".");
  return (evt) => {
    let res = evt;
    for (const key of arr) {
      if (res === undefined) break;
      res = res[key];
    }
    return res;
  };
}
