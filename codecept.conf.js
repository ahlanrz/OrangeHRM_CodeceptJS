exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://saucedemo.com',
      show: true,
      windowSize: '1200x900',
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--disable-popup-blocking',
            '--disable-infobars',
            '--disable-password-manager',
          ],
          prefs: {
            'credentials_enable_service': false,
            'profile.password_manager_enabled': false,
          },
        },
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    stepDefinitions: ['./step_definitions/*.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'OrangeHRMCodeceptJS'
}