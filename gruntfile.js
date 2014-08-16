// grunt --ver=1.2.21
// grunt --ver=1.3.0-beta.17 (NOTE the dot, that's how Angular does it)

/*jshint node:true*/
module.exports = function(grunt) {
    'use strict';

    var version = grunt.option('ver');
    if(!version){
        console.log('Error: invoke with a version such as `grunt --ver=1.2.22`');
        return;
    }

    if (grunt.option('time')) {
        require('time-grunt')(grunt);
    }

    console.log('Executing for AngularJS version ' + version);

    var apiKey = grunt.option('apiKey');
    console.log('Using api key ' + apiKey);

    var pkg = grunt.file.readJSON('package.json');
    var config = {
        app: {
            apiKey: apiKey,
            dest: pkg.config.dest,
            ngVersion: version.replace('beta.', 'beta'),
            urlPrefix: pkg.config.urlPrefix + version
        }
    };

    require('load-grunt-config')(grunt, {
        init: true,
        jitGrunt: {
           loadTasks: 'tasks',
           'download-locales': './tasks/download-locales.js',
           'curl-dir': 'grunt-curl',
           'fetchpages': 'grunt-fetch-pages',
           'nugetpack': 'grunt-nuget',
           'nugetpush': 'grunt-nuget'
        },
        config: config
    });
};