module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor"
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: [
        "node_modules/(?!(babel-jest|jest-vue-preprocessor)/)"
    ]
}