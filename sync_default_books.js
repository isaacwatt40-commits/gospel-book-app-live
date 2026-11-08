const fs = require('fs');
const path = require('path');

const booksJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8'));
const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const startMarker = 'const DEFAULT_BOOKS = [';
const endMarker = '];\n\nclass GospelBooksApp';

const startIndex = appJs.indexOf(startMarker);
const endIndex = appJs.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in app.js');
  process.exit(1);
}

const newBooksStr = 'const DEFAULT_BOOKS = ' + JSON.stringify(booksJson.books, null, 2);

appJs = appJs.slice(0, startIndex) + newBooksStr + appJs.slice(endIndex + 1);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated DEFAULT_BOOKS in app.js!');
