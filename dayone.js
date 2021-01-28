'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let freqs = {};
    a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); 
    b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1); 
    return Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0);
  
}
  
  console.log(makeAnagram('loveagood', 'challenge')); 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
