const fs = require('fs');
const inline = require('inline-source');

const htmlFile = 'index.html';
const options = {
  compress: true, // minify 
};

inline.inlineSource(htmlFile, options)
  .then((html) => {
    fs.writeFileSync('results.html', html);
    console.log('Build successful!');
  })
  .catch((err) => {
    console.error('Error during build:', err);
  });
