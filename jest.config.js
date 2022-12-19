module.exports = {
  transform: {
    '.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  collectCoverage: true,
  collectCoverageFrom:  ['src/**/*.{js,jsx}']
};
