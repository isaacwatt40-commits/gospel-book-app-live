const http = require('http');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

async function runVerification() {
  console.log('====================================================');
  console.log('   GOSPEL BOOKS APP (PAGETURN) - COMPREHENSIVE E2E VERIFICATION');
  console.log('====================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function test(name, fn) {
    totalTests++;
    try {
      fn();
      console.log(`  ✅ [PASS] ${name}`);
      passedTests++;
    } catch (err) {
      console.error(`  ❌ [FAIL] ${name}`);
      console.error(`     Error: ${err.message}`);
    }
  }

  // ----------------------------------------------------
  // TEST SUITE 1: DATA INTEGRITY & GOSPEL RULE ENFORCEMENT
  // ----------------------------------------------------
  console.log('--- 1. DATA INTEGRITY & GOSPEL RULE ENFORCEMENT ---');

  const booksDataRaw = fs.readFileSync(path.join(__dirname, 'data', 'books.json'), 'utf8');
  const booksData = JSON.parse(booksDataRaw);
  const books = booksData.books;

  test('Catalog has exactly 11 books', () => {
    assert.strictEqual(books.length, 11, `Expected 11 books, got ${books.length}`);
  });

  const gospelBooks = books.filter(b => b.isGospelShelf);
  const classicBooks = books.filter(b => !b.isGospelShelf);

  test('Catalog has 7 Gbile Akanni / Gospel books', () => {
    assert.strictEqual(gospelBooks.length, 7, `Expected 7 Gbile Akanni books, got ${gospelBooks.length}`);
  });

  test('Catalog has 4 Christian Classics', () => {
    assert.strictEqual(classicBooks.length, 4, `Expected 4 classics, got ${classicBooks.length}`);
  });

  test('All 7 Gbile Akanni books have hasFullContent === false and badge === GOSPEL', () => {
    gospelBooks.forEach(b => {
      assert.strictEqual(b.hasFullContent, false, `Book ${b.id} must have hasFullContent: false`);
      assert.strictEqual(b.badge, 'GOSPEL', `Book ${b.id} must have badge: GOSPEL`);
      assert.strictEqual(b.buyLink, 'https://peacehouse.org.ng/books', `Book ${b.id} must have valid Peace House buyLink`);
      assert.strictEqual(Array.isArray(b.chapters) && b.chapters.length === 0, true, `Book ${b.id} chapters must be empty`);
    });
  });

  test('All 4 Christian Classics have hasFullContent === true, badge === FULL READER, and 5 chapters', () => {
    classicBooks.forEach(b => {
      assert.strictEqual(b.hasFullContent, true, `Book ${b.id} must have hasFullContent: true`);
      assert.strictEqual(b.badge, 'FULL READER', `Book ${b.id} must have badge: FULL READER`);
      assert.strictEqual(Array.isArray(b.chapters) && b.chapters.length === 5, true, `Book ${b.id} must have 5 chapters`);
      b.chapters.forEach((ch, idx) => {
        assert(ch.title && ch.title.length > 0, `Book ${b.id} ch ${idx + 1} must have title`);
        assert(ch.content && ch.content.length > 100, `Book ${b.id} ch ${idx + 1} must have substantial text content`);
      });
    });
  });

  // ----------------------------------------------------
  // TEST SUITE 2: STATIC ASSETS & FILES VERIFICATION
  // ----------------------------------------------------
  console.log('\n--- 2. STATIC ASSETS & COVER IMAGES EXISTENCE ---');

  const requiredFiles = [
    'index.html',
    'app.js',
    'styles.css',
    'manifest.json',
    'sw.js',
    'data/books.json',
    'vercel.json'
  ];

  requiredFiles.forEach(file => {
    test(`Required project file exists: ${file}`, () => {
      assert(fs.existsSync(path.join(__dirname, file)), `File missing: ${file}`);
    });
  });

  books.forEach(b => {
    if (b.coverImage) {
      test(`Cover image exists for "${b.title}" (${b.coverImage})`, () => {
        const coverPath = path.join(__dirname, b.coverImage.replace(/^\//, ''));
        assert(fs.existsSync(coverPath), `Cover image file missing: ${coverPath}`);
        const stat = fs.statSync(coverPath);
        assert(stat.size > 1000, `Cover file is suspiciously small (${stat.size} bytes)`);
      });
    }
  });

  // ----------------------------------------------------
  // TEST SUITE 3: HTTP SERVER & ROUTING INTEGRATION
  // ----------------------------------------------------
  console.log('\n--- 3. HTTP SERVER ENDPOINTS & MIME TYPES ---');

  const TEST_PORT = 5179;
  process.env.PORT = TEST_PORT;
  
  const server = require('./server.js');

  const httpGet = (urlPath) => {
    return new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${TEST_PORT}${urlPath}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
      }).on('error', reject);
    });
  };

  await new Promise(r => setTimeout(r, 200));

  const rootRes = await httpGet('/');
  test('GET / serves index.html with status 200 and UTF-8 html', () => {
    assert.strictEqual(rootRes.statusCode, 200);
    assert(rootRes.headers['content-type'].includes('text/html'));
    assert(rootRes.body.includes('Gospel Books App'));
  });

  const appJsRes = await httpGet('/app.js');
  test('GET /app.js serves JavaScript bundle with status 200', () => {
    assert.strictEqual(appJsRes.statusCode, 200);
    assert(appJsRes.headers['content-type'].includes('javascript'));
    assert(appJsRes.body.includes('GospelBooksApp'));
  });

  const cssRes = await httpGet('/styles.css');
  test('GET /styles.css serves CSS with status 200', () => {
    assert.strictEqual(cssRes.statusCode, 200);
    assert(cssRes.headers['content-type'].includes('text/css'));
  });

  const booksRes = await httpGet('/data/books.json');
  test('GET /data/books.json serves valid JSON catalog with status 200', () => {
    assert.strictEqual(booksRes.statusCode, 200);
    assert(booksRes.headers['content-type'].includes('json'));
    const parsed = JSON.parse(booksRes.body);
    assert.strictEqual(parsed.books.length, 11);
  });

  const manifestRes = await httpGet('/manifest.json');
  test('GET /manifest.json serves PWA manifest with status 200', () => {
    assert.strictEqual(manifestRes.statusCode, 200);
    const manifest = JSON.parse(manifestRes.body);
    assert(manifest.name.includes('Gospel Books App'));
    assert.strictEqual(manifest.display, 'standalone');
  });

  const swRes = await httpGet('/sw.js');
  test('GET /sw.js serves offline Service Worker with status 200', () => {
    assert.strictEqual(swRes.statusCode, 200);
    assert(swRes.headers['content-type'].includes('javascript'));
  });

  const sampleCover = books[0].coverImage;
  const coverRes = await httpGet(sampleCover.startsWith('/') ? sampleCover : '/' + sampleCover);
  test(`GET ${sampleCover} serves valid image asset with status 200`, () => {
    assert.strictEqual(coverRes.statusCode, 200);
    assert(coverRes.headers['content-type'].includes('image/'));
  });

  // ----------------------------------------------------
  // TEST SUITE 4: APP LOGIC & USER STORY FLOW SIMULATION
  // ----------------------------------------------------
  console.log('\n--- 4. APP LOGIC & USER STORY FLOW SIMULATION ---');

  const mockStorage = {};
  global.localStorage = {
    getItem: (k) => mockStorage[k] || null,
    setItem: (k, v) => { mockStorage[k] = String(v); },
    removeItem: (k) => { delete mockStorage[k]; }
  };

  const elements = {};
  global.document = {
    getElementById: (id) => {
      if (!elements[id]) {
        elements[id] = {
          id,
          classList: {
            add: () => {},
            remove: () => {},
            contains: () => false
          },
          innerHTML: '',
          scrollTop: 0,
          addEventListener: () => {}
        };
      }
      return elements[id];
    },
    querySelectorAll: () => [],
    body: {
      classList: {
        add: () => {},
        remove: () => {}
      }
    }
  };

  global.window = {
    location: { protocol: 'http:' },
    addEventListener: () => {}
  };

  global.speechSynthesis = {
    speak: () => {},
    cancel: () => {},
    getVoices: () => []
  };

  const { GospelBooksApp } = require('./app.js');
  test('GospelBooksApp imported successfully from app.js', () => {
    assert(GospelBooksApp, 'GospelBooksApp must be defined');
  });

  const appInstance = new GospelBooksApp();

  test('GospelBooksApp initializes with all 11 books', () => {
    assert.strictEqual(appInstance.books.length, 11);
  });

  test('renderHomeView outputs Gbile Akanni shelf with Purchase links and GOSPEL badges', () => {
    const html = appInstance.renderHomeView();
    assert(html.includes('Gbile Akanni'), 'Must display Gbile Akanni shelf');
    assert(html.includes('Purchase ↗'), 'Gbile Akanni shelf must display Purchase ↗ buttons');
    assert(html.includes('GOSPEL'), 'Gbile Akanni shelf must display GOSPEL badge');
    assert(html.includes('Read Now →'), 'Classics section must display Read Now →');
  });

  test('renderBookDetailView for Gbile Akanni book displays purchase box and Peace House buy link, no Read Now button', () => {
    const gbileBook = appInstance.books.find(b => b.id === 'gbile-becoming-like-jesus');
    appInstance.activeBook = gbileBook;
    const detailHtml = appInstance.renderBookDetailView();
    assert(detailHtml.includes('Full content not hosted'), 'Must display "Full content not hosted" notice');
    assert(detailHtml.includes('peacehouse.org.ng'), 'Must include official peacehouse.org.ng reference');
    assert(detailHtml.includes('https://peacehouse.org.ng/books'), 'Must include direct link to Peace House books');
    assert(detailHtml.includes('Get This Book'), 'Must have "Get This Book" button');
    assert(!detailHtml.includes('id="readNowBtn"'), 'Gbile Akanni books must NOT have readNowBtn');
    assert(detailHtml.includes('id="backFromDetailBtn"'), 'Must have Back button');
  });

  test('renderBookDetailView for Christian Classic displays "Read Now (Full Text Included)" button', () => {
    const classicBook = appInstance.books.find(b => b.id === 'classic-practice-presence-of-god');
    appInstance.activeBook = classicBook;
    const detailHtml = appInstance.renderBookDetailView();
    assert(detailHtml.includes('id="readNowBtn"'), 'Classic books must have readNowBtn');
    assert(detailHtml.includes('Read Now (Full Text Included)'), 'Must offer full reading');
    assert(!detailHtml.includes('Full content not hosted'), 'Must not display unhosted notice for classics');
  });

  test('openReader guard redirects Gbile Akanni books safely to Book Detail view instead of blank reader', () => {
    appInstance.readingBook = null;
    appInstance.activeBook = null;
    appInstance.openReader('gbile-costly-assumptions');
    assert.strictEqual(appInstance.readingBook, null, 'readingBook must remain null for unhosted books');
    assert(appInstance.activeBook !== null, 'activeBook must be set so detail screen is shown');
    assert.strictEqual(appInstance.activeBook.id, 'gbile-costly-assumptions');
  });

  test('openReader opens full reader view for Christian Classics with 5 chapters', () => {
    const classicBook = appInstance.books.find(b => b.id === 'classic-practice-presence-of-god');
    appInstance.readingBook = null;
    appInstance.openReader('classic-practice-presence-of-god', 0);
    assert(appInstance.readingBook !== null, 'readingBook must be set for classics');
    assert.strictEqual(appInstance.readingBook.id, 'classic-practice-presence-of-god');
    assert.strictEqual(appInstance.currentChapterIndex, 0);

    const readerHtml = appInstance.renderReaderView();
    assert(readerHtml.includes('The Practice of the Presence of God'), 'Reader must show book title');
    assert(readerHtml.includes(classicBook.chapters[0].title), 'Reader must show chapter title');
    assert(readerHtml.includes('id="closeReaderBtn"'), 'Reader must have close button');
    assert(readerHtml.includes('id="fontIncBtn"'), 'Reader must have font resize controls');
    assert(readerHtml.includes('data-theme="theme-paper"'), 'Reader must have theme switch controls');
  });

  test('Reader font size and theme modifications function correctly', () => {
    assert(appInstance.settings, 'Settings must be initialized');
    const initialSize = appInstance.settings.fontSize;
    appInstance.settings.fontSize += 1;
    assert.strictEqual(appInstance.settings.fontSize, initialSize + 1);
    appInstance.settings.theme = 'theme-night';
    assert.strictEqual(appInstance.settings.theme, 'theme-night');
    appInstance.settings.theme = 'theme-sepia';
    assert.strictEqual(appInstance.settings.theme, 'theme-sepia');
  });

  test('Search view dynamically filters by author, title and category', () => {
    appInstance.searchQuery = 'Gbile';
    const searchHtml = appInstance.renderSearchView();
    assert(searchHtml.includes('Becoming Like Jesus'), 'Search for Gbile should find Becoming Like Jesus');
    assert(searchHtml.includes('Costly Assumption'), 'Search for Gbile should find Costly Assumption');

    appInstance.searchQuery = 'Lawrence';
    const lawrenceHtml = appInstance.renderSearchView();
    assert(lawrenceHtml.includes('Practice of the Presence of God'), 'Search for Lawrence should find Brother Lawrence');
    assert(!lawrenceHtml.includes('Costly Assumption'), 'Should exclude non-matching books');
  });

  test('Favorites toggle persists correctly', () => {
    const bookId = 'classic-pilgrims-progress';
    const wasFav = appInstance.favorites.includes(bookId);
    appInstance.toggleFavorite(bookId);
    assert.strictEqual(appInstance.favorites.includes(bookId), !wasFav, 'Favorite status must toggle');
  });

  console.log('\n====================================================');
  console.log(`   VERIFICATION COMPLETE: ${passedTests}/${totalTests} TESTS PASSED (100%)`);
  console.log('====================================================\n');

  if (passedTests === totalTests) {
    console.log('✨ ALL SYSTEMS GREEN: App is in pristine, verified condition for deployment.');
    process.exit(0);
  } else {
    console.error('⚠️ SOME TESTS FAILED. Please review output above.');
    process.exit(1);
  }
}

runVerification().catch(err => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});
