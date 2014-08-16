module.exports = function (grunt, options) {
    return {
        dist: {
            options: {
                baseURL: '<%= grunt.config.get("app.urlPrefix") %>' + '/i18n/',
                urls: [
                    { url: '<%= grunt.config.get("app.urlPrefix") %>' + '/i18n/'}
                ],
                destinationFolder: '<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>' + '/angular-locale-' + '<%= grunt.config.get("app.ngVersion") %>' + '/i18n/',
                followLinks: true,
                cleanHTML: false,
                fetchBaseURL: false,
                ignoreSelector: '[href="../"]'
            }
        }
    };
};