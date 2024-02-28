let profileId = '1';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login().then((user) => {
      profileId = user.id;
      cy.visit(`/profile/${user.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });
  it('И редактирует его', () => {
    cy.updateProfile('new', 'lastname');
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'lastname');
  });
});
