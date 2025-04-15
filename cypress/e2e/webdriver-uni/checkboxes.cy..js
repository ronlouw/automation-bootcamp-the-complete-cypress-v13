/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })// 

        cy.get('#checkboxes').find("[type='checkbox']").first().as('option-1')    // alias the checkbox element option-1
        cy.get('@option-1').check().should('be.checked') 
            // .first()
            // .check()
            // .should('be.checked')
            // .and('have.value', 'option-1')


    });

    it.only("Uncheck and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true }) // remove target attribute to open in the same window
    
         cy.get('#checkboxes > :nth-child(3) >input').as('option-3') // alias the checkbox element option-3
         cy.get('@option-3').check().should('be.checked')
         cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it("Check multiple checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true }) // remove target attribute to open in the same window
    
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"])         //  check all checkboxes at once   
        cy.get("input[type='checkbox']").should('be.checked') // assert that all checkboxes are checked
        cy.get("input[type='checkbox']").should('have.length', 4) // assert that there are 4 checkboxes in total
    })

})