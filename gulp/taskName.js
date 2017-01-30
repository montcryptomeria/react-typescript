'use strict';

module.exports = {
    dev: 'default',
    build: 'build',
    release: 'release',

    html: {
        dev: 'html',
        build: 'html:build',
        release: 'html:release'
    },

    sass: {
        dev: 'sass',
        build: 'sass:build',
        release: 'sass:release'
    },

    js: {
        dev: 'js',
        build: 'js:build',
        release: 'js:release'
    },

    ts: {
        dev: 'ts',
        build: 'ts:build',
        release: 'ts:release'
    },

    bundle: {
        dev: 'bundle',
        build: 'bundle:build',
        release: 'bundle:release'
    },

    image: {
        build: 'image:build',
        release: 'image:release'
    },

    concat: {
        build: 'concat:build',
        release: 'concat:release'
    },

    copy: {
        build: 'copy:build',
        release: 'copy:release'
    },

    clean: {
        build: 'clean:build',
        release: 'clean:release'
    },

    cache: {
        build: 'cache:build',
        release: 'cache:release'
    },

    reload: {
        normal: 'reload',
        stream: 'reload:stream'
    },

    library: {
        dev: 'library',
        build: 'library:build',
        release: 'library:release'
    },

    sprite: 'sprite',
    watch: 'watch',
    browserSync: 'browserSync'
};
