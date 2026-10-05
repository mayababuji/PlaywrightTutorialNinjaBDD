export class CategoryPage {
  constructor(page) {
    this.page = page;

    this.laptopsAndNotebooksLink = page.getByRole('link', {
      name: 'Laptops & Notebooks',
      exact: true
    });

    this.showAllLaptopsLink = page.getByRole('link', {
      name: 'Show AllLaptops & Notebooks',
      exact: true
    });

  }

  async openLaptopsAndNotebooks() {
    await this.laptopsAndNotebooksLink.click();
    await this.showAllLaptopsLink.click();
  }

  productCard(productName) {
    return this.page.locator('.product-thumb').filter({
      hasText: productName
    });
  }

  async openProduct(productName) {
    await this.productCard(productName)
      .getByRole('link', { name: productName})
      .first()
      .click();
  }
}