module.exports = {
  verbose: true,
  clearMocks: false,
  reporters: ["default"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    }
  },

  testMatch: ['<rootDir>/**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    "^.+test\\.(js|jsx)$": "babel-jest",
    '^.+test\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}