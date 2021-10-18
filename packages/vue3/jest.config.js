const e2eConfig = {
  displayName: "e2e",
  testMatch  : [ "<rootDir>/test/e2e/**/*.test.js" ]
};

const unitConfig = {
  collectCoverage: true,
  displayName    : "unit",
  testMatch: [
    "<rootDir>/test/unit/**/*.test.js"
  ],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(babel-jest)/)"
  ],
};

module.exports = {
  verbose : true,
  projects: [
    unitConfig,
    e2eConfig
  ]
};
