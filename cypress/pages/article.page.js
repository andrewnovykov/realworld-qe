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
	get deleteArticleButton() {
		return cy.get('.article-actions').contains('button', 'Delete Article')
	}
	CreateNewArticle(title = null, description = null, body = null, tags = null) {
		if (title !== null) this.articleTitleInput.type(title)
		if (description !== null) this.articleDescriptionInput.type(description)
		if (body !== null) this.articleBodyInput.type(body)
		if (tags !== null) this.articleTagsInput.type(tags)
		this.publishArticleButton
	}
	DeleteArticle() {
		this.deleteArticleButton.click()
	}
}

module.exports = new ArticlePage()
