module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('download-locales', function () {
    	var dir = grunt.config.get('app.dest') + grunt.config.get('app.ngVersion') + '/angular-locale-' + grunt.config.get('app.ngVersion') + '/i18n/';
        grunt.log.writeln('GET angularjs version ' + grunt.config.get('app.ngVersion') + ' from ' + grunt.config.get('app.urlPrefix'));
        grunt.file.mkdir(dir);
        //grunt.task.run(['fetch-pages']);
    });
};
