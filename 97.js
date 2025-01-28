/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

    // let cache = {};

    // const rec = (i1 = 0,i2 = 0) => {

    //     if(cache[[i1,i2]])
    //         return cache[[i1,i2]];

    //     let i3 = i1+i2;

    //     if(i3 === s3.length){
    //         cache[[i1,i2]]=true
    //         return true;
    //     }
            
    //     let temp = false;
    //     temp = temp || ((s1[i1] === s3[i3]) && rec(i1+1,i2));
    //     temp = temp || ((s2[i2] === s3[i3]) && rec(i1,i2+1));

    //     cache[[i1,i2]] = temp;
    //     return temp;
    // }

    // return rec()

    let i1 = s1.length, i2 = s2.length;
    
    if(i1+i2 !== s3.length)
        return false;

    let arr = Array.from({length:i1+1},()=>new Array(i2+1).fill(false));

    arr[i1][i2] = true;

    for(let i = i1-1; i >= 0 ; i--){
        arr[i][i2] = ((s1[i] === s3[i + i2]) && arr[i+1][i2]);
    }

    for(let i = i2-1; i >= 0 ; i--){
        arr[i1][i] = ((s2[i] === s3[i + i1]) && arr[i1][i+1]);
    }

    for(let ptr1 = i1-1; ptr1 >=0 ; ptr1--){
        for(let ptr2 = i2-1; ptr2 >=0; ptr2--){
            arr[ptr1][ptr2] = ((s1[ptr1] === s3[ptr1 + ptr2]) && arr[ptr1+1][ptr2])
                || ((s2[ptr2] === s3[ptr2 + ptr1]) && arr[ptr1][ptr2+1]);
        }
    }
    
    return arr[0][0];
};
