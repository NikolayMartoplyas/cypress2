const selectors = require('../fixtures/selectors');
const date = require('../fixtures/login.json')
const adminPath = Cypress.env('adminPath');
describe('page admin', () => {
  it('valid login', () => {
    cy.visit(adminPath);
    cy.login(date.happy.email, date.happy.password);
    cy.get(selectors.loginAmin.control).should('have.length', 5).contains('Управление залами').should('be.visible');
  });
  it('invalid login', () => {
    cy.visit(adminPath);
    cy.login(date.sad.email, date.sad.password);
    cy.contains('Ошибка авторизации!').should('be.visible');
  });
});
