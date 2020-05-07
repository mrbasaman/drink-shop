import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Layout from "../src/Layout";
import Item from "../src/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (products.length > 0) return;

    async function getProducts() {
      const response = await fetch("http://localhost:3001/products");
      const products = await response.json();
      setProducts(products);
    }
    getProducts();
  });
  const classes = useStyles();

  if (products.length === 0) return <Layout>Loading products...</Layout>;

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6}>
              <Item {...product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export default Index;
