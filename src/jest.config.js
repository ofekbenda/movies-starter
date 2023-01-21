// In jest.config.js add (if you haven't already)
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
