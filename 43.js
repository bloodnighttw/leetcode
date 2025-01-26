/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    let a = BigInt(num1), b = BigInt(num2)

    return (a*b).toString()
    
};
