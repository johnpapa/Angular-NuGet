module.exports = function (grunt, options) {
    return {
        dist: {
            src: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>' + '/*.nupkg',
            options: {
                apiKey: '<%= grunt.config.get("app.apiKey") %>'
            }
        }
    };
};