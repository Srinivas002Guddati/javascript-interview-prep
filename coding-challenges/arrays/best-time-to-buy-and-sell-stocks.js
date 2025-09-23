

//Best time to busy and sell stock

//Input: [7, 1,5,3,6,4];
//output: 5

let prices = [ 7, 1, 5, 3, 6, 4];

function maxProfit(prices){
    let min = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length; i++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min;
        }
        if(prices[i]<min){
            min = prices[i]
        }
    }
    return maxProfit;
};

console.log(maxProfit(prices));