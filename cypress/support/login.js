Cypress.Commands.add('loginAsMainUser', () => {
	cy.fixture('user.data').then((userData) => {
		const loginData = {
			user: {
				email: userData.email,
				password: userData.password,
			},
		}

		cy.request({
			method: 'POST',
			url: '/api/users/login',
			body: loginData,
			failOnStatusCode: false,
			gzip: true,
		})
			.its('body.user.token')
			.should('exist')
	})
})

Cypress.Commands.add('login', (email, password) => {
	const loginData = {
		user: {
			email: email,
			password: password,
		},
	}

	cy.request({
		method: 'POST',
		url: '/api/users/login',
		body: loginData,
		failOnStatusCode: false,
		gzip: true,
	})
		.its('body.user.token')
		.should('exist')
})

Cypress.Commands.add('loginAsMainUserToken', () => {
	cy.fixture('user.data').then((userData) => {
		const loginData = {
			user: {
				email: userData.email,
				password: userData.password,
			},
		}

		cy.request({
			method: 'POST',
			url: '/api/users/login',
			body: loginData,
			failOnStatusCode: false,
			gzip: true,
		})
			.its('body.user.token')
			.then((token) => {
				// Return the token from the callback
				return token
			})
	})
})
