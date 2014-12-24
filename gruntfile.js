/*jshint node:true*/
/**
 * Build all packages with `grunt --ver=1.2.21` 
 * Build beta packages with `grunt --ver=1.3.0-beta.17` 
 * Build rc packages with `grunt --ver=1.3.0-rc.0` 
 *      (NOTE the dot, that's how Angular does it)
 * Publish with `grunt publish --ver=1.2.21 --apiKey=xxxxxxxxxxx`
 * `grunt clean` cleans the build folder 
 * The `--time` option will show the time for the tasks
 */
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
    if(apiKey) {
        console.log('Using api key ' + apiKey);
    }

    var pkg = grunt.file.readJSON('package.json');
    var config = {
        app: {
            apiKey: apiKey,
            dest: pkg.config.dest,
            ngVersion: version.replace('beta.', 'beta').replace('rc.', 'rc'),
            urlPrefix: pkg.config.urlPrefix + version
        }
    };

    require('load-grunt-config')(grunt, {
        init: true,
        // jitGrunt: {
        //    loadTasks: 'tasks',
        //    'curl-dir': 'grunt-curl',
        //    'fetchpages': 'grunt-fetch-pages',
        //    'nugetpack': 'grunt-nuget',
        //    'nugetpush': 'grunt-nuget'
        // },
        config: config
    });
};
