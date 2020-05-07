var stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");

stripe.products.list({ limit: 99 }, function (err, productsObj) {
  // products // this is an array of objects, each object contains both the name and ID
  if (err) {
    console.log("err", err);
    return;
  }

  const products = productsObj.data;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === "Grey goose") {
      console.log("matched product", i, product.id, product.name);
      stripe.products.del(product.id, function (err, response) {
        if (err) {
          console.log("-- product delete err", product.id, err);
          return;
        }
        console.log("-- product deleted", product.id, response);
      });
      // WORK HERE
    } else {
      console.log("ignoring product", i, product.id, product.name);
    }
  }
});
