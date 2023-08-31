import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Products() {
  const [fetchDatas, setFetchData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtervalue, setfiltervalue] = useState("");

  useEffect(() => {
    const fetchDatafromapi = async () => {
      const geturlvalue = await fetch(
        `https://dummyjson.com/products/${filtervalue}`
      );
      const fetchData = await geturlvalue.json();

      setFetchData(fetchData.products);
    };
    fetchDatafromapi();
  }, [filtervalue]);

  useEffect(() => {
    const fetchDatafromapi = async () => {
      const geturlvalue = await fetch(
        `https://dummyjson.com/products/categories`
      );
      const fetchData = await geturlvalue.json();
      setCategories(fetchData);
    };
    fetchDatafromapi();
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          window.location.reload();
        }}
      >
        ALL
      </Button>
      {categories.map((category) => (
        <Button
          sx={{ m: 0.75 }}
          key={category}
          variant="contained"
          onClick={() => {
            setfiltervalue("category/" + category);
          }}
        >
          {" "}
          {category}
        </Button>
      ))}

      <Grid container
        spacing={2}
        sx={{ justifyContent: "center",alignItems:"center",display:"flex"}}
      >
        {fetchDatas.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{ justifyContent: "center",alignItems:"center",display:"flex"}}
          >
            <Link to={`/ClickedItem/${product.id}`}>
              <Card
                sx={{
                  height: 550,
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    width: "63%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    image={product.thumbnail}
                    component="img"
                    alt="no image preview"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h8">
                    <Typography>{product.title}</Typography>
                    <Typography>catregory:{product.category}</Typography>
                    <Typography>{product.description}</Typography>
                    <p>Price: ${product.price}</p>
                    <Button variant="contained">Add to cart</Button>
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Products;
