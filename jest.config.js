module.exports = {
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: ['./setupTests.js'],
  transform: {
    '^.+\\.jsx?$': './babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
      tsConfig: 'tsconfig.jest.json',
    },
  },
  testRegex: '(/__tests__/.*\\.(spec))\\.(ts|tsx|js|jsx)?$',
};
