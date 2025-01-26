/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let maps = strs.map((str)=>{
        let bukkit = new Array(26).fill(0)

        for(const c of str){
            bukkit[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }

        return [bukkit,str];
    })

    let group = {}

    for(const [i,str] of maps){
        if(group[i])
            group[i].push(str)
        else
            group[i] = [str]
    }

    return Object.values(group);
    
};
