module.exports = function(grunt, options) {
	return {
	    packaged: {
	        options: {
	            title: 'Build ' + '<%= grunt.config.get("app.ngVersion") %>' + ' complete',
	            message: '<%= package.name %>' + ' build finished successfully.'
	        }
	    }
	};
};
