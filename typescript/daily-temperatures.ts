function dailyTemperatures(temperatures: number[]): number[] {
    let n: number = temperatures.length;
    let result: number[] = new Array(n).fill(0);
    let stack: number[] = [];

    for (let i: number = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let j: number = stack.pop();
            result[j] = i - j;
        }
        stack.push(i);
    }

    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30,40,50,60]));
console.log(dailyTemperatures([30,60,90]));
