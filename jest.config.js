
module.exports = {
    rootDir: './assets',
    testRegex: './assets/js/.*test\\.tsx',
    setupFiles: ['<rootDir>/tests/setup.js'],
    moduleNameMapper: {
        '^@containers(.*)$': '<rootDir>/js/containers/$1',
        '^@components(.*)$': '<rootDir>/js/components$1',
        '^@styles(.*)$': '<rootDir>/styles',
        //Handling resources loading for tests
        '\\.(css|less|scss|jpg|jpeg|png)$': 'identity-obj-proxy'
    },
    //Generate coverage reports as HTML
    //inside /assets/coverage directory
    //"coverageReporters": ["json", "html"],
    collectCoverageFrom: [
        "<rootDir>/js/**/*.{js,jsx,ts,tsx}"
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        },
    }
};