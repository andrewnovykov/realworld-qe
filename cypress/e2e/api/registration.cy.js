describe('POST /api/users', () => {
	//USE UID
	const uniqueId = Date.now()
	const userData = {
		user: {
			username: `username${uniqueId}`,
			email: `username${uniqueId}@gmail.com`,
			password: 'username',
		},
	}

	const mainUser = Cypress.env('user')
	const existingUser = { user: { username: mainUser.username, email: mainUser.email, password: mainUser.password } }

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
	it('should not be able sign up with  an already registered User name QALA-18', () => {
		cy.request({
			method: 'POST',
			url: '/api/users/check-username-taken',
			body: existingUser,
			failOnStatusCode: false,
			gzip: true,
		}).should((response) => {
			expect(response.status).to.eq(200)
			expect(response.body).to.have.property('message').and.be.equal('Username is already taken')
			expect(response.body).to.have.property('success')
		})
	})
})
