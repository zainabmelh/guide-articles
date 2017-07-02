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

function appendStub(title, path) {
  const pathArr = path.split('/');
  const filePath = pathArr
    .slice(pathArr.indexOf('articles') + 1)
    .join('/');
    
  return `
## ${title}

This is a stub. [Help our community expand it.](https://github.com/freeCodeCamp/guide-articles/tree/master/articles/${filePath}/index.md)

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


`;
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
        console.error('index.md does not exist in %s', filePath.replace(/index\.md$/, ''));
        return fse.ensureFile(filePath)
          .then(() => {
            console.log('%s created', filePath);
            return normaliseMeta(dirLevel);
          })
          .catch(err => {
            console.error(err);
          });
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
        let normailised = content
          .replace(metaRE, '')
          .trim();
        if (normailised.length < 30) {
          normailised = appendStub(pageTitle, dirLevel);
        }
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