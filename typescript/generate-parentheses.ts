function recursive(n: number, open: number, close: number, result: string, results: string[]): void {
    if (open === n && close === n) {
        results.push(result);
        return;
    }

    if (open < n) {
        recursive(n, open + 1, close, result + "(", results);
    }

    if (close < open) {
        recursive(n, open, close + 1, result + ")", results);
    }
}

function generateParenthesis(n: number): string[] {
    const results: string[] = [];
    recursive(n, 0, 0, "", results);
    return results;
}

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
