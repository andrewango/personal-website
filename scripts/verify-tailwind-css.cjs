const fs = require('fs');
const path = require('path');

const cssDir = path.join(process.cwd(), 'build', 'static', 'css');
const requiredRules = [
  '.flex{display:flex}',
  '.grid{display:grid}',
  '.text-white{',
  '.min-h-screen{min-height:100vh}',
];

if (!fs.existsSync(cssDir)) {
  throw new Error(`CSS build directory not found: ${cssDir}`);
}

const css = fs
  .readdirSync(cssDir)
  .filter((fileName) => fileName.endsWith('.css'))
  .map((fileName) => fs.readFileSync(path.join(cssDir, fileName), 'utf8'))
  .join('\n');

const missingRules = requiredRules.filter((rule) => !css.includes(rule));

if (missingRules.length > 0) {
  throw new Error(`Tailwind utilities missing from production CSS: ${missingRules.join(', ')}`);
}

console.log('Tailwind CSS verification passed.');
