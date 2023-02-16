import LoginPage from '../pages/login.page'
import homePage from '../pages/home.page'
describe('Login', () => {
	const username = 'Babybus'
	const email = 'babybus@gmail.com'
	const password = 'QWERTY12345'
	beforeEach(function () {
		homePage.visit()
	})
	it('should be able to login with existing account, QALA-7', () => {
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		cy.contains(username).should('be.visible')
	})
})
