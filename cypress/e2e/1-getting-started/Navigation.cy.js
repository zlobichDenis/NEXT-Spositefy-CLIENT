describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('should open homepage', () => {
        cy.get('.title').should('have.text', 'Welcome to Spositefy');
    });

    it('should open track list page', () => {
        cy.get('.tracks').click({ multiple: true, force: true });
        cy.url().should('contain', 'tracks');

        cy.get('h1').should('contain', 'List of tracks');
    });

    it ('should open albums', () => {
        cy.get('.albums').click({ multiple: true, force: true });

        cy.get('h1').should('contain', '404');
        cy.url().should('contain', 'albums');
    });
});