/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true}) // remove target attribute to open in the same window

        cy.get('#frame').then($iframe =>{
            const body =$iframe.contents().find('body')
            cy.wrap(body).as('iframe') // wrap the results to an alias to use cypress commands)
             })        
        
        cy.get('@iframe').find('#button-find-out-more>').click()
        
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should(($expectedText) => {
            const actualText = $expectedText.text()
            expect(actualText).to.include('Welcome to webdriveruniversity.com')
        })
        cy.get('@modal').contains('Close').click()
    });
})