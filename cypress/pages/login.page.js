class LoginPage {
	get emailInput() {
		return cy.get('input[type="email"]')
	}
	get passwordInput() {
		return cy.get('input[type="password"]')
	}
	get signInRegistrationButton() {
		return cy.get('button').contains('Sign ins')
	}

	logIn(email, password) {
		this.emailInput.clear().type(email)
		this.passwordInput.clear().type(password)
		this.signInRegistrationButton.click()
	}
}

module.export = new LoginPage()
