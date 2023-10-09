Feature: Search Product

  Scenario: User searches for a product and find it in the catalog
    Given a user is on the product page
    When a user enters 'blue' in the search bar
    And clicks the search button
    Then a user should see the search results
    And it display all product names include word 'blue'

  Scenario: User searches for a product that's not in the catalog
    Given a user is on the product page
    When a user enters 'apple' in the search bar
    And clicks the search button
    Then there's no product to display
