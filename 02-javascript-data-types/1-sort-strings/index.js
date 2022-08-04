/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export  function sortStrings(arr, param = "asc") {
  return [...arr].sort((a, b) => {
     if (param === "asc") {
     return a.localeCompare(b, ["ru-RU", "en-US"], { caseFirst: "upper" })}
    return b.localeCompare(a, ["ru-RU", "en-US"], { caseFirst: "upper" })
   });
 }
