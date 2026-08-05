function groupAnagrams(strs: string[]): string[][] {
    const map = new Map()
    for (let str of strs) {
        const arr: number[] = new Array(26)
        for (let char of str) {
            arr[char.charCodeAt(0) - 97] ||= 0
            arr[char.charCodeAt(0) - 97]++
        }

        const uniqStr: string = arr.join(',')
        map[uniqStr] ||= []
        map[uniqStr].push(str)
    }

    return Object.values(map)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
