var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.skus.del("sku_H4Q9hMsZWJAw2O", function (err, confirmation) {
  console.log("Error", err, "Confirmation", confirmation);
});
