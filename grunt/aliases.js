module.exports = {
    'default': [
        'download-locales',
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