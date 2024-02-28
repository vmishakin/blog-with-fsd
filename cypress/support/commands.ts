/// <reference types="cypress" />

import * as commonComands from './commands/common';
import * as profileComands from './commands/profile';
import * as articleComands from './commands/article';
import * as commentsComands from './commands/comments';
import * as ratingComands from './commands/rating';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.addAll(commonComands);
Cypress.Commands.addAll(profileComands);
Cypress.Commands.addAll(articleComands);
Cypress.Commands.addAll(commentsComands);
Cypress.Commands.addAll(ratingComands);

export {};
