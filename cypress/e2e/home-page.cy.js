//import home.page.js
import homePage from '../pages/home.page'

describe('Home Page', () => {
	it('user should be able to land on home page', () => {
		homePage.visit()
		homePage.bannerTitle.should('be.visible').and('contain', 'conduit')
	})
})
