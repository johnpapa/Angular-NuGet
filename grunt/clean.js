module.exports = function (grunt, options) {
    return {
        options: { force: true },
        version: {
            src: ['<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>']
        }
    };
};
