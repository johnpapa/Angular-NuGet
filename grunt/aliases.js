module.exports = {
    'default': [
        'download-locales',
        'fetchpages',
        'download',
        'template',
        'pack',
        // 'pack:NonLocale',
        // 'pack:Locale',
        'notify'
    ],
    'download': [
        'curl-dir'
    ],
    'pack': [
        'nugetpack'
    ],
    'publish': [
        'nugetpush'
    ]
};