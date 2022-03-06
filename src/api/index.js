const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const api = require("./api.json");
const { faker } = require("@faker-js/faker");

// check if item is in the api.json file
/*
let oldArr = [];
let duplicated = [];

api.products.map((item) => {
  if (oldArr.includes(item.id)) {
    duplicated.push(item.id);
  } else {
    oldArr.push(item.id);
  }
  return item;
});
console.log(duplicated);
*/

app.use(
  cors({
    origin: "*",
    credentials: true,
    path: "/",
  })
);
app.use(express.json());

// fetch products
app.get("/", (req, res) => {
  console.log(api.products.length);
  res.json({
    payload: api.products
      .sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
      .slice(0, 10),
  });
});

// post new product
app.post("/", (req, res, next) => {
  const { body } = req;
  const file = fs.createWriteStream(path.join(__dirname, "api.json"));
  file.write(
    JSON.stringify({
      products: [...api.products, ...body.products],
    })
  );
  file.end();

  res.json({
    message: "it's create new products",
  });
});

// add new fields
app.post("/new-field", (req, res) => {
  const file = fs.createWriteStream(path.join(__dirname, "api.json"));
  file.write(
    JSON.stringify({
      products: api.products.map((product) => {
        return {
          ...product,
          color: [
            {
              name: faker.commerce.color(),
              count: faker.random.number({ min: 1, max: 10 }),
            },
            {
              name: faker.commerce.color(),
              count: faker.random.number({ min: 1, max: 10 }),
            },
            {
              name: faker.commerce.color(),
              count: faker.random.number({ min: 1, max: 10 }),
            },
          ],
        };
      }),
    })
  );
  file.end();
  res.json({
    message: "it's create new Date",
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
