import homePage from '../../pages/home.page'
import userPage from '../../pages/user.page'
describe('Logout', () => {
	beforeEach(function () {
		cy.loginAsMainUser()
		homePage.visit()
	})
	it('should logout after successfully login, QALA-10', () => {
		userPage.LogOut()
		cy.contains('A place to share your knowledge.').should('be.visible')
		cy.url().should('eq', 'http://qafromla.herokuapp.com/#/')
	})
})
