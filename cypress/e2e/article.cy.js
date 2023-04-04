import ArticlePage from '../pages/article.page'
import LoginPage from '../pages/login.page'
import UserPage from '../pages/user.page'
import homePage from '../pages/home.page'
describe('Login', () => {
	const username = 'Babybus'
	const email = 'babybus@gmail.com'
	const password = 'QWERTY12345'
	const title = `Moon-${Math.floor(Math.random() * 100000)}`
	beforeEach(function () {
		homePage.visit()
	})
	it('should be able to create an article with  Valid Inputs, QALA-25', () => {
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		cy.contains(username).should('be.visible')
		UserPage.newArticleButton.click()
		ArticlePage.CreateNewArticle(title, 'About Moon', 'Moon is Big', 'moon, satellite')
		cy.url().should('include', '/#/article')
		cy.contains(title)
	})
	it('should be able to create an article with out  tags field, QALA-30', () => {
		const newTitle = `1${title}`
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		cy.contains(username).should('be.visible')
		UserPage.newArticleButton.click()
		ArticlePage.CreateNewArticle(newTitle, 'About Moon', 'Moon is Big', null)
		cy.url().should('include', '/#/article')
		cy.contains(newTitle)
	})
	it('should be able to delete an article, QALA-31', () => {
		const oldTitle = `2${title}`
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		UserPage.newArticleButton.click()
		ArticlePage.CreateNewArticle(oldTitle, 'About Moon', 'Moon is Big', 'moon, satellite')
		ArticlePage.DeleteArticle()
		UserPage.globalFeedTab.click()
		cy.get(oldTitle).should('not.exist')
	})
	it.only('should be able to write and post comment under article, QALA-33', () => {
		const oldOldTitle = `3${title}`
		homePage.logInButton.click()
		LoginPage.logIn(email, password)
		UserPage.newArticleButton.click()
		ArticlePage.CreateNewArticle(oldOldTitle, 'About Moon', 'Moon is Big', 'moon, satellite')
		ArticlePage.PostComment('This is my comment.')
		cy.get('p.card-text').should('have.text', 'This is my comment.')
		cy.get('a.comment-author').should('exist')
	})
})
