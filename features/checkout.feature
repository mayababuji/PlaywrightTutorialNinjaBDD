Feature: Customer checkout

  Background:
    Given the customer opens the Tutorial Ninja store

  @currency
  Scenario: Customer changes currency to Euro
    When the customer changes the currency to Euro
    Then the Euro currency symbol is displayed

  @camera
  Scenario: Customer sees validation error for Canon EOS 5D
    When the customer attempts to add "Canon EOS 5D" without selecting a required option
    Then the Canon camera validation error is printed

@iphone-add
Scenario: Customer adds iPhone to the cart
  When the customer opens the "iPhone" product page
  And the customer sets the iPhone quantity to 2
  And the customer adds the iPhone to the cart
  Then the iPhone success message is printed
  @iphone-update
Scenario: Customer updates iPhone quantity in cart
  When the customer opens the "iPhone" product page
  And the customer sets the iPhone quantity to 2
  And the customer adds the iPhone to the cart
  And the customer views the shopping cart
  And the customer changes the iPhone quantity to 3
  Then the Eco Tax and VAT are printed

  @checkout-error
  Scenario: Customer cannot checkout without required details
    When the customer opens the "iPhone" product page
    And the customer sets the iPhone quantity to 2
    And the customer adds the iPhone to the cart
    And the customer views the shopping cart
    And the customer proceeds to checkout with the iPhone
    Then the checkout error is printed
    And the customer removes the iPhone from the cart

  @hp-cart
  Scenario: Customer adds HP LP3065 to cart
    When the customer opens "HP LP3065" from Laptops and Notebooks
    Then the default product quantity is 1
    When the customer adds HP LP3065 to the cart
    Then the "HP LP3065" success message is displayed

    @gift-certificate
Scenario: Customer sees an error for an invalid gift certificate
  When the customer opens "HP LP3065" from Laptops and Notebooks
  And the customer adds HP LP3065 to the cart
  And the customer views the shopping cart
  And the customer applies gift certificate code "AXDFGH123"
  Then the gift certificate error message is printed

  @coupon
Scenario: Customer sees an error for an invalid coupon code
  When the customer opens "HP LP3065" from Laptops and Notebooks
  And the customer adds HP LP3065 to the cart
  And the customer views the shopping cart
  And the customer applies coupon code "ABCD123"
  Then the coupon error message is printed

    @checkout-with-registration
Scenario: Customer checks out successfully after registration
  When the customer opens "HP LP3065" from Laptops and Notebooks
  And the customer adds HP LP3065 to the cart
 And the customer proceeds to checkout with new registred account
 And the customer registers an account and completes checkout
 Then the order confirmation message is displayed

 