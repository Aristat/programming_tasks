function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1])
    return sorted.slice(0, k).map(([key]) => key)
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2))
