const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://qafromla.herokuapp.com/',

		viewportWidth: 1920,
		viewportHeight: 1080,
	},
})
