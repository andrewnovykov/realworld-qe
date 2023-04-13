Cypress.Commands.add('loginAsMainUser', () => {
	cy.getToken().then((token) => {
		const localStorageData = JSON.stringify({
			headers: {
				Authorization: token,
			},
			isAuth: true,
		})
		localStorage.setItem('loggedUser', localStorageData)
	})
})

Cypress.Commands.add('login', (email, password) => {
	cy.getUserToken(email, password).then((token) => {
		const localStorageData = JSON.stringify({
			headers: {
				Authorization: token,
			},
			isAuth: true,
		})
		localStorage.setItem('loggedUser', localStorageData)
	})
})
