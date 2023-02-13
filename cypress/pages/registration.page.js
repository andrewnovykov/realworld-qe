class RegisatrationPage {
	get yourNameInput() {
		return cy.get('input[name="username"]')
	}
	get emailInput() {
		return cy.get('input[type="email"]')
	}
	get passwordInput() {
		return cy.get('input[type="password"]')
	}
	get signUpRegistrationButton() {
		return cy.get('[data-cy="signup"]')
	}

	signUpNewAccount(username, email, password) {
		this.yourNameInput.clear().type(username)
		this.emailInput.clear().type(email)
		this.passwordInput.clear().type(password)
		this.signUpRegistrationButton.click()
	}
}

module.exports = new RegisatrationPage()
