var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.skus.create(
  {
    price: 78.0,
    currency: "aud",
    inventory: { type: "finite", quantity: 100 },
    product: "prod_H4Nccy8Q4m8spp",
  },
  function (err, sku) {
    console.log("Error", err, "SKU", sku);
  }
);

stripe.skus.create(
  {
    price: 100.0,
    currency: "aud",
    inventory: { type: "finite", quantity: 100 },
    product: "prod_H4PtUz6r0jCwL5",
  },
  function (err, sku) {
    console.log("Error", err, "SKU", sku);
  }
);

stripe.skus.create(
  {
    price: 129.0,
    currency: "aud",
    inventory: { type: "finite", quantity: 100 },
    product: "prod_H4Ptqwf2kAV3kg",
  },
  function (err, sku) {
    console.log("Error", err, "SKU", sku);
  }
);
