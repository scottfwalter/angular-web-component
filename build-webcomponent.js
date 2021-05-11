const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/angular-web-component/runtime.js',
        './dist/angular-web-component/polyfills.js',
        './dist/angular-web-component/main.js'
      ];

      await fs.ensureDir('webcomponents');
      await concat(files, 'webcomponents/news-component.js');
}
build();