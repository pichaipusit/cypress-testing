const { expect } = require("chai");

class ProductPage {
  element = {
    searchInput: () => cy.get("#search_product"),
    searchBtn: () => cy.get("#submit_search"),
    productNames: () =>
      cy.get(".product-image-wrapper .single-products .productinfo p"),
    secondProduct: () => cy.get(".single-products").eq(1),
    productAddModal: () => cy.get(".modal-content"),
    modalTitle: () => cy.get(".modal-title"),
    viewCartBtn: () => cy.get("u"),
    continueBtn: () => cy.get(".modal-footer > .btn"),
  };

  visit() {
    cy.visit("https://automationexercise.com/products");
  }

  typeProductName(name) {
    this.element.searchInput().type(name);
  }

  clickSearch() {
    this.element.searchBtn().click();
  }

  checkAllProductNames(name) {
    this.element
      .productNames()
      .invoke("text")
      .then((text) => {
        const textList = text.split("\n");
        const hasWordBlue = textList.some((item) =>
          item.toLowerCase().includes(name)
        );
        expect(hasWordBlue).to.be.true;
      });
  }

  noProductFound() {
    this.element.productNames().should("not.exist");
  }

  addtoCart() {
    this.element
      .secondProduct()
      .trigger("mouseover")
      .then(() => {
        cy.get(".product-overlay a[data-product-id='2']").click({
          force: true,
        });
      });
  }

  isAddModalVisible(msg) {
    this.element
      .productAddModal()
      .should("be.visible")
      .then(() => {
        this.element.modalTitle().invoke("text").should("contain", msg);
      });
  }

  continueShop() {
    this.element.continueBtn().click();
  }

  viewCart() {
    this.element.viewCartBtn().click();
  }
}
module.exports = new ProductPage();
