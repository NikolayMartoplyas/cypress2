const selectors = require('../fixtures/selectors');
const place = require('../fixtures/place.json');
const userPath = Cypress.env('userPath');
describe('booking a seat in the cinema', () => {
  it('booking for the movie mickey mouse', () => {
    cy.visit(userPath);
    cy.get(selectors.booking.pageNav).should('have.length', 7);
    cy.get(selectors.booking.day).click();
    cy.get(selectors.booking.time).contains('20:00').click();
    cy.get(selectors.booking.cinemaHall).contains('Ведьмак').should('be.visible');
    place.forEach(({ row, place }) => {
      cy.get(`${selectors.booking.buyingScheme} > :nth-child(${row}) > :nth-child(${place})`).click();
    });
    cy.get(selectors.booking.button).click();
    cy.contains('Получить код бронирования').should('be.visible').should('not.be.disabled');
    cy.get(selectors.booking.ticketInfo).should('have.length', 6);
    cy.get(`${selectors.booking.ticketInfo1} > :nth-child(2)`).contains('1/1, 1/2, 1/3').should('be.visible');
  });
});
