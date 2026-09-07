class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let arr = prices;
        let lowestday=arr[0];

        let bestProfit = 0;

        for(let i = 1;i<arr.length;i++){
            if(arr[i]<lowestday){
                lowestday=arr[i]
            }
            if(bestProfit<(arr[i]-lowestday)){
                bestProfit=arr[i]-lowestday
            }
        }
        return bestProfit
    }
}
