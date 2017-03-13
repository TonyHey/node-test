const gulp = require('gulp'),
      nodemon = require('gulp-nodemon'),
      browserSync = require('browser-sync'),
      config = require('./config');


// nodemon 修改服务端代码自动重启
gulp.task('default', () => nodemon({ script: 'index.js' }));

// gulp.task('default', ['nodemon'], function(){
//     browserSync(config.browserSync);
//     gulp.watch("index.js", function(){
//         browserSync.reload;
//     });
// });