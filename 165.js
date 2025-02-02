/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1s = version1.split("."), v2s = version2.split(".")

    let len = Math.max(v1s.length,v2s.length)

    for(let i = 0; i < len; i++){
        let v1 = v1s[i] ?? "0", v2 = v2s[i] ?? "0";
        let v1i = parseInt(v1), v2i = parseInt(v2)
        let diff = v1-v2;
        if(diff === 0)
            continue;
        return diff < 0 ? -1 : 1;
    }

    return 0
};
