// Run after Jekyll build; no browser or network dependencies.
const fs = require('fs');
const path = require('path');
let count = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (file.endsWith('.html')) {
      const html = fs.readFileSync(file,'utf8');
      for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (/\bsrc=|application\/ld\+json/.test(match[1])) continue;
        new Function(match[2]); count++;
      }
    }
  }
}
walk('_site');
const feedback = fs.readFileSync('_site/feedback.html','utf8');
const code = feedback.slice(feedback.indexOf('const GARDEN_BASE'), feedback.indexOf('function normalize(row)'));
const gardenURL = new Function(code + '; return gardenURL;')();
const cases = [
 ['assets/lab.jpg','/writing/assets/lab.jpg'],
 ['/assets/lab.jpg','/writing/assets/lab.jpg'],
 ['https://helenyglover.com/writing/assets/lab.jpg','/writing/assets/lab.jpg'],
 ['https://helengarden.netlify.app/making-of-civic-tech','/writing/making-of-civic-tech'],
 ['https://helengarden.netlify.app/questions-worth-getting--in','/writing/research-outcomes'],
 ['/feedback.html','/writing/feedback'],
 ['a-playbook-for-the-community.md','/writing/a-playbook-for-the-community'],
 ['/writing/a-playbook-for-the-community?x=1#section','/writing/a-playbook-for-the-community?x=1#section'],
 ['https://example.com/image.jpg','https://example.com/image.jpg'],
 ['https://helenyglover.com/','https://helenyglover.com/'],
 ['','']
];
for (const [input, expected] of cases) {
 const actual = gardenURL(input);
 if (actual !== expected) throw Error(input + ': ' + actual + ' != ' + expected);
}
console.log('PASS: ' + count + ' inline scripts parse; ' + cases.length + ' feedback URL normalization cases.');
