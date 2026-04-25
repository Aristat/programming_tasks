function searchRange(nums: number[], target: number): number[] {
    let result: number[] = []

    let found = false
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            if (!found) result.push(i)
            result.length != 2 ? result.push(i) : result[1] = i
            found = true
        } else if (nums[i] > target && found) {
            result[1] = i - 1
            return result
        }
    }

    return result.length == 0 ? [-1, -1] : result;
}

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
