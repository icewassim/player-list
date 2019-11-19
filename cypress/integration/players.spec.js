/// <reference types="Cypress" />

import mockResponse from '../support/mocks/mock_response';
import mockEmptyList from '../support/mocks/mock_no_result';

context('Handle empty result list', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json',
      response: mockEmptyList,
    });

    cy.visit('http://localhost:3000');
  });

  it('should Display No data when no result', () => {
    cy.get('[data-cy=no-players]')
      .should('be.visible');
  });

context('Display players list', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json',
      response: mockResponse,
    });

    cy.visit('http://localhost:3000');
  });

  it('should Display players cards', () => {
    cy.get('[data-cy=card-result-0]')
      .should('be.visible')

    cy.get('.player-card').should('have.length', 3);
  });

  it('should Display players info', () => {
    cy.get('[data-cy=card-result-0]')
      .should('be.visible')
      .find('.ant-card-meta-title')
      .first()
      .should('be.visible')
      .should('contain', '#1  YODA @TheForce')

    cy.get('[data-cy=age-0]')
      .should('be.visible')
      .should('contain', 1000000000)
    
    cy.get('[data-cy=sex-0]')
      .should('be.visible')
      .should('contain', 'M')

    cy.get('[data-cy=weight-0]')
      .should('be.visible')
      .should('contain', '10Kg')
  
    cy.get('[data-cy=height-0]')
      .should('be.visible')
      .should('contain', '1m')
   });
});
});