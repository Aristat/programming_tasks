function twoSum(nums: number[], target: number): number[] {
    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            return [i + 1, j + 1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))