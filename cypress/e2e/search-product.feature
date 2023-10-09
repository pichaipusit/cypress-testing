Feature: Search Product

  Scenario: User searches for a product
    Given a user is on the product page
    When a user enters 'blue' in the search bar
    And clicks the search button
    Then it display all product names include word 'blue'
