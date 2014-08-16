// grunt --ver=1.2.21
// grunt --ver=1.3.0-beta.17 (NOTE the dot, that's how Angular does it)

module.exports = function (grunt) {
    var version = grunt.option('ver');
    if(!version){
        console.log('Error: invoke with a version such as `grunt --ver=1.2.22`');
        return;
    }

    var apiKey = grunt.option('apiKey');

    console.log('Executing for AngularJS version ' + version);

    grunt.initConfig({
        myApp: {
            version: version.replace('beta.', 'beta'),
            urlPrefix: 'https://code.angularjs.org/' + version
        },

        nugetpack: {
            dist: {
                src: './build/<%= myApp.version %>/**/package.nuspec',
                dest: './build/<%= myApp.version %>'
            }
        },

        nugetpush: {
            dist: {
                src: './build/<%= myApp.version %>/*.nupkg',
                options: {
                    apiKey: apiKey
                }
            }
        },

        'fetchpages': {
            dist: {
              options: {
                baseURL: "<%= myApp.urlPrefix %>//i18n/",
                urls: [
                    { url: '<%= myApp.urlPrefix %>/i18n/'}
                ],
                destinationFolder: './build/<%=myApp.version %>/angular-locale-<%= myApp.version %>/i18n/',
                followLinks: true,
                cleanHTML: false,
                fetchBaseURL: false,
                ignoreSelector: '[href="../"]'
              }
            }
          },

        'curl-dir': {
            'animate': {
              src: [
                '<%= myApp.urlPrefix %>/angular-animate.js',
                '<%= myApp.urlPrefix %>/angular-animate.min.js',
                '<%= myApp.urlPrefix %>/angular-animate.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-animate-<%= myApp.version %>'
            },
            'core': {
              src: [
                '<%= myApp.urlPrefix %>/angular.js',
                '<%= myApp.urlPrefix %>/angular.min.js',
                '<%= myApp.urlPrefix %>/angular.min.js.map',
                '<%= myApp.urlPrefix %>/angular-mocks.js'
              ],
              dest: './build/<%= myApp.version %>/angular-core-<%= myApp.version %>'
            },
            'cookies': {
              src: [
                '<%= myApp.urlPrefix %>/angular-cookies.js',
                '<%= myApp.urlPrefix %>/angular-cookies.min.js',
                '<%= myApp.urlPrefix %>/angular-cookies.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-cookies-<%= myApp.version %>'
            },
            'loader': {
              src: [
                '<%= myApp.urlPrefix %>/angular-loader.js',
                '<%= myApp.urlPrefix %>/angular-loader.min.js',
                '<%= myApp.urlPrefix %>/angular-loader.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-loader-<%= myApp.version %>'
            },
            'resource': {
              src: [
                '<%= myApp.urlPrefix %>/angular-resource.js',
                '<%= myApp.urlPrefix %>/angular-resource.min.js',
                '<%= myApp.urlPrefix %>/angular-resource.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-resource-<%= myApp.version %>'
            },
            'route': {
              src: [
                '<%= myApp.urlPrefix %>/angular-route.js',
                '<%= myApp.urlPrefix %>/angular-route.min.js',
                '<%= myApp.urlPrefix %>/angular-route.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-route-<%= myApp.version %>'
            },
            'sanitize': {
              src: [
                '<%= myApp.urlPrefix %>/angular-sanitize.js',
                '<%= myApp.urlPrefix %>/angular-sanitize.min.js',
                '<%= myApp.urlPrefix %>/angular-sanitize.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-sanitize-<%= myApp.version %>'
            },
            'touch': {
              src: [
                '<%= myApp.urlPrefix %>/angular-touch.js',
                '<%= myApp.urlPrefix %>/angular-touch.min.js',
                '<%= myApp.urlPrefix %>/angular-touch.min.js.map'
              ],
              dest: './build/<%= myApp.version %>/angular-touch-<%= myApp.version %>'
            }
        },

        'template': {
                'options': {
                },
                    'Core': {
                        'options': {
                            'data' : { 
                                'module': "Core",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-core-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }

                    },
                    'Animate': {
                         'options': {
                            'data' : { 
                                'module': "Animate",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-animate-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Cookies': {
                         'options': {
                            'data' : { 
                                'module': "Cookies",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-cookies-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Loader': {
                         'options': {
                            'data' : { 
                                'module': "Loader",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-loader-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Loader': {
                         'options': {
                            'data' : { 
                                'module': "Loader",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-loader-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Locale': {
                         'options': {
                            'data' : { 
                                'module': "Locale",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-locale-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Resource': {
                         'options': {
                            'data' : { 
                                'module': "Resource",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-resource-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Route': {
                         'options': {
                            'data' : { 
                                'module': "Route",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-route-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Sanitize': {
                         'options': {
                            'data' : { 
                                'module': "Sanitize",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-sanitize-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Touch': {
                         'options': {
                            'data' : { 
                                'module': "Touch",
                                'version': '<%= myApp.version %>'
                            }
                        },
                        'files': {
                            'build/<%= myApp.version %>/angular-touch-<%= myApp.version %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    }

            },

         clean: {
            options: { force: true },
            version: {
                src: ['./build/<%= myApp.version %>/*.*']
            }
        }
    });
console.log('./build/<%= myApp.version %>/*.*');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-fetch-pages');
    grunt.loadNpmTasks('grunt-nuget');

    grunt.registerTask('download', function(n) {
            grunt.task.run(['curl-dir']);
    });

    grunt.registerTask('pack', function(n) {
        grunt.task.run(['nugetpack']);
    });

    grunt.registerTask('download-locales', function(n){
        grunt.log.writeln('GET angularjs version ' + grunt.config.get('myApp.version') + ' from ' + grunt.config.get('myApp.urlPrefix'));
        grunt.file.mkdir('build/' + grunt.config.get('myApp.version') + '/angular-locale-' + grunt.config.get('myApp.version') + '/i18n/');
        grunt.task.run(['fetchpages']);
    });

    grunt.registerTask('publish', function(n) {
        grunt.task.run(['nugetpush']);
        //NOTE: not tested but should work. ;)
    });

    grunt.registerTask('default', ['download-locales','download', 'template', 'pack']); 
    //Call with --ver=1.2.9 or --ver=1.3.0-beta.17 for example
};