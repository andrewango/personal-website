const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), 'build');
const cssDir = path.join(process.cwd(), 'build', 'static', 'css');
const htmlPath = path.join(buildDir, 'index.html');
const requiredRules = [
  '.flex{display:flex}',
  '.grid{display:grid}',
  '.text-white{',
  '.min-h-screen{min-height:100vh}',
];

if (!fs.existsSync(cssDir)) {
  throw new Error(`CSS build directory not found: ${cssDir}`);
}

if (!fs.existsSync(htmlPath)) {
  throw new Error(`Build index file not found: ${htmlPath}`);
}

const cssFiles = fs
  .readdirSync(cssDir)
  .filter((fileName) => fileName.endsWith('.css'));

const css = cssFiles
  .map((fileName) => fs.readFileSync(path.join(cssDir, fileName), 'utf8'))
  .join('\n');
const html = fs.readFileSync(htmlPath, 'utf8');

const missingRules = requiredRules.filter((rule) => !css.includes(rule));
const missingCssLinks = cssFiles.filter((fileName) => !html.includes(`/static/css/${fileName}`));

if (missingRules.length > 0) {
  throw new Error(`Tailwind utilities missing from production CSS: ${missingRules.join(', ')}`);
}

if (missingCssLinks.length > 0) {
  throw new Error(`Build index.html does not reference generated CSS files: ${missingCssLinks.join(', ')}`);
}

console.log(`Tailwind CSS verification passed for ${cssFiles.join(', ')}.`);
