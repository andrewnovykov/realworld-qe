class ArticlePage {
	get articleTitleInput() {
		return cy.get('input[name="title"]')
	}
	get articleDescriptionInput() {
		return cy.get('input[name="description"]')
	}
	get articleBodyInput() {
		return cy.get('input[name="body"]')
	}
	get articleTagsInput() {
		return cy.get('input[name="tags"]')
	}
	get publishArticleButton() {
		cy.get('button[type=submit]')
	}
	CreateNewArticle(title, description, body, tags) {
		this.articleTitleInput.type()
		this.articleDescriptionInput.type()
		this.articleBodyInput.type()
		this.articleTagsInput.type()
		this.publishArticleButton
	}
}

module.exports = new ArticlePage()
