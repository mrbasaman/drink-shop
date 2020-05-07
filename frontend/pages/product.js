import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import Layout from "../src/Layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Index() {
  const router = useRouter();
  console.log("product id", router.query.id);
  const [product, setProduct] = useState();
  useEffect(() => {
    if (product !== undefined) return;

    async function getProduct() {
      const response = await fetch(
        `http://localhost:3001/product?id=${router.query.id}`
      );
      const product = await response.json();
      setProduct(product);
    }
    getProduct();
  });
  console.log("product", product);
  const classes = useStyles();

  const [quantity, setQuantity] = useState(1);

  if (product === undefined) return <Layout>Loading product...</Layout>;
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div>
              <img src={product.images[0]} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <TextField
                id="outlined-number"
                label="Quantity"
                type="number"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={quantity}
                onChange={(event) => {
                  const value = parseInt(event.target.value);
                  if (value < 1) return;
                  else setQuantity(value);
                }}
              />
              <Button variant="outlined" color="primary">
                Add to cart
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default Index;
