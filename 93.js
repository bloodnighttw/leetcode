/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

    let ans = new Set()

    const brute = (str=s,prev = [])=>{
        if(prev.length === 4){
            if(str === "")
                ans.add(prev.join("."))
            return
        }

        let i = 1;

        while(i <= 3){
            let tempStr = str.slice(0,i)
            let otherStr = str.slice(i)
            let int = parseInt(tempStr)

            if(int.toString() !== tempStr)
                return
            
            if( int > 255 )
                return

            prev.push(tempStr)
            brute(otherStr,prev)
            prev.pop()

            i++;
        }
    }

    brute()

    return Array.from(ans)
    
};
