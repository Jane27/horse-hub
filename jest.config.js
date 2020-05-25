
module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testRegex: "/__tests__/.*\\.(spec|test)\\.(ts|tsx|js)$",

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
    moduleNameMapper: {
        '^(components|stores|icons|hooks|services)(.*)$': '<rootDir>/src/$1$2',
        '^types$': '<rootDir>/src/types'
    }
}