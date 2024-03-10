export const updateProfile = (firstname = 'new', lastname = 'lastname') => {
  cy.get('[data-testid="EditableProfileCardHeader.EditButton"]').click();
  cy.get('[data-testid="ProfileCard.firstname"]').clear().type(firstname);
  cy.get('[data-testid="ProfileCard.lastname"]').clear().type(lastname);
  cy.get('[data-testid="EditableProfileCardHeader.SaveButton"]').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:7001/profile/${profileId}`,
    headers: { Authorization: 'asaf' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 23,
      currency: 'RUB',
      country: 'Russia',
      city: 'Nightcity',
      username: 'testuser',
      avatar:
        'https://www.clarisoft.com/wp-content/uploads/2015/04/icon_qa-e1430393636766.png',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
