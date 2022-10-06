describe('TrackList', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/tracks');
    })

    it('should contains track items', () => {
        cy.get('.play-pause').first().click({ force: true, multiple: true });

        cy.get('.player').should('exist');
    });

    it('should open create track form after click on upload button', () => {
        cy.get('.upload-button').click();

        cy.get('h2').should('have.text', 'Info about track');
        cy.url().should('contain', 'create');
    });
});