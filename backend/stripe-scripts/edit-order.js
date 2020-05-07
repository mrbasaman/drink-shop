const stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.orders.update(
  "or_1GYsW4KJtqQ2luXanVMizuwr",
  {
    status: "canceled",
  },
  function (err, order) {
    console.log("Order", order, "Error", err);
  }
);

stripe.orders.update(
  "or_1GYsW3KJtqQ2luXa02iY4psa",
  {
    status: "canceled",
  },
  function (err, order) {
    console.log("Order", order, "Error", err);
  }
);

stripe.orders.update(
  "or_1GYsvvKJtqQ2luXaJHL12tgy",
  {
    status: "canceled",
  },
  function (err, order) {
    console.log("Order", order, "Error", err);
  }
);
