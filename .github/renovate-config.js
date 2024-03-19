module.exports = {
	branchPrefix: 'dependency-update/',
	gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
	onboarding: false,
	platform: 'github',
	repositories: ['wim-de-groot/4546B'],
	packageRules: [
		{
			matchPackagePatterns: ['.*'],
			minimumReleaseAge: '12 hours',
		},
	],
};
