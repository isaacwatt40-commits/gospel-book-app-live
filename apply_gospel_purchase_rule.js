const fs = require('fs');
const path = require('path');

const booksData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8'));

booksData.books.forEach(b => {
  if (b.isGospelShelf) {
    b.hasFullContent = false;
    b.badge = 'GOSPEL';
    b.buyLink = b.buyLink || 'https://peacehouse.org.ng/books';
    b.chapters = [];
  } else {
    b.hasFullContent = true;
    b.badge = 'FULL READER';
  }
});

// Save data/books.json
fs.writeFileSync(path.join(__dirname, 'data', 'books.json'), JSON.stringify(booksData, null, 2), 'utf8');

// Save src/data/books.json
const srcPath = path.join(__dirname, 'src', 'data', 'books.json');
if (fs.existsSync(path.dirname(srcPath))) {
  fs.writeFileSync(srcPath, JSON.stringify(booksData, null, 2), 'utf8');
}

console.log('Applied purchase rule: Gbile Akanni books hasFullContent = false!');

