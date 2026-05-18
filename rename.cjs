const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
};

const allFiles = [
  ...walk('./src'),
  './index.html',
  './metadata.json',
  './package.json'
];

allFiles.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html') || file.endsWith('.json')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/Legend Pest Control/g, 'Prime Pest Control');
    content = content.replace(/The Legend Difference/g, 'The Prime Difference');
    content = content.replace(/Trust the Legend/g, 'Trust Prime');
    content = content.replace(/at Legend,/g, 'at Prime,');
    content = content.replace(/team at Legend/g, 'team at Prime');
    content = content.replace(/Legend Assistant/g, 'Prime Assistant');
    content = content.replace(/info@legendpestcontroltx\.com/g, 'info@primepestcontroltx.com');
    content = content.replace(/The Man, The Myth, The Legend\./g, 'Unmatched Expertise.');
    
    if (content !== original) {
      console.log('Updated text in', file);
      fs.writeFileSync(file, content, 'utf8');
    }
  }
});
