var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.customers.list({ limit: 10 }, function (err, customer) {
  console.log("Customer", customer, "Error", err);
});
