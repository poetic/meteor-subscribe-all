Package.describe({
  name: 'poetic:meteor-subscribe-all',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Make sure all subscribetions are ready',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.4');
  api.use('ecmascript');
  api.use('reactive-var');
  api.mainModule('meteor-subscribe-all.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('poetic:meteor-subscribe-all');
  api.mainModule('meteor-subscribe-all-tests.js');
});
