module.exports = function (grunt, options) {
	return {
		'options': {},
		'Core': {
			'options': {
				'data' : {
					'module': 'Core',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-core-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Animate': {
			'options': {
				'data' : {
					'module': 'Animate',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-animate-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Aria': {
			'options': {
				'data' : {
					'module': 'Aria',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-aria-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Cookies': {
			'options': {
				'data' : {
					'module': 'Cookies',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-cookies-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Loader': {
			'options': {
				'data' : {
					'module': 'Loader',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-loader-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Locale': {
			'options': {
				'data' : {
					'module': 'Locale',
					'version': '<%= grunt.config.get("app.ngVersion") %>',
				}
				// 'data' : function() {
				// 	return {
				// 		'module': 'Locale',
				// 		'version': '<%= grunt.config.get("app.ngVersion") %>'
				// 		// 'i18nfiles': [
				// 		// 		'angular-locale_af-na.js',
				// 		// 		'angular-locale_af-za.js'
				// 		// 	]
				// 	}
				// }
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-locale-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Messages': {
			'options': {
				'data' : {
					'module': 'Messages',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-messages-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'MessageFormat': {
			'options': {
				'data' : {
				    'module': 'MessageFormat',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
			    '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-message-format-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'ParseExt': {
			'options': {
				'data' : {
				    'module': 'ParseExt',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
			    '<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-parse-ext-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Resource': {
			'options': {
				'data' : {
					'module': 'Resource',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-resource-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Route': {
			'options': {
				'data' : {
					'module': 'Route',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-route-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Sanitize': {
			'options': {
				'data' : {
					'module': 'Sanitize',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-sanitize-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		},
		'Touch': {
			'options': {
				'data' : {
					'module': 'Touch',
					'version': '<%= grunt.config.get("app.ngVersion") %>'
				}
			},
			'files': {
				'<%= package.config.dest %><%= grunt.config.get("app.ngVersion") %>/angular-touch-<%= grunt.config.get("app.ngVersion") %>/<%= package.config.nuspec %>': ['<%= package.config.tpl %>']
			}
		}
	};
};