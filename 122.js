/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let prev = prices[0], sum = 0;

    for(let i = 1; i < prices.length; i++){
        let diff = prices[i] - prev;
        if(diff > 0){
            sum += diff;
        }

        prev = prices[i]
    }
    
    return sum
};
