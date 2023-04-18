describe('POST /api/articles', () => {
	it('should be able to create an article with with Valid Inputs, QALA-25', () => {
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
		// Perform some action that requires the user to be logged in
		//Create Article
		cy.getToken().then((token) => {
			expect(token).to.exist
			//cy.log(token)
			cy.request({
				method: 'POST',
				url: '/api/articles',
				headers: {
					Authorization: `Token ${token}`,
				},
				body: createArticle,
				failOnStatusCode: false,
				gzip: true,
			}).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.body).to.have.property('article')
				expect(response.body.article).to.have.property('title').and.be.equal(uniqueTitle)
				// prettier-ignore
				expect(response.body.article)
				.to.have.property('description')
				.and.be.equal('Rising Need For API Testing')
			})
		})
	})
})
