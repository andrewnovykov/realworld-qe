describe('POST /api/articles', () => {
	it('should be able to create an article with with Valid Inputs, QALA-25', () => {
		cy.loginAsMainUserToken().then((token) => {
			expect(token).to.exist
		})
		// Perform some action that requires the user to be logged in
		//Create Article
		const uniqueId = Date.now()
		const uniqueTitle = `API${uniqueId}`
		const createArticle = {
			article: {
				title: uniqueTitle,
				description: 'Rising Need For API Testing',
				body: 'An API abstracts the implementation layer',
				tagList: ['API'],
			},
		}
		cy.request({
			method: 'POST',
			url: '/api/articles',
			headers: {
				Authorization: '',
			},
			body: createArticle,
			failOnStatusCode: false,
			gzip: true,
		}).then((response) => {
			expect(response.status).to.eq(201)
			expect(response.body.article).to.have.property('article')
		})
	})
})
