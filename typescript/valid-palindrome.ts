function isPalindrome(s: string): boolean {
    if (s.length === 0) return true;

    let cleanS: string = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase()
        const charCode: number = char.charCodeAt(0)
        if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122) ) {
            cleanS += char
        }
    }

    let left: number = 0;
    let right: number = cleanS.length - 1;
    let valid: boolean = true;
    for (let i = 0; i < Math.floor(cleanS.length / 2); i++) {
        if (cleanS[left] != cleanS[right]) {
            valid = false
            break
        }

        left++
        right--
    }

    return valid
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
