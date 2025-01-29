// 1. Read json file

const input1 = require('./testcase-1.json');
const input2 = require('./testcase-2.json');

const runProgram = (input = input1) => {
    
    const n = input.keys.n;
    const k = input.keys.k;
    const roots = Object
        .entries(input)
        .filter(([key, value]) => key !== 'keys')
        .map(([key, value]) => ({
            x: +key,
            y: parseInt(value.value, +value.base),
        }));

       const lagrange = (roots) => {
        let result = 0;
        for (let i = 0; i < roots.length; i++) {
            let term = roots[i].y;
            for (let j = 0; j < roots.length; j++) {
                if (j !== i) {
                    term = term * (k - roots[j].x) / (roots[i].x - roots[j].x);
                }
            }
            result += term;
        }
        return result;
    }

    console.log(lagrange(roots));
}

runProgram(input1);
runProgram(input2);
