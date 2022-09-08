// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('ToDO App spec', () => {
  it('Visits the todo app', () => {
    cy.visit('http://localhost:3000/');
    // Finds the content
    cy.contains('todos');

    // Clicks the element
    cy.contains('Use Apollo Client 3').click();

    // Should list completed todos
    cy.get('.filters li:nth-child(2) a').click().should('have.class', 'selected');

  });

  it('Adds todo item', () => {
    cy.get('.new-todo').type('New todo item').type(`{enter}`);
    cy.get('.filters li:first-child a').click().should('have.class', 'selected');
    cy.contains('New todo item').should('be.visible');
  })

});