module.exports = function (grunt, options) {
    return {
        'Locale': {
            options: {
                create: [
                    '<%= grunt.config.get("app.dest") %><%= grunt.config.get("app.ngVersion") %>/angular-locale-<%= grunt.config.get("app.ngVersion") %>/i18n/'
                ]
            }
        }
    }
};