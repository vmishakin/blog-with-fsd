import { selectByTestId } from '../../e2e/helpers/selectByTestId';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/constants/localstorage';
import { User } from '../../../src/entities/User';

export const login = (
  username: string = 'testuser',
  password: string = '123',
) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:7001/login',
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
