function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return result
            }
        }
    }

    return result;
}

console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([0,0,0], 1))
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))