import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductPage from "../../pages/product.page";

Given("a user is on the product page", () => {
  cy.visit("https://automationexercise.com/products");
});

When("a user enters {string} in the search bar", (name) => {
  ProductPage.typeProductName(name);
});

And("clicks the search button", () => {
  ProductPage.clickSearch();
});

Then("it display all product names include word {string}", (name) => {
  ProductPage.checkAllProductNames(name);
});
