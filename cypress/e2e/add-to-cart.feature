Feature: Search Product

  Scenario: User searches for a product and find it in the catalog
    Given a user is on the product page
    When the user hover on the second product to click add to cart
    Then a dialog with the message 'Added!' appears
    And the user clicks Continue Shopping
    And hovers over the same product and click add to cart again
    Then another dialog with the message 'Added!' appears
    And the user clicks View Cart
    Then it takes the user to the view cart page 
    And it display the price, a quantity of '2' and correct total price 
