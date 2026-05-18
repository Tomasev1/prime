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
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
};

const allFiles = walk('./src');

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  content = content.replace(/className="text-primary font-sans font-bold tracking-wider uppercase text-sm/g, 'className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm');
  
  if (content !== original) {
    console.log('Updated text in', file);
    fs.writeFileSync(file, content, 'utf8');
  }
});
