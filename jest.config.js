module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest"
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: [
        "node_modules/(?!(babel-jest|jest-vue-preprocessor)/)"
    ],
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"]
};
