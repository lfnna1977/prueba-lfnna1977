/**
 * Regular Expresion IndexOf for Arrays
 * This little addition to the Array prototype will iterate over array
 * and return the index of the first element which matches the provided
 * regular expresion.
 * Note: This will not match on objects.
 *
 * @param  {RegEx}   rx The regular expression to test with. E.g. /-ba/gim
 * @return {number} -1 means not found
 */
Array.prototype.regIndexOf = function (rx) {
    for (var i in this) {
        if (this[i].toString().match(rx)) {
            return i;
        }
    }
    return -1;
};