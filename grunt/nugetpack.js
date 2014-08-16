module.exports = function (grunt, options) {
	var dest = '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>'
    return {
		'Locale': {
			options: {
	    		basePath: 'build/1.2.22/angular-locale-1.2.22/i18n/'
	    	},
	    	files: [{
		        src: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-locale-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>',
		        dest: dest
			}]
    	},
		'most': {
			options: {},
			files: [{
		        src: [
		        	'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>' + '/**/**/<%= package.config.nuspec %>',
		        	'!<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-locale-*/<%= package.config.nuspec %>'
		    	],
		        dest: dest
			}]
	    }
    };
};