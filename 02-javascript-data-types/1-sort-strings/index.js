/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  const arrParams = {
    asc: 1,
    desc: -1,
  };
  return [...arr].sort((a, b) => {
    return (
      arrParams[param] *
      a.localeCompare(b, ["ru-RU", "en-US"], { caseFirst: "upper" })
    );
  });
}
