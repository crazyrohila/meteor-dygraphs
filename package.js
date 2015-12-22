// var packageJson = JSON.parse(Npm.require("fs").readFileSync('upstream/package.json'));

Package.describe({
  name: 'crazyrohila:dygraphs',
  version: '1.1.0',
  summary: 'dygraphs is a fast, flexible open source JavaScript charting library.',
  git: 'https://github.com/danvk/dygraphs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    'meteor-pre.js',
    'upstream/dist/dygraph-combined.js',
    'meteor-post.js'
  ], 'client');
  api.export('Dygraph');
});

Package.onTest(function(api) {
  api.use('tinytest', 'client');
  api.use('crazyrohila:dygraphs', 'client');
  api.addFiles('dygraphs-tests.js', 'client');
});
