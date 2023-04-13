import RegisatrationPage from '../../pages/registration.page'
import homePage from '../../pages/home.page'
import { uid } from 'uid'

describe('Registration', () => {
	//CLEAN UP ! USE FIXTURES USE UID!
	const uniqueId = Date.now()
	const uniqUsername = `uName${uid(3)}`
	const uniqEmail = `email${uniqueId}@gamil.com`
	const uniqPassword = `password${uniqueId}`
	const username = 'Babybus'
	const email = 'babybus@gmail.com'
	const password = 'QWERTY12345'

	beforeEach(function () {
		homePage.visit()
	})
	it('should be able to sign up with valid credential, QALA-2', () => {
		homePage.signUpButton.click()
		RegisatrationPage.signUpNewAccount(uniqUsername, uniqEmail, uniqPassword)
		cy.contains(uniqUsername).should('be.visible')
	})

	it('should not be able to sign up with empty fields, QALA-5', () => {
		homePage.signUpButton.click()
		RegisatrationPage.signUpRegistrationButton.click()
		cy.contains('Username is required').should('be.visible')
		cy.contains('Email is required').should('be.visible')
		cy.contains('Password is required').should('be.visible')
	})

	it('should not be able sign up with  an already registered email address, QALA-6', () => {
		homePage.signUpButton.click()
		RegisatrationPage.signUpNewAccount(uniqUsername, email, uniqPassword)
		cy.contains('Email already exists.. try logging in').should('be.visible')
	})

	it('should not be able to create an username with special characters, QALA-24', () => {
		homePage.signUpButton.click()
		RegisatrationPage.signUpNewAccount('Baby bus', uniqEmail, uniqPassword)
		cy.contains('Username cannot contain empty characters').should('be.visible')
	})
	it('should not be able to create a password with special characters, QALA-19', () => {
		homePage.signUpButton.click()
		RegisatrationPage.signUpNewAccount(uniqUsername, uniqEmail, ' ')
		cy.contains('Password cannot contain empty characters').should('be.visible')
	})
})
