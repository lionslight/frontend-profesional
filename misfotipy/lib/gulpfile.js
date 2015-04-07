/*

------###### dependencias ####### ----------

*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  stylus = require('gulp-stylus');
  nib = require('nib');

//crear objeto path para compilar stylus
var path = {
	stylus : ['../estilos/estilo2.styl'],
	css : '../css/'
};
/*
* Configuración de la tarea 'demo'
*/


gulp.task('demo', function () { //src----- acceder a carpetas raiz para usar en ejecucion
  gulp.src('../js/source/*.js') //pipe -----ejecutar
  .pipe(concat('todo.js')) //concat ---- concatenar
  .pipe(uglify())
  .pipe(gulp.dest('../js/source/build/')) // dest---- el destino del resultado de ejecucion de pipe
});

/*
* Configuración de la tarea 'estilos'
*/


gulp.task('estilos', function(){ 
	return gulp.src(path.stylus) //objeto path con propiedad stylus
	.pipe(stylus({
		use: nib(), //se trae la variable nib que accede al nib para stylus
		compress: true
	}))
	.pipe(gulp.dest(path.css));  //objeto path con propiedad css
})

/*

### PARA PROBAR EN TERMINAL ###
---1----situarse en carpeta donde se localiza gulpfile.js
------2----escribir "gulp" + nombre de la tarea, ejemplo: demo, estilos.

*/
/** notas de ejecucion:

Last login: Sat Apr  4 20:06:44 on ttys000
Luzs-MacBook-Pro:~ luzadeleon$ npm install -g gulp
npm ERR! Darwin 13.4.0
npm ERR! argv "node" "/usr/local/bin/npm" "install" "-g" "gulp"
npm ERR! node v0.12.0
npm ERR! npm  v2.5.1
npm ERR! path /usr/local/lib/node_modules/gulp
npm ERR! code EACCES
npm ERR! errno -13

npm ERR! Error: EACCES, unlink '/usr/local/lib/node_modules/gulp'
npm ERR!     at Error (native)
npm ERR!  { [Error: EACCES, unlink '/usr/local/lib/node_modules/gulp']
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   path: '/usr/local/lib/node_modules/gulp' }
npm ERR! 
npm ERR! Please try running this command again as root/Administrator.
npm ERR! error rolling back Error: EACCES, unlink '/usr/local/lib/node_modules/gulp'
npm ERR! error rolling back     at Error (native)
npm ERR! error rolling back  { [Error: EACCES, unlink '/usr/local/lib/node_modules/gulp']
npm ERR! error rolling back   errno: -13,
npm ERR! error rolling back   code: 'EACCES',
npm ERR! error rolling back   path: '/usr/local/lib/node_modules/gulp' }

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/luzadeleon/npm-debug.log
Luzs-MacBook-Pro:~ luzadeleon$ sudo npm install -g gulp
Password:
/usr/local/bin/gulp -> /usr/local/lib/node_modules/gulp/bin/gulp.js
gulp@3.8.11 /usr/local/lib/node_modules/gulp
├── pretty-hrtime@0.2.2
├── interpret@0.3.10
├── deprecated@0.0.1
├── archy@1.0.0
├── minimist@1.1.1
├── tildify@1.0.0 (user-home@1.1.1)
├── v8flags@2.0.3 (user-home@1.1.1)
├── semver@4.3.3
├── chalk@0.5.1 (ansi-styles@1.1.0, supports-color@0.2.0, escape-string-regexp@1.0.3, strip-ansi@0.3.0, has-ansi@0.1.0)
├── orchestrator@0.3.7 (stream-consume@0.1.0, sequencify@0.0.7, end-of-stream@0.1.5)
├── liftoff@2.0.3 (extend@2.0.0, flagged-respawn@0.3.1, resolve@1.1.6, findup-sync@0.2.1)
├── gulp-util@3.0.4 (object-assign@2.0.0, array-differ@1.0.0, array-uniq@1.0.2, beeper@1.0.0, lodash._reevaluate@3.0.0, lodash._reinterpolate@3.0.0, lodash._reescape@3.0.0, replace-ext@0.0.1, through2@0.6.3, vinyl@0.4.6, chalk@1.0.0, lodash.template@3.4.0, multipipe@0.1.2, dateformat@1.0.11)
└── vinyl-fs@0.3.13 (graceful-fs@3.0.6, strip-bom@1.0.0, mkdirp@0.5.0, through2@0.6.3, vinyl@0.4.6, defaults@1.0.2, glob-stream@3.1.18, glob-watcher@0.0.6)
Luzs-MacBook-Pro:~ luzadeleon$ gulp -v
[22:37:33] CLI version 3.8.11
[22:37:33] Local version 3.8.11
Luzs-MacBook-Pro:~ luzadeleon$ cd documents/frontend-profesional/misfotipy/lib
Luzs-MacBook-Pro:lib luzadeleon$ ls
backbone.js		hola.js			underscore.js
gulpfile.js		jquery-1.11.2.js
handlebars-v3.0.0.js	servidor.js
Luzs-MacBook-Pro:lib luzadeleon$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (lib) 
version: (1.0.0) 
description: 
entry point: (backbone.js) 
test command: 
git repository: 
keywords: gulp
author: luzaracelydls
license: (ISC) ITIC
About to write to /Users/luzadeleon/Documents/frontend-profesional/misfotipy/lib/package.json:

{
  "name": "lib",
  "version": "1.0.0",
  "description": "",
  "main": "backbone.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "gulp"
  ],
  "author": "luzaracelydls",
  "license": "ITIC"
}


Is this ok? (yes) 
Luzs-MacBook-Pro:lib luzadeleon$ npm install --save-dev gulp
npm WARN package.json lib@1.0.0 No description
npm WARN package.json lib@1.0.0 No repository field.
npm WARN package.json lib@1.0.0 No README data
gulp@3.8.11 node_modules/gulp
├── pretty-hrtime@0.2.2
├── interpret@0.3.10
├── deprecated@0.0.1
├── archy@1.0.0
├── minimist@1.1.1
├── v8flags@2.0.3 (user-home@1.1.1)
├── tildify@1.0.0 (user-home@1.1.1)
├── semver@4.3.3
├── chalk@0.5.1 (ansi-styles@1.1.0, escape-string-regexp@1.0.3, supports-color@0.2.0, strip-ansi@0.3.0, has-ansi@0.1.0)
├── orchestrator@0.3.7 (sequencify@0.0.7, stream-consume@0.1.0, end-of-stream@0.1.5)
├── liftoff@2.0.3 (extend@2.0.0, flagged-respawn@0.3.1, resolve@1.1.6, findup-sync@0.2.1)
├── gulp-util@3.0.4 (array-differ@1.0.0, object-assign@2.0.0, beeper@1.0.0, array-uniq@1.0.2, lodash._reinterpolate@3.0.0, lodash._reescape@3.0.0, lodash._reevaluate@3.0.0, replace-ext@0.0.1, chalk@1.0.0, vinyl@0.4.6, through2@0.6.3, multipipe@0.1.2, dateformat@1.0.11, lodash.template@3.4.0)
└── vinyl-fs@0.3.13 (graceful-fs@3.0.6, strip-bom@1.0.0, defaults@1.0.2, mkdirp@0.5.0, glob-stream@3.1.18, vinyl@0.4.6, through2@0.6.3, glob-watcher@0.0.6)
Luzs-MacBook-Pro:lib luzadeleon$ sudo npm install --save-dev gulp-concat
Password:
npm WARN package.json lib@1.0.0 No description
npm WARN package.json lib@1.0.0 No repository field.
npm WARN package.json lib@1.0.0 No README data
gulp-concat@2.5.2 node_modules/gulp-concat
├── through2@0.6.3 (xtend@4.0.0, readable-stream@1.0.33)
├── concat-with-sourcemaps@1.0.2 (source-map@0.4.2)
└── gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, object-assign@2.0.0, array-uniq@1.0.2, lodash._reescape@3.0.0, lodash._reevaluate@3.0.0, lodash._reinterpolate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, multipipe@0.1.2, vinyl@0.4.6, chalk@1.0.0, dateformat@1.0.11, lodash.template@3.4.0)
Luzs-MacBook-Pro:lib luzadeleon$ sudo npm install --save-dev gulp-uglify
npm WARN package.json lib@1.0.0 No description
npm WARN package.json lib@1.0.0 No repository field.
npm WARN package.json lib@1.0.0 No README data
gulp-uglify@1.1.0 node_modules/gulp-uglify
├── deepmerge@0.2.7
├── vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
├── uglify-js@2.4.16 (uglify-to-browserify@1.0.2, async@0.2.10, source-map@0.1.34, optimist@0.3.7)
├── through2@0.6.3 (xtend@4.0.0, readable-stream@1.0.33)
└── gulp-util@3.0.4 (array-differ@1.0.0, object-assign@2.0.0, beeper@1.0.0, array-uniq@1.0.2, lodash._reevaluate@3.0.0, lodash._reescape@3.0.0, lodash._reinterpolate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, vinyl@0.4.6, chalk@1.0.0, dateformat@1.0.11, lodash.template@3.4.0, multipipe@0.1.2)
Luzs-MacBook-Pro:lib luzadeleon$ ls
backbone.js		hola.js			package.json
gulpfile.js		jquery-1.11.2.js	servidor.js
handlebars-v3.0.0.js	node_modules		underscore.js
Luzs-MacBook-Pro:lib luzadeleon$ gulp demo
[23:25:52] Using gulpfile ~/Documents/frontend-profesional/misfotipy/lib/gulpfile.js
[23:25:52] Starting 'demo'...
[23:25:52] Finished 'demo' after 16 ms
Luzs-MacBook-Pro:lib luzadeleon$ 

 */