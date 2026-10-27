module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "@vue/vue2-jest"
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: [
        "node_modules/(?!(babel-jest|@vue/vue2-jest)/)"
    ],
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"]
};
