const fs = require('fs');
const path = require('path');

const targetClasses = 'text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const tagRegex = /<(h1|h2)\b([^>]*)className=["']([^"']+)["']([^>]*)>/g;

  content = content.replace(tagRegex, (match, tag, beforeClass, classNameStr, afterClass) => {
    // Split classes by whitespace
    let classes = classNameStr.split(/\s+/);
    
    // Filter out ANY class starting with text- (if it represents size), sm:text-, md:text-, lg:text-, xl:text-, 2xl:text-
    classes = classes.filter(c => {
      // Keep color classes like text-white, text-brand, text-gray-400, text-transparent etc.
      if (c.match(/text-(white|black|transparent|current|brand|gray|blue|red|green|yellow|indigo|purple|pink)/)) return true;
      
      // Keep text-center, text-left, text-right, text-justify
      if (c.match(/text-(center|left|right|justify)/)) return true;
      
      // Remove text sizing classes
      if (c.match(/^(sm:|md:|lg:|xl:|2xl:)?text-/)) return false;
      
      return true;
    });

    // Add exactly the requested classes
    const finalClasses = [targetClasses, ...classes].join(' ');
    changed = true;
    
    return `<${tag}${beforeClass}className="${finalClasses}"${afterClass}>`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        walkDir(fullPath);
      }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir('./src');
console.log('Fixed exactly!');
