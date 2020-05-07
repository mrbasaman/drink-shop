const stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.products.create(
  {
    name: "Grey goose",
    type: "good",
  },
  function (err, product) {
    console.log("Product", product, "Error", err);
  }
);
stripe.products.create(
  {
    name: "Stolichnaya",
    type: "good",
  },
  function (err, product) {
    console.log("Product", product, "Error", err);
  }
);

stripe.products.create(
  {
    name: "Absolut",
    type: "good",
  },
  function (err, product) {
    console.log("Product", product, "Error", err);
  }
);
