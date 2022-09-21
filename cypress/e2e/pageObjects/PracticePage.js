/// <reference types="Cypress" />

class PracticePage {
  static loadHomePage() {
    // cy.visit("https://codenboxautomationlab.com/" + "/practice/");
    cy.visit(Cypress.config().baseUrl + "/practice/");
    cy.url().should("include", "codenbox");
  }

  static getTitle() {
    cy.get(".page-title")
      .invoke("text")
      .then((text1) => {
        expect(text1).to.eq("Automation Practice");
      });
  }

  static getDropdownOption() {
    cy.get("#dropdown-class-example")
      .select("Selenium")
      .should("have.value", "option1");
  }

  static searchCountry() {
    cy.get("#autocomplete").type("can");
    cy.get(".ui-menu-item").each(($el, index, $list) => {
      if ($el.text() === "canada") {
        cy.wrap($el).click();
      }
    });
  }

  static clickonRegForm() {
    cy.contains("Registration Form").click({ force: true });
    cy.url().should("include", "registration");
  }

  static firstName() {
    cy.get("#nf-field-17").type("Admin");
  }

  static lastName() {
    cy.get("#nf-field-18").type("Admin");
  }

  static email() {
    cy.get("#nf-field-19").type("admin@gmail.com");
  }

  static phone() {
    cy.get("#nf-field-20").type("9999900000");
  }

  // static course() {
  //   cy.get("#nf-field-20");
  //   cy.get(".ui-menu-item").each(($el, index, $list) => {
  //     if ($el.text() === "selenium-automation") {
  //       cy.wrap($el).click();
  //     }
  //   });
  // }
}

export default PracticePage;
