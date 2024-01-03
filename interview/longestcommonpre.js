function longestCommonPrefix(strings) {
    if (!strings.length) return "";
    
    // Sort the array
    strings.sort();
    
    // Find the common prefix
    let commonPrefix = "";
    for (let i = 0; i < strings[0].length; i++) {
        if (strings[0][i] !== strings[strings.length - 1][i]) break;
        commonPrefix += strings[0][i];
    }
    
    return commonPrefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"]))