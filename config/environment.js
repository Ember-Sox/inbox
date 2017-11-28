/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
		contentSecurityPolicy: {
		'script-src': "'self' 'unsafe-eval' apis.google.com",
		'frame-src': "'self' https://*.firebaseapp.com",
		'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
	},
	firebase: {
		apiKey: "AIzaSyADBmFu2CGhN_Kd_876hNOjf3fsOyvnmeQ",
    authDomain: "ginbox-c39fd.firebaseapp.com",
    databaseURL: "https://ginbox-c39fd.firebaseio.com",
    projectId: "ginbox-c39fd",
    storageBucket: "ginbox-c39fd.appspot.com",
    messagingSenderId: "836601102141"
	},
    modulePrefix: 'g-inbox',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.APP.LOG_BINDINGS = true;
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
