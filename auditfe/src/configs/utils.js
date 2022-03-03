/**
 * @desc Function takes an array of objects and sorts them by the key given
 * @param {string} key: a property of the object which may vary between objects
 * @param {array} arr: the array containing the objects
 * @returns  (type, [{id:1, type: type1},...]) => {type1: [{obj},...],...}
 */
export function groupBy(key, arr) {
    const valueSet = new Set()
    const valueDict = {}
    
    arr.forEach(item => {
        const value = item[key]
        if (valueSet.has(value)) {
            valueDict[value].push(item)
        }else {
            valueSet.add(value)
            valueDict[value] = [item]
        }
    })
    return valueDict
}