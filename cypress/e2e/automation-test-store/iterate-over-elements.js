/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => { //https://docs.cypress.io/api/commands/each
      cy.log("Index: "+ index + " : "  + $el.text())
      })
  });

  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
   
    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => { 
    //   if($el.text().includes("Curls to straight Shampoo")) {
    //     cy.wrap($el).click() // wrap the element to perform click action the element is not Cypress }
    //     }
    //   })

    cy.selectProduct("Curls to straight Shampoo") // custom command in commands.js
  });
  it("Add another specific product to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.selectProduct("Seaweed Conditioner") // custom command in commands.js;
  }) 
  it("Add another specific product to basket (2) ", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.selectProduct("Eau Parfumee au The Vert Shampoo Shampoo") // custom command in commands.js
  });


})
