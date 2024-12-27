const selectors = require('../fixtures/selectors');
const userPath = Cypress.env('userPath');
const adminPath = Cypress.env('adminPath');
describe('should display the main page', () => {
  it('user home page', () => {
    cy.visit(userPath);
    cy.get(selectors.homePage.title).should('be.visible').and('contain.text', 'Идёмвкино');
  });
  it('admin home page', () => {
    cy.visit(adminPath);
    cy.get(selectors.homePage.title).should('be.visible').and('contain.text', 'Идёмвкино');
    cy.get(selectors.homePage.substring).should('be.visible').and('contain.text', 'Администраторррская');
  });
});
