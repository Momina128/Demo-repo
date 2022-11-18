describe('FileUpload', () => {
    it("Hits QA Tools Site", () =>{
        cy.visit("https://demoqa.com")
        const imagefile = 'sampleFile.jpeg';
        cy.get('.card-body').contains('Elements').click()
        cy.get('.btn').contains('Upload and Download').click()
        cy.get('#uploadFile').attachFile(imagefile);
    
    });
});
