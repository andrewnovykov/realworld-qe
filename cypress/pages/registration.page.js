class RegisatrationPage {
	get yourNameInput() {
		return cy.get('input[name="username"]')
	}
	get emailInput() {
		return cy.get('input[name="email"]')
	}
	get passwordInput() {
		return cy.get('input[name="password"]')
	}
	get signUpRegistrationButton() {
		return cy.get('button').contains('Sign up')
	}

	signUpNewAccount(username, email, password) {
		this.yourNameInput.clear().type(username)
		this.emailInput.clear().type(email)
		this.passwordInput.clear().type(password)
		this.signUpRegistrationButton.click()
	}
}

module.exports = new RegisatrationPage()
