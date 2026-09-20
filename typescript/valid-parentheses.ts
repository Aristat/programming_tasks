function isValid(s: string): boolean {
    let stack: string[] = [];
    const openParentheses = ['(', '{', '['];
    const closeParentheses = [')', '}', ']'];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (openParentheses.includes(char)) {
            stack.push(char);
        } else if (closeParentheses.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            const lastOpenParenthesis = stack.pop();
            if (openParentheses.indexOf(lastOpenParenthesis) !== closeParentheses.indexOf(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])'));
console.log(isValid('([)]'));
