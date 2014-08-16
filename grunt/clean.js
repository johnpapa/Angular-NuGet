module.exports = function (grunt, options) {
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
    // console.log(grunt.template.process('<%= package.config.dest %>'));
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
    return {
        options: { force: true },
        version: {
            src: ['<%= package.config.dest %>' + '<%= grunt.config.get("app.ngVersion") %>']
        }
    };
};
