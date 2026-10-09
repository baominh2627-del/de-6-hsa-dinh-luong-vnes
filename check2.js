const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
console.log("Has meta UTF-8?", html.includes('<meta charset="UTF-8" />'));
console.log("Has title?", html.match(/<title>.*?<\/title>/)[0]);
console.log("Has BOM?", html.charCodeAt(0) === 0xFEFF);
