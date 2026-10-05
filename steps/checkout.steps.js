import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures.js';
import { createCustomer } from '../test-data/customerFactory.js';

Given(
  'the customer opens the Tutorial Ninja store',
  async ({ homePage }) => {
    await homePage.open();
  }
);

When(
  'the customer changes the currency to Euro',
  async ({ homePage }) => {
    await homePage.selectEuro();
  }
);

Then(
  'the Euro currency symbol is displayed',
  async ({ homePage }) => {
    const currencySymbol = await homePage.getCurrencySymbol();

    console.log(`Currency Symbol: ${currencySymbol}`);

    await expect(currencySymbol).toBe('€');
  }
);

When(
  'the customer attempts to add {string} without selecting a required option',
  async ({ homePage, productPage }, productName) => {
    await homePage.openProduct(productName);
    await productPage.addToCart();
  }
);

Then(
  'the Canon camera validation error is printed',
  async ({ productPage }) => {
    console.log(await productPage.getRequiredOptionError());

    await expect(productPage.requiredOptionError).toContainText(
      'Select required!'
    );
  }
);

When(
  'the customer opens the {string} product page',
  async ({ homePage }, productName) => {
    await homePage.openProduct(productName);
  }
);

When(
  'the customer sets the iPhone quantity to 2',
  async ({ productPage }) => {
    await productPage.setQuantity('2');
  }
);

When(
  'the customer adds the iPhone to the cart',
  async ({ productPage }) => {
    await productPage.addToCart();
  }
);

Then(
  'the iPhone success message is printed',
  async ({ productPage }) => {
    console.log(await productPage.getSuccessMessage());

    await expect(productPage.successAlert).toContainText(
      'Success: You have added'
    );
  }
);

When(
  'the customer views the shopping cart',
  async ({ homePage }) => {
    await homePage.openCart();
  }
);

When(
  'the customer changes the iPhone quantity to 3',
  async ({ checkoutPage }) => {
    await checkoutPage.updateCartQuantity('3');
  }
);

Then(
  'the Eco Tax and VAT are printed',
  async ({ checkoutPage }) => {
    console.log(`Eco Tax: ${await checkoutPage.getEcoTax()}`);
    console.log(`VAT: ${await checkoutPage.getVat()}`);

    await expect(checkoutPage.ecoTaxAmount).toBeVisible();
    await expect(checkoutPage.vatAmount).toBeVisible();
  }
);

When(
  'the customer proceeds to checkout with the iPhone',
  async ({ checkoutPage }) => {
    await checkoutPage.clickOnCheckout();
  }
);

Then(
  'the checkout error is printed',
  async ({ checkoutPage }) => {
    console.log(await checkoutPage.getCartErrorMessage());

    await expect(checkoutPage.cartErrorMessage).toContainText(
      'Products marked with *** are not available'
    );
  }
);

Then(
  'the customer removes the iPhone from the cart',
  async ({ checkoutPage }) => {
    await checkoutPage.removeProductFromCart();
  }
);

When(
  'the customer opens {string} from Laptops and Notebooks',
  async ({ categoryPage },productName) => {
    await categoryPage.openLaptopsAndNotebooks();
    await categoryPage.openProduct(productName);
  }
);

Then(
  'the default product quantity is 1',
  async ({ productPage }) => {
    await expect(productPage.quantityInput).toHaveValue('1');
  }
);

When(
  'the customer adds HP LP3065 to the cart',
  async ({ productPage }) => {
    await productPage.addToCart();
  }
);

Then(
  'the {string} success message is displayed',
  async ({ productPage },productName) => {
    await expect(productPage.successAlert).toContainText(productName);
  }
);

When(
  'the customer applies coupon code {string}',
  async ({ checkoutPage }, couponCode) => {
    await checkoutPage.clickOnCouponTab();
    await checkoutPage.enterCouponCode(couponCode);
    await checkoutPage.applyCoupon();
  }
);

Then(
  'the coupon error message is printed',
  async ({ checkoutPage }) => {
    console.log(await checkoutPage.getCouponErrorMessage());

    await expect(checkoutPage.couponErrorMessage).toContainText(
      'Warning: Coupon is either invalid, expired or reached its usage limit!'
    );
  }
);

When(
  'the customer applies gift certificate code {string}',
  async ({ checkoutPage }, giftCertificateCode) => {
    await checkoutPage.clickOnUseGiftCertificateTab();
    await checkoutPage.enterGiftCertificate(giftCertificateCode);
    await checkoutPage.applyGiftCertificate();
  }
);

Then(
  'the gift certificate error message is printed',
  async ({ checkoutPage }) => {
    console.log(await checkoutPage.getGiftCertificateErrorMessage());

    await expect(checkoutPage.giftCertificateErrorMessage).toBeVisible();
  }
);

When(
  'the customer clears the coupon and gift certificate fields',
  async ({ checkoutPage }) => {
    await checkoutPage.clearCouponCode();
    await checkoutPage.clearGiftCertificate();
  }
);

When(
  'the customer proceeds to checkout with a new registered account',
  async ({ checkoutPage }) => {
    await checkoutPage.clickOnCheckoutmainPage();
  }
);

When(
  'the customer registers an account and completes checkout',
  async ({ checkoutPage }) => {
    const customer = createCustomer();

    await checkoutPage.selectRegisterAccount();
    await checkoutPage.continueFromCheckoutOptions();
    await checkoutPage.completeRegistration(customer);
    await checkoutPage.continueFromShippingAddress();
    await checkoutPage.continueFromShippingMethod();
    await checkoutPage.continueFromPaymentMethod();
    await checkoutPage.confirmOrder();
  }
);

Then(
  'the order confirmation message is displayed',
  async ({ checkoutPage }) => {
    await expect(checkoutPage.confirmationMessage).toBeVisible();
  }
);
