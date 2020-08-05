const base = require('./jest.config.js')

module.exports = Object.assign({}, base, {
    collectCoverage: true,
    reporters: ['default', 'jest-junit'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**', '!src/app.tsx'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov']
})