module.exports = {
	moduleFileExtensions: ["js"],
	transform: {
		"^.+\\.jsx?$": "babel-jest"
	},
	transformIgnorePatterns: ["/node_modules/"],
	testRegex: "spec.js$",
	collectCoverage: true,
	coverageDirectory: "coverage",
	collectCoverageFrom: ["lib/**/*.js", "index.js"],
	coverageReporters: [
		"json",
		"lcov",
		"text",
		"text-summary",
		"clover",
		"html"
	]
};
