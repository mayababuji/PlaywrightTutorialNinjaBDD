export class ProductPage {
  constructor(page) {
    this.page = page;

    this.quantityInput = page.getByRole('textbox', {
      name: 'Qty',
      exact: true
    });

    this.addToCartButton = page.getByRole('button', {
      name: 'Add to Cart',
      exact: true
    });

    //this.successAlert = page.locator('.alert.alert-success');
    this.successAlert = page.getByText('Success: You have added');

   // this.requiredOptionError = page.locator('.text-danger');
     this.requiredOptionError = page.getByText('Select required!');
  }

  async setQuantity(quantity) {
    await this.quantityInput.fill(String(quantity));
  }

  async addToCart() {
    await this.addToCartButton.click();
        await this.addToCartButton.click();
  }

  async getRequiredOptionError() {
   
    return await this.requiredOptionError.textContent();
  }

  async getSuccessMessage() {
    return await this.successAlert.textContent();
  }
}