module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  testMatch: ['**/__tests__/**/*.test.ts'],
};
