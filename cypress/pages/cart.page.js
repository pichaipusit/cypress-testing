const { expect } = require("chai");

class CartPage {
  element = {
    price: () => cy.get(".cart_price > p"),
    quantity: () => cy.get(".disabled"),
    total: () => cy.get(".cart_total_price"),
  };

  visit() {
    cy.visit("https://automationexercise.com/view_cart");
  }

  displayCartItems() {
    this.element.price().should("be.visible");
    this.element.quantity().should("be.visible");
    this.element.total().should("be.visible");
  }

  getQuantityAndTotalPrice() {
    let price = 0;
    let quantity = 0;

    this.element
      .price()
      .invoke("text")
      .then((text) => {
        price = parseFloat(text.match(/\d+/)[0]);
      });

    this.element
      .quantity()
      .invoke("text")
      .then((text) => {
        quantity = +text;
        expect(text).to.contain(2);
      });

    this.element
      .total()
      .invoke("text")
      .then((text) => {
        const totalPrice = parseFloat(text.match(/\d+/)[0]);
        expect(totalPrice).to.equal(quantity * price);
      });
  }
}
module.exports = new CartPage();
