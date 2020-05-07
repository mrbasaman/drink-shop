var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.skus.list({ limit: 10 }, function (err, skus) {
  console.log("Error", err, "Skus", skus);
});
