// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop';

Cypress.Commands.add('dragAndDropWithOverlay', { prevSubject: 'element' }, (subject, offsetX, offsetY) => {
  // Simulate mousedown and start dragging
  cy.wrap(subject).trigger('mousedown', { button: 0 }, { force: true });

  // Simulate mousemove to drag (you can adjust the offsetX and offsetY as needed)
  cy.get('.react-flow__pane').trigger('mousemove', { clientX: offsetX, clientY: offsetY }, { force: true });

  // Simulate mouseup to drop the element
  cy.trigger('mouseup', { force: true });
});


Cypress.Commands.add('dragAndDropWithOffsets', (subject, offsetX, offsetY) => {
  cy.wrap(subject)
    .trigger('mousedown', { button: 0 }) // Start dragging
    .trigger('mousemove', { clientX: offsetX, clientY: offsetY }) // Move to drop location
    .trigger('mouseup'); // Release drag
});

Cypress.Commands.add('dragFromTo', { prevSubject: 'element' }, (subject, toX, toY) => {
  cy.wrap(subject).trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: toX, clientY: toY });
  cy.get('body').trigger('mouseup');
});


