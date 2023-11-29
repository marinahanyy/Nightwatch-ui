module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["tests"],
  
  webdriver: {
    start_process: true,
    port: 4444,
    host: 'localhost',
    ssl: false,
    default_path_prefix: '',
    proxy: undefined,
    cli_args: {}
  },
  
  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities : {
        browserName : 'firefox',
        language : 'english'
      }
    }
  }
};













