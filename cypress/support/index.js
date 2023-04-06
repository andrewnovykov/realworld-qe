// cypress/support/index.js

// Read the contents of the environment file
const env = Cypress.env('NODE_ENV') || 'development'
cy.readFile(`cypress.env.${env}.json`).then((jsonString) => {
	const config = JSON.parse(jsonString)

	// Set the constants as Cypress environment variables
	Cypress.env('API_URL', config.API_URL)
	Cypress.env('AUTH_TOKEN', config.AUTH_TOKEN)
})
