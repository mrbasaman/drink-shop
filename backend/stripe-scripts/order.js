var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.orders.create({
  currency: "aud",
  email: "Harry.boldwin@example.com",
  items: [
    {
      type: "sku",
      parent: "sku_H4QEcn8srcsN0m",
      quantity: 1,
    },
  ],
  shipping: {
    name: "Harry Boldwin",
    address: {
      line1: "32 geroge street",
      city: "Los angeles",
      state: "CA",
      postal_code: "93434",
      country: "US",
    },
  },
});
