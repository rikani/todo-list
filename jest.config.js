module.exports = {
  "setupFiles": [
    "./setup-tests.js"
  ],
  "verbose": true,
  "moduleFileExtensions": [
    "js"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "moduleNameMapper": {
    "^Components/(.*)$": "<rootDir>/src/js/components/$1",
    "^Actions/(.*)$": "<rootDir>/src/js/actions/$1",
    "^Reducers/(.*)$": "<rootDir>/src/js/reducers/$1",
    "^Utils/(.*)$": "<rootDir>/src/js/utils/$1",
    "^Js/(.*)$": "<rootDir>/src/js/$1",
    "^Styles/(.*)$": "<rootDir>/src/css/$1"
  }
}