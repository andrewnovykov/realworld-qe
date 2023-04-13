import LoginPage from '../../pages/login.page'
import homePage from '../../pages/home.page'
import userPage from '../../pages/user.page'
describe('Logout', () => {
	//CLEAN UP ! USE FIXTURES
	const email = 'babybus@gmail.com'
	const password = 'QWERTY12345'
	beforeEach(function () {
		homePage.visit()
	})
	it('should logout after successfully login, QALA-10', () => {
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		userPage.LogOut()
		cy.contains('A place to share your knowledge.').should('be.visible')
		cy.url().should('eq', 'http://qafromla.herokuapp.com/#/')
	})
})
