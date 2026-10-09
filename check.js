const fs = require('fs');

let text = fs.readFileSync('data.js', 'utf8');

console.log("data.js q1 check:");
console.log(text.includes('Có bao nhiêu số')); // expected true if well formed
console.log(text.includes('CÃ³ bao nhiÃªu sá»‘')); // expected true if mojibake saved in utf8

console.log("\ndata.js q50 check:");
console.log(text.includes('Có bao nhiêu giá trị nguyên')); // expected true if well formed
console.log(text.includes('CÃ³ bao nhiÃªu giÃ¡ trá»‹')); // expected true if mojibake saved in utf8
