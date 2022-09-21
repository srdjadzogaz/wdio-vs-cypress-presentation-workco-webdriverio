import { setOptions } from 'expect-webdriverio'

let headless;
switch (process.env.headless) {
  case 'yes':
    headless = [];
    break;
  default:
    headless = ['--headless'];
}

exports.config = {
  specs: ['./test/specs/**/*.js'],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: 'chrome',
      browser_version: 'latest',
    },
  ],

  logLevel: 'silent',

  bail: 0,

  baseUrl: 'https://www.saucedemo.com/',

  waitforTimeout: 5000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: [['@browserstack/wdio-browserstack-service']],

  framework: 'mocha',

  before () {
        setOptions({ wait: 5000 })
    },

  reporters: [
    'spec',
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
