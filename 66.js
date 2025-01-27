/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let idx = digits.length - 1;

    digits[idx]++;

    let one = false;

    do{
        let dig = digits[idx] + (one ? 1 : 0)
        digits[idx] = dig % 10;
        one = dig >= 10;
        idx--;
    }while(one && idx >= 0)

    if(one)
        return [1,...digits]
    else
        return digits

};
