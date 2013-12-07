module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            options: { force: true },
            all: {
                src: ['../angularjs.animate/scripts/*.*']
            }
        },
        copy: {
            main: {
            files: [
            {
                src: ['../prep/angular-1.2.4/angular-animate*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.animate/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/angular-cookies*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.cookies/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/angular.*', '../prep/angular-1.2.4/angular-mocks.js'],
                flatten: true,
                expand: true,
                dest: '../angularjs.core/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/angular-loader*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.loader/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/i18n/*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.locale/scripts/i18n/'
              },
            {
                src: ['../prep/angular-1.2.4/angular-resource*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.resource/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/angular-route*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.route/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/angular-sanitize*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.sanitize/scripts/'
              },
            {
                src: ['../prep/angular-1.2.4/angular-touch*.*'],
                flatten: true,
                expand: true,
                dest: '../angularjs.touch/scripts/'
              }
            ]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    grunt.registerTask('default', ['prep']);
    grunt.registerTask('prep', ['clean', 'copy']);
};