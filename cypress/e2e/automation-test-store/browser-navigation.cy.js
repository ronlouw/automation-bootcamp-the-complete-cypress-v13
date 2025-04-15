/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // navigate to contact us page
        cy.url().should('include', 'contactus')

        cy.go('back')
        //navigate back to home page
        cy.reload() 
        cy.url().should('include', 'http://www.webdriveruniversity.com')
        //cy.reload(true) //reload without using cache

        cy.go('forward')
        //navigate forward to contact us page
        cy.url().should('include', 'contactus')

        cy.go('back')
        // navigate back to the home page
        cy.url().should('include', 'http://www.webdriveruniversity.com')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        //navigate to login portal page
        cy.url().should('include', 'Login-Portal')
        // navigate back to home page
        cy.go('back')
        cy.url().should('include', 'http://www.webdriveruniversity.com')        
    });
})