module.exports = {
  testMatch: ['**/*.spec.js'],
  collectCoverage: true,
  moduleNameMapper: {
    '^Services(.*)$': '<rootDir>/src/services$1'
  }
}
