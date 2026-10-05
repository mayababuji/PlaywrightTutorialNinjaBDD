import { faker } from '@faker-js/faker';

export function createCustomer() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    email: faker.internet.email({
      firstName,
      lastName,
      provider: 'example.com'
    }).toLowerCase(),
    telephone: faker.string.numeric(10),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    postalCode: faker.location.zipCode(),
    country: 'United States',
    zone: 'New Jersey',
    password: process.env.TEST_PASSWORD
  };
}