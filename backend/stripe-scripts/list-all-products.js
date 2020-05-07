var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.products.list({ limit: 10 }, function (err, products) {
  console.log("Product", products, "Error", err);
});
