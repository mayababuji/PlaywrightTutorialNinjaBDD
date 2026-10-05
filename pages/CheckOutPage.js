export class CheckOutPage {
  constructor(page) {
    this.page = page;

    // Cart page
    this.checkoutLink = page.getByRole('link', {
      name: 'Checkout',exact: true
    });
     this.checkoutLinkmainPage = page.getByRole('link', {
      name: 'Checkout'
    });

    this.cartQuantityInput = page.locator('input[name^="quantity"]');
    // this.cartQuantityInput = page.getByRole('textbox',{name:'4'});
   // this.updateCartButton = page.locator('.fa-refresh');
      this.updateCartButton = page.getByRole('button',{name:''});


   // this.removeCartItemButton = page.locator('.fa-times-circle');
    this.removeCartItemButton = page.getByRole('button', {
  name: '',
  exact: true
});

    // this.ecoTaxAmount = page.locator(
    //   '#content table.table-bordered tr:has-text("Eco Tax") td:last-child'
    // );
    this.ecoTaxAmount = page
  .getByRole('row', { name: /Eco Tax/ })
  .getByRole('cell')
  .last();

    // this.vatAmount = page.locator(
    //   '#content table.table-bordered tr:has-text("VAT") td:last-child'
    // );
    this.vatAmount = page.getByRole('row', { name: /VAT/ })
  .getByRole('cell')
  .last();

    this.cartErrorMessage = page.locator('.alert-danger');

    // Coupon section
    this.useCouponTab = page.getByRole('link',{name:'Use Coupon Code '});
    this.couponInput = page.locator('#input-coupon');
    this.applyCouponButton = page.locator('#button-coupon');
    this.couponErrorMessage = page.locator('.alert-danger');

    // Gift certificate section
    this.useGiftCertifateTab = page.getByRole('link',{name:'Use Gift Certificate '});
    this.giftCertificateInput = page.locator('#input-voucher');
    this.applyGiftCertificateButton = page.locator('#button-voucher');
    this.giftCertificateErrorMessage = page.locator('.alert-danger');

    // Checkout options section
    this.registerAccountRadio = page.getByRole('radio', {
      name: 'Register Account',
      exact: true
    });

    this.continueCheckoutOptionsButton = page.locator('#button-account');

    // Registration section
    this.firstNameInput = page.getByRole('textbox', {
      name: 'First Name'
    });

    this.lastNameInput = page.getByRole('textbox', {
      name: 'Last Name'
    });

    this.emailInput = page.getByRole('textbox', {
      name: '* E-Mail'
    });

    this.addressInput = page.getByRole('textbox', {
      name: 'Address 1'
    });

    this.telephoneInput = page.getByRole('textbox', {
      name: 'Telephone'
    });

    this.cityInput = page.getByRole('textbox', {
      name: 'City'
    });

    this.postalCodeInput = page.getByRole('textbox', {
      name: 'Post Code'
    });

    this.passwordInput = page.getByRole('textbox', {
      name: '* Password',
      exact: true
    });

    this.confirmPasswordInput = page.getByRole('textbox', {
      name: '* Password Confirm',
      exact: true
    });

    this.countryDropdown = page.locator('#input-payment-country');
    this.zoneDropdown = page.locator('#input-payment-zone');

    this.registrationPrivacyCheckbox = page.locator(
      '#collapse-payment-address input[name="agree"]'
    );

    this.continueRegistrationButton = page.locator('#button-register');

    // Shipping and payment sections
    this.continueShippingAddressButton = page.locator(
      '#button-shipping-address'
    );

    this.continueShippingMethodButton = page.locator(
      '#button-shipping-method'
    );

    this.paymentTermsCheckbox = page.locator(
      '#collapse-payment-method input[name="agree"]'
    );

    this.continuePaymentMethodButton = page.locator(
      '#button-payment-method'
    );

    this.confirmOrderButton = page.locator('#button-confirm');

    // Confirmation page
    this.confirmationMessage = page.getByText(
      'Your order has been placed!',
      { exact: true }
    );

    this.continueHomePageLink = page.getByRole('link', {
      name: 'Continue',
      exact: true
    });
  }

  // Cart methods
  async clickOnCheckout() {
    await this.checkoutLink.click();
  }
   async clickOnCheckoutmainPage() {
    await this.checkoutLinkmainPage.click();
  }

  async updateCartQuantity(quantity) {
    await this.cartQuantityInput.fill(quantity);
    await this.updateCartButton.click();
  }

  async removeProductFromCart() {
    await this.removeCartItemButton.click();
  }

  async getEcoTax() {
  //   console.log("CHEKOUT PAGE OPEN CART");
  //  console.log(await this.page.locator('#content').ariaSnapshot());
  //    console.log("CHEKOUT PAGE OPEN CART");
    return await this.ecoTaxAmount.textContent();
  }

  async getVat() {
    return await this.vatAmount.textContent();
  }

  async getCartErrorMessage() {
    return await this.cartErrorMessage.textContent();
  }
  async clickOnCouponTab() {
    await this.useCouponTab.click();
  }

  // Coupon methods
  async enterCouponCode(couponCode) {
    await this.couponInput.fill(couponCode);
  }

  async applyCoupon() {
    await this.applyCouponButton.click();
  }

  async clearCouponCode() {
    await this.couponInput.clear();
  }

  async getCouponErrorMessage() {
    return await this.couponErrorMessage.textContent();
  }
  async clickOnUseGiftCertificateTab() {
    await this.useGiftCertifateTab.click();
  }

  // Gift certificate methods
  async enterGiftCertificate(giftCertificateCode) {
    await this.giftCertificateInput.fill(giftCertificateCode);
  }

  async applyGiftCertificate() {
    await this.applyGiftCertificateButton.click();
  }

  async clearGiftCertificate() {
    await this.giftCertificateInput.clear();
  }

  async getGiftCertificateErrorMessage() {
    return await this.giftCertificateErrorMessage.textContent();
  }

  // Checkout options methods
  async selectRegisterAccount() {
    await this.registerAccountRadio.check();
  }

  async continueFromCheckoutOptions() {
    await this.continueCheckoutOptionsButton.click();
  }

  // Registration methods
  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterAddress(address) {
    await this.addressInput.fill(address);
  }

  async enterTelephone(telephone) {
    await this.telephoneInput.fill(telephone);
  }

  async enterCity(city) {
    await this.cityInput.fill(city);
  }

  async enterPostalCode(postalCode) {
    await this.postalCodeInput.fill(postalCode);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(password) {
    await this.confirmPasswordInput.fill(password);
  }

  async selectCountry(country) {
    await this.countryDropdown.selectOption({ label: country });
  }

  async selectZone(zone) {
    await this.zoneDropdown.selectOption({ label: zone });
  }

  async agreeToPrivacyPolicy() {
    await this.registrationPrivacyCheckbox.check();
  }

  async continueFromRegistration() {
    await this.continueRegistrationButton.click();
  }

  async completeRegistration({
    firstName,
    lastName,
    email,
    address,
    telephone,
    city,
    postalCode,
    country,
    zone,
  password = process.env.TEST_PASSWORD
  }) {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterEmail(email);
    await this.enterAddress(address);
    await this.enterTelephone(telephone);
    await this.enterCity(city);
    await this.enterPostalCode(postalCode);
    await this.enterPassword(password);
    await this.enterConfirmPassword(password);
    await this.selectCountry(country);
    await this.selectZone(zone);
    await this.agreeToPrivacyPolicy();
    await this.continueFromRegistration();
  }

  // Shipping and payment methods
  async continueFromShippingAddress() {
    await this.continueShippingAddressButton.click();
  }

  async continueFromShippingMethod() {
    await this.continueShippingMethodButton.click();
  }

  async agreeToPaymentTerms() {
    await this.paymentTermsCheckbox.check();
  }

  async continueFromPaymentMethod() {
    await this.agreeToPaymentTerms();
    await this.continuePaymentMethodButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }

  async continueToHomePage() {
    await this.continueHomePageLink.click();
  }
}