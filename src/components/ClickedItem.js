import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import ButtonAppBar from "../ButtonAppBar";

function ClickedItem({ addItemToCart, setAddItemToCart }) {
  const [singleProduct, setSingleProduct] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchDataOfSingleItem = async () => {
      try {
        const geturlvalue = await fetch(`https://dummyjson.com/products/${id}`);
        const fetchData = await geturlvalue.json();
        setSingleProduct(fetchData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataOfSingleItem();
  }, [id]);

  const addToCart = () => {
    if (addItemToCart.find((item) => item.id === id)) {
      alert("item already added to cart");
    } else {
      setAddItemToCart([
        ...addItemToCart,
        {
          id: id,
          title: singleProduct.title,
          price: singleProduct.price,
          image: singleProduct.thumbnail,
        },
      ]);
    }
  };

  return (
    <>
      <ButtonAppBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignProperty: "center",
          paddingTop: 40,
        }}
      >
        <Card
          sx={{
            maxWidth: 800,
            maxHeight: 800,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <CardMedia
            sx={{ height: 400 }}
            image={singleProduct.images ? singleProduct.images[0] : ""}
            component="img"
            title="green iguana"
            alt="no image preview"
          />
          <CardContent>
            <Typography gutterBottom variant="h8">
              <p>{singleProduct.title}</p>
              <p>catregory:{singleProduct.category}</p>
              <p>{singleProduct.description}</p>
              <Typography sx={{ textDecoration: "line-through" }}>
                Price: ${singleProduct.price}
              </Typography>
              Offer price: $
              {Math.floor(
                (singleProduct.price *
                  (100 - singleProduct.discountPercentage)) /
                  100
              )}
              <p />
              <Rating name="read-only" value={4} readOnly />
              <br></br>
              <Button variant="contained" onClick={addToCart}>
                Add to cart
              </Button>
              <br></br>
              <Link to="/Review" style={{ color: "blue", paddingLeft: 10 }}>
                {" "}
                review
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ClickedItem;
