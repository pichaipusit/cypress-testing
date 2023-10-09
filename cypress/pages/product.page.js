const { expect } = require("chai");

class ProductPage {
  element = {
    searchInput: () => cy.get("#search_product"),
    searchBtn: () => cy.get("#submit_search"),
    productNames: () =>
      cy.get(".product-image-wrapper .single-products .productinfo p"),
  };

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
}
module.exports = new ProductPage();
