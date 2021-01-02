module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testMatch: ['**/*.spec.{js,ts,tsx}'],
  collectCoverage: true,
  moduleNameMapper: {
    '^Services(.*)$': '<rootDir>/src/services$1'
  }
}
