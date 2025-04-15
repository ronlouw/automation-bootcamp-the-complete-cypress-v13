/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  // Remove target attribute to open in the same tab
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check()
    });

    it("Validate the states of specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})// Remove target attribute to open in the same tab
        // only one radio button at the time can be checked
        
        cy.get("[value='lettuce']").should('not.be.checked') 
        cy.get("[value='cabbage']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        
        // select another radio button
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        // another assertion on cabbage
        cy.get("[value='cabbage']").should('be.disabled')
    });
})