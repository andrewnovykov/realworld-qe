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
		cy.get('button[type=submit]').click()
	}
	CreateNewArticle(title = null, description = null, body = null, tags = null) {
		if (title !== null) this.articleTitleInput.type(title)
		if (title !== null) this.articleDescriptionInput.type(description)
		if (title !== null) this.articleBodyInput.type(body)
		if (title !== null) this.articleTagsInput.type(tags)
		if (title !== null) this.publishArticleButton
	}
}

module.exports = new ArticlePage()
