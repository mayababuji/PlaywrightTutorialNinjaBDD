export class HomePage {
  constructor(page) {
    this.page = page;

    this.currencyButton = page.getByRole('button', {
      name: 'Currency'
    });

    this.euroButton = page.getByRole('button', {
      name: '€Euro'
    });

    this.topBar = page.locator('#top-links').filter({
      hasText: 'Shopping Cart'
    });
    this.currencyButton= page.getByRole('strong');

    // });
    this.cartLink = page.getByRole('link', {
      name: ' Shopping Cart',exact: true
    });

  

    this.homePageHeading = page.getByRole('heading', {
      name: 'Qafox.com',
      level: 1,
      exact: true
    });
  }

  async open() {
    await this.page.goto('./');
  }

  productCard(productName) {
    return this.page.locator('.product-thumb').filter({
      hasText: productName
    });
  }

  async selectEuro() {
    await this.currencyButton.click();
    await this.euroButton.click();
  }

  async openProduct(productName) {
    await this.productCard(productName)
      .locator('.caption')
      .getByRole('link', {
        name: productName,
        exact: true
      })
      .click();
  }

  async addProductToCartFromHome(productName) {
    await this.productCard(productName)
      .getByRole('button', {
        name: 'Add to Cart',
        exact: true
      })
      .click();
  }

  async openCart() {
    
    await this.cartLink.click();
   
  }
  async selectEuro() {
  await this.currencyButton.click();
  await this.euroButton.click();
}
async getCurrencySymbol() {
  return await this.currencyButton.textContent();
} 
}