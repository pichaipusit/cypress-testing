import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductPage from "../../pages/product.page";

Given("a user is on the product page", () => {
  ProductPage.visit();
});

When("a user enters {string} in the search bar", (name) => {
  ProductPage.typeProductName(name);
});

And("clicks the search button", () => {
  ProductPage.clickSearch();
});

Then("a user should see the search results", () => {
  ProductPage.element.productNames().should("exist");
});

And("it display all product names include word {string}", (name) => {
  ProductPage.checkAllProductNames(name);
});

Given("a user is on the product page", () => {
  ProductPage.visit();
});

When("a user enters {string} in the search bar", (name) => {
  ProductPage.typeProductName(name);
});

And("clicks the search button", () => {
  ProductPage.clickSearch();
});

Then("there's no product to display", () => {
  ProductPage.noProductFound();
});
