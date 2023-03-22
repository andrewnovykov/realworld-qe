class ArticlePage {
	get articleTitleInput() {
		return cy.get('input[name="title"]')
	}
	get articleDescriptionInput() {
		return cy.get('input[name="description"]')
	}
	get articleBodyInput() {
		return cy.get('textarea[placeholder="Write your article (in markdown)"]')
	}
	get articleTagsInput() {
		return cy.get('input[name="tags"]')
	}
	get publishArticleButton() {
		cy.get('[data-testid="publish-article-button"][type="submit"]')
	}
	CreateNewArticle(title, description, body, tags) {
		this.articleTitleInput.type(title)
		this.articleDescriptionInput.type(description)
		this.articleBodyInput.type(body)
		this.articleTagsInput.type(tags)
		this.publishArticleButton.click()
	}
}

module.exports = new ArticlePage()
