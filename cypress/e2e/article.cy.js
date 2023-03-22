import ArticlePage from '../pages/article.page'
import LoginPage from '../pages/login.page'
import UserPage from '../pages/user.page'
import homePage from '../pages/home.page'
describe('Login', () => {
	const username = 'Babybus'
	const email = 'babybus@gmail.com'
	const password = 'QWERTY12345'
	beforeEach(function () {
		homePage.visit()
	})
	it('should be able to create an article with  Valid Inputs, QALA-25', () => {
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		cy.contains(username).should('be.visible')
		UserPage.newArticleButton.click()
		ArticlePage.CreateNewArticle('Moon', 'About Moon', 'Moon is Big', 'moon')
	})
})
