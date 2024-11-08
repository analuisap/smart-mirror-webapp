const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.github/",
    "<rootDir>/.next/",
    "<rootDir>/node_modules",
  ],
  // coverageThreshold: {
  //   global: {
  //     lines: 80,
  //   },
  // },
};

module.exports = createJestConfig(config);
