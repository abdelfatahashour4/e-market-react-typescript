import { faker } from "@faker-js/faker";
import { ProductDetails } from "./types";

export function postNewProduct(image: string): void {
  // fetch data
  let results: ProductDetails[] = Array.from({ length: 5 })
    .fill(0)
    .map((item, i): ProductDetails => {
      return (item = {
        date: faker.date.recent(),
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        title: faker.name.title(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
        discount_num: faker.random.number({
          min: 15,
          max: 75,
        }),
        description: faker.lorem.paragraph().repeat(3),
        image: image,
        seller: {
          id: faker.random.uuid(),
          name: faker.name.firstName(),
          title: faker.name.title(),
          address: faker.address.streetAddress(),
          image: faker.image.avatar(),
          phone: faker.phone.phoneNumber(),
        },
      });
    });

  fetch("http://localhost:4000", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    method: "POST",
    body: JSON.stringify({ products: results }),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error.message);
    });
  return;
}
