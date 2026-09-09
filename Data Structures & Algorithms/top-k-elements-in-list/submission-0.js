class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();
            let n =1;

        for(let x of nums){
            if(map.has(x)){
                let currentN = map.get(x)
                map.set(x,currentN+1)
            }else{
                map.set(x,n)
            }
        }

        let arr = [...map.keys()].sort( (a,b)=>(map.get(b)-map.get(a)) );
        let returnarr = []
        for(let i =0; i<=k-1;i++){
            returnarr.push(arr[i]);
        }
        return returnarr;
    }
}