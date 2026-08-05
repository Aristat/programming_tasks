function isAnagram(s: string, t: string): boolean {
    const sMap = new Map()
    const tMap = new Map()
    if (s.length != t.length) return false

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
    }

    for (const [key, value] of sMap) {
        if (tMap.get(key) != value) return false
    }

    return true
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
