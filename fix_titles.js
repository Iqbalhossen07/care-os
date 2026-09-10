const fs = require('fs');
const path = require('path');

const targetClasses = 'text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl';

// Regex to match font size classes
const classRegex = /\b(?:sm:|md:|lg:|xl:|2xl:)?text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|\[.*?\])\b/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // We want to match <h1 ... className="..."> and <h2 ... className="...">
  const tagRegex = /<(h1|h2)\b[^>]*className=["']([^"']+)["'][^>]*>/g;

  content = content.replace(tagRegex, (match, tag, classNameStr) => {
    // Remove all existing text size classes
    let newClassName = classNameStr.replace(classRegex, '').trim();
    // Clean up multiple spaces
    newClassName = newClassName.replace(/\s+/g, ' ');
    // Add the target classes
    newClassName = `${targetClasses} ${newClassName}`.trim();
    
    // Replace the old className with the new one
    changed = true;
    return match.replace(classNameStr, newClassName);
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
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
console.log('Done!');
