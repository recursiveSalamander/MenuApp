exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['signin_spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}