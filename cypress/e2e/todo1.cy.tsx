/// <reference types="cypress" />
const todoText = 'first low priority todo';
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Add").click()
    cy.get("[name='todo-text-input'").type(todoText)
    cy.get(".react-date-picker").click()
    cy.get(".react-calendar__navigation__label").click();
    cy.contains("September").click();
    cy.get(".react-calendar__month-view__days").contains("20").click()
    cy.get("#assignee").click();
    cy.contains("Sam San").click();
    cy.get("#todo-main-action-button").click();
    cy.contains(todoText);
  })
})