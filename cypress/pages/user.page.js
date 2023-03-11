class UserPage {
	get userMenuDropdown() {
		return cy.get('.dropdown > .nav-link')
	}
	get logOutButton() {
		return cy.get('.ion-log-out')
	}
	LogOut() {
		this.userMenuDropdown.click()
		this.logOutButton.click()
	}
}

module.exports = new UserPage()
