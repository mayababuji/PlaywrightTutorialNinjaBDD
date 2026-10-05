import { test as base, createBdd } from 'playwright-bdd';

import { HomePage } from '../pages/HomePage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CategoryPage } from '../pages/CategoryPage.js';
import { CheckOutPage } from '../pages/CheckOutPage.js';

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  categoryPage: async ({ page }, use) => {
    await use(new CategoryPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckOutPage(page));
  }
});

export { test };

export const { Given, When, Then } = createBdd(test);