var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.products.retrieve("prod_H7sJTXLGlQ1pNn", function (err, product) {
  console.log("Error", err, "Product", product);
});
