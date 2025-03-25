///<reference types='cypress'/>

describe('Test Contact Us form via webdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Blogs')
        cy.get('[name="email"]').type('fake@email.com')
        cy.get('textarea.feedback-input').type('How can I learn Cypress?')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
     })
    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Blogs')
        // cy.get('[name="email"]').type('fake@email.com') // Generate an error if email is not filled
        cy.get('textarea.feedback-input').type('How can I learn Cypress?')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})

