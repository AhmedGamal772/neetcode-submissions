class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = new Map();

        for(let i =0; i < nums.length; i++){

            let mapCheck = target-nums[i]

            if(map.has(mapCheck)){
                return [map.get(mapCheck),i];
            }
            map.set(nums[i],i)
        }
    }
}
