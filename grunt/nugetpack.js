module.exports = function (grunt, options) {
    return {
    	// options: {
    	// 	basePath: './'
    	// },
		// 'Locale': {
		// 	options: {
	 //    		basePath: 'build/1.2.22/angular-locale-1.2.22/i18n/'
	 //    	},
	 //        dist: {
	 //            src: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>' + '/**/**/<%= package.config.nuspec %>',
	 //            dest: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>'
	 //        }
  //   	}
    	
        dist: {
            src: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>' + '/**/**/<%= package.config.nuspec %>',
            dest: '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>'
        }
    };
};