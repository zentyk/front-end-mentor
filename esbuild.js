/*require('esbuild').build({
    entryPoints : ['./src/index.ts'],
    bundle : true,
    sourcemap : true,
    target : 'es2015',
    minify : true,
    outfile : './dist/frontend.js'
}).catch(()=>process.exit(1));*/

const sass = require('sass');

const result = sass.compile('./src/sass/app.scss',{
    outputStyle : 'compressed',
    sourceMap : true,
    outFile : './dist/frontend.css'
});