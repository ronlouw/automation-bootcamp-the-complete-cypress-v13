describe('Autocomplete Test', () => {
    it('Should autocomplete the product "Avocado"', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();

        cy.get('#myInput').type('A');                                           // This will type 'A' in the input field

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {   // This will get all the elements in the autocomplete list
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if (prod === productToSelect) {                                     // This will check if the text of the element is equal to the product we want to select                 

                // $el.click()                                                  // depricated use the trigger command instead or wrap the element (cy.wrap($el).click();)
                $el.trigger("click");                                           // This will click on the element that we want to select
                                                         
                cy.get('#submit-button').click();                               // This will click on the submit button
                cy.url().should('include', productToSelect);                    // This will check if the url includes the product we want to select
            }
        }).then(() => {                                                         // This will run after the previous command is finished
            cy.get('#myInput').type('g');

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes';

                if (prod === productToSelect) {
                    cy.wrap($el).click();

                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect);
                }
            })
        })
    });

});
