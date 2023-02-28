// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('getToken', () => {
	return cy.fixture('user.data').then((userData) => {
		const loginData = {
			user: {
				email: userData.email,
				password: userData.password,
			},
		}

		return cy
			.request({
				method: 'POST',
				url: '/api/users/login',
				body: loginData,
				failOnStatusCode: false,
				gzip: true,
			})
			.its('body.user.token')
	})
})

//

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
