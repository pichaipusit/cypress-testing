import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductPage from "../../pages/product.page";
import CartPage from "../../pages/cart.page";

Given("a user is on the product page", () => {
  ProductPage.visit();
});

When("the user hover on the second product to click add to cart", (name) => {
  ProductPage.addtoCart();
});

Then("a dialog with the message {string} appears", (msg) => {
  ProductPage.isAddModalVisible(msg);
});

And("the user clicks Continue Shopping", () => {
  ProductPage.continueShop();
});

And("hovers over the same product and click add to cart again", () => {
  ProductPage.addtoCart();
});

Then("another dialog with the message {string} appears", (msg) => {
  ProductPage.isAddModalVisible(msg);
});

And("the user clicks View Cart", () => {
  ProductPage.viewCart();
});

Then("it takes the user to the view cart page", () => {
  CartPage.visit();
});

And("it display the price, a quantity of '2' and correct total price", () => {
  CartPage.displayCartItems();
  CartPage.getQuantityAndTotalPrice();
});
