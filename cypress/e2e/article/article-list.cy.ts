describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles');
    });
  });
  it('И статьи успешно загружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it('на стабах (фикстурах)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it.skip('Пример скипа', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.get('asdasd').should('exist');
  });
});
