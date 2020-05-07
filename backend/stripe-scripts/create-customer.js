var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.customers.create(
  {
    name: " George",
    email: "1@1.gamil.com",
    address: {
      line1: " 123 george street",
      city: "Sydney",
      postal_code: "2000",
      state: "NSW",
    },
    phone: "0423745367",
  },
  function (err, customer) {
    console.log("Error", err, "Customer", customer);
  }
);
