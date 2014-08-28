module.exports = function (grunt, options) {
	var dest = '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>'
    return {
		'Locale': {
			options: {
				basePath: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-locale-<%= grunt.config.get("app.ngVersion") %>'
	    	},
	    	files: [{
		        src: dest + '/angular-locale-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>',
		        dest: dest
			}]
    	},
		'most': {
			options: {},
			files: [{
		        src: [
		        	dest + '/**/**/<%= package.config.nuspec %>',
		        	'!<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-locale-*/<%= package.config.nuspec %>'
		    	],
		        dest: dest
			}]
	    }
    };
};