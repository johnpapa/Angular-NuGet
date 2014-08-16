module.exports = {
    'default': [
        'mkdir-locale',
        'fetchpages',
        'download',
        'template',
        'pack-locale',
        'pack',
        'notify'
    ],
    'download': [
        'curl-dir'
    ],
    'mkdir-locale': [
        'mkdir:Locale'
    ],
    'pack-locale': [
        'nugetpack:Locale'
    ],
    'pack': [
        'nugetpack:most'
    ],
    'publish': [
        'nugetpush'
    ]
};