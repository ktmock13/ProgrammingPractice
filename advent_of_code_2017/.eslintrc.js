module.exports = {
	extends: 'airbnb',
	rules: {
		'no-console': 'off',
		'no-plusplus': 0,
		'max-len': ['error', { code: 120 }],
		quotes: [2, 'single', 'avoid-escape'],
		'jsx-quotes': [2, 'prefer-single'],
		'no-extra-semi': 1,
		'no-dupe-keys': 1,
		'comma-dangle': 1,
		camelcase: 1,
		indent: [2, 2, { SwitchCase: 1 }],
		'no-empty': 1,
		'no-unused-vars': [2, { args: 'none', ignoreRestSiblings: true }],
		semi: [2, 'always', { omitLastInOneLineBlock: true }],
		'no-extra-bind': 1,
		'babel/new-cap': 1,
	},
	plugins: ['babel', 'react'],
};
