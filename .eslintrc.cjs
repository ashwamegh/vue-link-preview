/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended",
		"@vue/eslint-config-prettier",
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	overrides: [
		{
			files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
			extends: ["plugin:cypress/recommended"],
		},
	],
	rules: {
		"vue/multi-word-component-names": 0,
		"@typescript-eslint/ban-ts-comment": 0,
		"prettier/prettier": 0,
	},
};