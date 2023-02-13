class homePage {
	get bannerTitle() {
		return cy.get('.logo-font')
	}
	get signUpButton() {
		return cy.get('[href="#/register"]')
	}
	get logInButton() {
		return cy.get('[href="#/login"]')
	}
	visit() {
		cy.visit('/')
	}
}

module.exports = new homePage()
