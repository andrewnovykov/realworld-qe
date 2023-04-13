import LoginPage from '../../pages/login.page'
import homePage from '../../pages/home.page'
describe('Login', () => {
	const username = 'Babybus'
	const email = 'babybus@gmail.com'
	const password = 'QWERTY12345'
	const invalidEmail = 'invalidemail@gmail.com'
	const invalidPassword = 'invalid'
	beforeEach(function () {
		homePage.visit()
	})
	it('should be able to login with existing account, QALA-7', () => {
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		cy.contains(username).should('be.visible')
	})
	it('should not be able to login with invalid email, QALA-8', () => {
		homePage.logInButton.click()
		LoginPage.logIn(invalidEmail, password)
		cy.contains('Email not found sign in first').should('be.visible')
	})

	it('should not be able to login with empty fields, QALA-23', () => {
		homePage.logInButton.click()
		LoginPage.signInRegistrationButton.click()
		cy.contains('Email is required').should('be.visible')
		cy.contains('Password is required').should('be.visible')
	})
	it('should not be able to login with invalid password, QALA-9', () => {
		homePage.logInButton.click()
		LoginPage.logIn(email, invalidPassword)
		cy.contains('Wrong email/password combination').should('be.visible')
	})
})
