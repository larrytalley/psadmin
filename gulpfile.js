"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //opens a URL in a browser

var config = {
    port: 3000, 
    devBaseUrl: 'http://localhost', 
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};

// start a local dev server
gulp.task('connect',function() {
    connect.server({root:['dist'],port: config.port,base: config.devBaseUrl,livereload:true});
});
 
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('default', ['html','open']);
