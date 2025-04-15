/// <reference types="cypress" />

describe("Interact drop down lists via webdriveruni", () => {
    it("Select specific values via drop-down list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  // Remove target attribute to open in the same tab

        cy.get('#dropdowm-menu-1').select("Python").should('have.value', 'python')
        cy.get('#dropdowm-menu-2').select("maven").should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select("javascript").should('have.value', 'javascript')
      
    })

    it.only("Interact with the second list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  // Remove target attribute to open in the same tab

        
        // selected on value attribute 'maven"
        cy.get('#dropdowm-menu-2').select("maven").should('have.value', 'maven') 
        // selected on text "TestNG"
        cy.get('#dropdowm-menu-2').select("maven").contains('TestNG') 
       
      
    })

})