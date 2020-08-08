const base = require('./jest.config.js')

module.exports = Object.assign({}, base, {
    collectCoverage: true,
    reporters: ['default', 'jest-junit'],
    collectCoverageFrom: ['src/components/**/*.{ts,tsx}', '!**/node_modules/**'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov']
})