describe('POST /api/users', () => {
	const uniqueId = Date.now()
	const userData = {
		user: {
			username: `username${uniqueId}`,
			email: `username${uniqueId}@gmail.com`,
			password: 'username',
		},
	}

	it('Creates a new user', () => {
		cy.request({
			method: 'POST',
			url: '/api/users',
			body: userData,
			failOnStatusCode: false,
			gzip: true,
		}).should((response) => {
			expect(response.status).to.eq(201)
			expect(response.body).to.have.property('user')
			expect(response.body.user).to.have.property('token').and.to.not.be.empty
			expect(response.body.user).to.deep.equal({
				email: userData.user.email,
				username: userData.user.username,
				bio: null,
				image: null,
				token: response.body.user.token,
			})
		})
	})
})
