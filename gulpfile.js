'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    bower = require('gulp-bower'),
    UglifyJS = require("uglify-js"),
    concat = require('gulp-concat');


var config = {
    sassPath: './resources/sass',
    jsPath: './public/js',
    bowerDir: './bower_components'
};


gulp.task('bower', function () {
    return bower().pipe(gulp.dest(config.bowerDir));
});



gulp.task('concat-js', function () {
    console.log('task concat-js');
    return gulp.src(['./bower_components/jquery/dist/jquery.min.js',
                     './bower_components/bootstrap/dist/js/bootstrap.min.js',
                     './bower_components/angular/angular.min.js',
                     './bower_components/angular-route/angular-route.min.js',
                    './bower_components/angular-sanitize/angular-sanitize.min.js',
                    './bower_components/angular-bootstrap/ui-bootstrap.min.js',
                    './bower_components/waypoints/lib/jquery.waypoints.js',
                    './public/js/app.js',
                    './public/js/controllers.js',
                    './public/js/nav.js'
                    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/dist/'));
});


gulp.task('css', function () {
    console.log('Launch task css');
    return sass(config.sassPath, {
            style: 'compressed',
            loadPath: [
'./resources/sass',
config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
]
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        })).pipe(gulp.dest('./public/css')).pipe(concat('all.css')).pipe(gulp.dest('./public/dist'));
});



// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
    gulp.watch(config.jsPath + '/*.js', ['concat-js']);
});

gulp.task('default', ['bower', 'icons', 'css']);









gulp.task('concat-css', function () {
    return gulp.src(['./css/bootstrap-style.css',
                     './css/timeline.cs',
                     './css/style.css'
                    ])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/css/'));
});


gulp.task('uglify', function () {
    return result = UglifyJS.minify(["bower_components/jquery/dist/jquery.min.js",
                                "bower_components/bootstrap/dist/js/bootstrap.min.js",
                                "bower_components/angular/angular.min.js",
                                "bower_components/angular-route/angular-route.min.js",
                                "bower_components/angular-sanitize/angular-sanitize.min.js",
                                "bower_components/angular-bootstrap/ui-bootstrap.min.js",
                                "bower_components/waypoints/lib/jquery.waypoints.js",
                                "public/js/app.js",
                                "public/js/controllers.js"], {
        output: "public/js/uglify.min.js"
    });
});