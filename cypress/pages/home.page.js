class homePage {
	get bannerTitle() {
		return cy.get('.logo-font')
	}

	visit() {
		cy.visit('https://qafromla.herokuapp.com/')
	}
}

module.exports = new homePage()
