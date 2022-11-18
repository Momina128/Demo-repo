describe('Iframes', () => {
    it("Hits QA Tools Site", () =>{
        cy.visit("https://demoqa.com")
        cy.get('.card-body').contains('Alerts, Frame & Windows').click()
        cy.get('.btn').contains('Nested Frames').click()
        cy.get('#frame1Wrapper').click()
    });
});
