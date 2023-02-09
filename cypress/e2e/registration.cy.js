import homePage from '../pages/home.page'
import RegisatrationPage from '../pages/registration.page'

describe('Registration', () => {
	const uniqueId = Date.now()
	const username = `uName${uniqueId}`
	const email = `email${uniqueId}@gamil.com`
	const password = `password${uniqueId}`

	it('should be able to sign up with valid credential, QALA-2', () => {
		homePage.visit()
		homePage.signUpButton.click()
		RegisatrationPage.signUpNewAccount(username, email, password)
		cy.contains(username).should('be.visible')
	})

	it('should not be able sign up with  an already registered email address and Username, QALA-6', () => {
		homePage.visit()
		homePage.signUpButton.click()
		RegisatrationPage.signUpNewAccount(username, email, password)
		cy.contains('Email already exists.. try logging in').should('be.visible')
	})
})
