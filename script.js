//your code here
describe('Audio Section Test', () => {
    it('should contain the heading "3 Random Audios"', () => {
        // Visit the page
        cy.visit(baseUrl + "/main.html");

        // Increase timeout and check for the heading with correct case sensitivity
        cy.contains('3 Random Audios', { timeout: 10000 }).should('exist');
    });
});
