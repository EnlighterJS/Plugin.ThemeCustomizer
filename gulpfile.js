// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2019 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------


// --------------------------------------------------------------------------
// EnlighterJS Theme Customizer - https://enlighterjs.org
// --------------------------------------------------------------------------

const _package = require('./package.json');
const _path = require('path');
const _gulp = require('gulp');
const _express = require('express');
const _log = require('fancy-log');

const _gulp_less = require('gulp-less');
const _gulp_replace = require('gulp-replace');
const _prettyError = require('gulp-prettyerror');
const _concat = require('gulp-concat');
const _gulp_cleancss = require('gulp-clean-css');
const _header = require('gulp-header');
const _uglify = require('gulp-uglify');
const _rollup = require('rollup');
const _rollup_babel = require('rollup-plugin-babel');

// license header prepended to builds
const licenseHeader = `/*! EnlighterJS Theme Customizer ${_package.version} | Mozilla Public License 2.0 | https://enlighterjs.org */\n`;

// transpile ES6 and write to tmp file
_gulp.task('es6-transpile', async function(){
    const bundle = await _rollup.rollup({
        input: './src/browser/customizer.js',
        plugins: [
            _rollup_babel()
        ]
    });

    // write the bundle to disk
    await bundle.write({
        format: 'iife',
        name: 'EnlighterJS_Customizer',
        file: './.tmp/enlighterjs.js'
    });
});

// compress
_gulp.task('library', _gulp.series('es6-transpile', function(){

    // add jquery addon and minify it
    return _gulp.src(['.tmp/enlighterjs.js', 'src/browser/jquery.js'])

        // minify
        .pipe(_uglify())
        .pipe(_concat('enlighterjs-customizer.min.js'))

        // add license header
        .pipe(_header(licenseHeader))
        
        // add version string
        .pipe(_gulp_replace(/\[\[VERSION]]/g, _package.version))

        .pipe(_gulp.dest('./dist/'));
}));

// development webserver
_gulp.task('webserver', function(){
    // start development webserver
    const webapp = _express();
    webapp.get('/', function(req, res){
        res.sendFile(_path.join(__dirname, 'Development.html'));
    });
    webapp.use(_express.static(_path.join(__dirname, 'dist')));
    webapp.listen(8888, () => _log('DEV Webserver Online - localhost:8888'));
});

// live file changes update
_gulp.task('watch', _gulp.series('library', 'webserver', function(){
    // js, jsx files
    _gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['library']).on('change', function(event) {
        _log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
}));

// default task
_gulp.task('default',  _gulp.series('library'));
