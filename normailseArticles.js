const Rx = require('rx');
const fse = require('fs-extra');

const { Observable } = Rx;

const metaRE = /---[\W\w]*?---\n*?/;
const isAFileRE = /(\.md|\.jsx?|\.html?)$/;
const shouldBeIgnoredRE = /^(\_|\.)/;

function readDir(dir) {
  return fse.readdirSync(dir)
  .filter(item => !isAFileRE.test(item))
  .filter(file => !shouldBeIgnoredRE.test(file));
}

const preFormatted = {
  css: 'CSS',
  css3: 'CSS3',
  html: 'HTML',
  html5: 'HTML5',
  javascript: 'javaScript'
};

const stopWords = [
  'and',
  'for',
  'of',
  'the',
  'up',
  'with'
];

function titleify(str) {
  return str
    .split('-')
    .map(word => {
      if (!word) {
        return '';
      }
      if (stopWords.indexOf(word) !== -1) {
        return word;
      }
      return preFormatted[word] ?
        preFormatted[word] :
        word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function normaliseMeta(dirLevel) {
  const filePath = `${dirLevel}/index.md`;
  fse.open(filePath, 'r', (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('index.md does not exist in %s', filePath);
        return;
      }
      throw err;
    }
    fse.readFile(filePath, 'utf-8')
      .then(content => {
        const title = dirLevel
          .split('/')
          .slice(-1)
          .join('');
        const pageTitle = titleify(title);
        const newMeta = `---
title: ${pageTitle}
---
`
        const normailised = content
          .replace(metaRE, '')
          .trim();
        fse.writeFile(filePath, newMeta.concat(normailised));
      })
      .catch(err => {
        console.error('something went wrong', err);
      })
  });
}

function applyNormaliser(dirLevel) {
  return Observable.from(readDir(dirLevel))
    .flatMap(dir => {
      const dirPath = `${dirLevel}/${dir}`;
      const subDirs = readDir(dirPath);
      if (!subDirs) {
        normaliseMeta(dirPath);
        return Observable.of(null);
      }
      normaliseMeta(dirPath);
      return applyNormaliser(dirPath);
    })
}

applyNormaliser(`${process.cwd()}/articles`)
  .subscribe((dir)=> {
    if (dir) {
      applyNormaliser(dir);
    }
  },
  err => {
      throw err;
    },
    () => {
      normaliseMeta(`${process.cwd()}/articles`)
      console.info('\n\nNormalisation Completed\n\n');
    });