class homePage {
	get bannerTitle() {
		return cy.get('.logo-font')
	}
	get signUpButton() {
		return cy.get('[href="#/register"]')
	}

	visit() {
		cy.visit('https://qafromla.herokuapp.com/')
	}
}

module.exports = new homePage()
