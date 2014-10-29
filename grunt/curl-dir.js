module.exports = function (grunt, options) {
    return {
        'animate': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-animate.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-animate.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-animate.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-animate-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'core': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular.min.js.map',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-mocks.js'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-core-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'cookies': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-cookies.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-cookies.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-cookies.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-cookies-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'loader': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-loader.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-loader.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-loader.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-loader-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'messages': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-messages.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-messages.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-messages.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-messages-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'resource': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-resource.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-resource.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-resource.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-resource-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'route': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-route.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-route.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-route.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-route-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'sanitize': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-sanitize.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-sanitize.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-sanitize.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-sanitize-' + '<%= grunt.config.get("app.ngVersion") %>'
        },
        'touch': {
            src: [
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-touch.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-touch.min.js',
                    '<%= grunt.config.get("app.urlPrefix") %>' + '/angular-touch.min.js.map'
            ],
            dest: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-touch-' + '<%= grunt.config.get("app.ngVersion") %>'
        }
    };
};