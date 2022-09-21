/// <reference types="Cypress" />

import PracticePage from "../pageObjects/PracticePage";

describe("My Test Suite", function () {
  before(function () {
    PracticePage.loadHomePage();
  });

  it.skip("practice page test case", function () {
    PracticePage.getTitle();
    PracticePage.getDropdownOption();
    PracticePage.searchCountry();
    PracticePage.clickonRegForm();
  });

  it("Input the registration form", function () {
    PracticePage.getTitle();
    PracticePage.getDropdownOption();
    PracticePage.searchCountry();
    PracticePage.clickonRegForm();
    PracticePage.firstName();
    PracticePage.lastName();
    PracticePage.email();
    PracticePage.phone();
    // PracticePage.course();
  });
});
