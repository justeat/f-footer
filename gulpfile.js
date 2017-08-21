const gulp = require('gulp');
const { build } = require('@justeat/gulp-build-fozzie');

const config = require('./_build/config');

build(gulp, config);
