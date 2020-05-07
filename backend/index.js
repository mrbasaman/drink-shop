const stripe = require("stripe")("sk_test_M0HANV8X1kduOp2SPNGVjwO400cl8RNeay");
const app = require("express")();

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // parse application/json (for body)
app.use(bodyParser.urlencoded({ extended: false })); // // parse application/x-www-form-urlencoded

// MIKHAIL, ALWAYS REMEMBER TO RESTART THE SERVER
// CHANGE, STOP, START AGAIN, TEST, REPEAT.
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/wait", function (req, res) {
  setTimeout(function () {
    res.send("Fuck you");
  }, 10000);
});

app.get("/products", async function (req, res) {
  console.log("- request received for products");
  try {
    // const productsObj = await stripe.products.list({ limit: 100 });
    // const skusObj = await stripe.skus.list({ limit: 100 });
    const [productsObj, skusObj] = await Promise.all([
      stripe.products.list({ limit: 100 }),
      stripe.skus.list({ limit: 100 }),
    ]);

    console.log(
      "- request success",
      productsObj.data.length,
      skusObj.data.length
    );

    const products = productsObj.data.map((product) => {
      const skus = skusObj.data.filter((sku) => {
        if (sku.product === product.id) return true;
        else return false;
      });
      return { ...product, skus: skus };
    });
    res.send(products);
  } catch (err) {
    console.log("- request errored", err);
    res.statusCode(500).send(err.toString());
  }
});

app.get("/product", function (req, res) {
  const id = req.query.id;
  console.log("id", id);

  stripe.products.retrieve(id, function (err, product) {
    console.log("Error", err, "Product", product);
    if (err) {
      console.log("- request errored", err);
      res.send(err.toString(), 500);
    } else {
      console.log("- request success", product);
      res.send(product);
    }
  });
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.get("/products-using-callback", function (req, res) {
  console.log("- request received for products");
  stripe.products.list({ limit: 100 }, function (err, products) {
    if (err) {
      console.log("- request errored", err);
      res.statusCode(500).send(err.toString());
    } else {
      // TO WORK ON LATER: use the SKUs here too
      console.log("- request success", products.data.length);
      res.send(products.data);
    }
  });
});

// app.post("/create-product", function (req, res) {
//   console.log("req to create product", req.body);

//   const productName = req.body.productName;

//   if (typeof productName !== "string" || productName === "") {
//     // throw the error
//     res.send("Please give me a valid product name, YOU BITCH.");
//   } else {
//     stripe.products.create(
//       {
//         name: productName,
//         type: "good",
//       },
//       function (err, product) {
//         console.log("request finished!");
//         if (err) {
//           res.send(`Could not create product ${err.toString()}`);
//         } else {
//           res.send(`Product created with name: ${productName}`);
//         }
//       }
//     );
//   }
// });

// app.post("/order", function (req, res) {
//   console.log("req to create order", req.body);
//   stripe.orders.create({
//     currency: "aud",
//     email: email,
//     items: [
//       {
//         type: "sku",
//         parent: "sku_H4QEi7tDVFoMUe",
//         quantity: 5,
//       },
//     ],
//     shipping: {
//       name: "MAnu gill",
//       address: {
//         line1: "12 martin street",
//         city: "Mos angeles",
//         state: "CA",
//         postal_code: "93434",
//         country: "AU",
//       },
//     },
//     function(err, order) {
//       console.log("request finished!");
//       res.send(`Product created with name: ${order}`);
//     },
//   });
// });

app.post("/customer", function (req, res) {
  console.log("req to create product", req.body);

  const fullName = req.body.fullName;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const line1 = req.body.addressLine;
  const city = req.body.addressCity;
  const state = req.body.addressState;
  const postal_code = req.body.addressPostCode;

  //   if (typeof customer !== "string" || customer === "") {
  //     // throw the error
  //     res.send("Please give me a valid product name, YOU BITCH.");
  //   } else {
  stripe.customers.create(
    {
      name: fullName,
      email: email,
      address: {
        line1: line1,
        city: city,
        postal_code: postal_code,
        state: state,
      },
      phone: phoneNumber,
    },
    function (err, customer) {
      console.log("request finished!");
      if (err) {
        res.send(`Could not create product ${err.toString()}`);
      } else {
        res.send(`Product created with name: ${customer}`);
      }
    }
  );
  //   }
});

app.listen(3001);
console.log("Server started on 3001...");
