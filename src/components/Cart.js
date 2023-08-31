  import React, { useState, useEffect } from "react";
  import Box from "@mui/material/Box";
  import Paper from "@mui/material/Paper";
  import { Button, Avatar, Typography } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import ButtonAppBar from "../ButtonAppBar";

  const MyComponent = ({
    addItemToCart,
    setAddItemToCart,
    setTotalPrice,
    totalPrice,
  }) => {
    const [quantity, setQuantity] = useState([1]);
    const navigate = useNavigate();

    const handleRemoveItem = (itemId) => {
      setAddItemToCart((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    };

    useEffect(() => {
      const calculatedTotalPrice = addItemToCart.reduce(
        (total, item) => total + item.price,
        0
      );
      setTotalPrice(calculatedTotalPrice);
    }, [addItemToCart]);

    const handleNavigate = () => {
      if (addItemToCart.length >= 1) {
        navigate("/Checkout");
      } else {
        alert("There are no items in the cart");
      }




    };
 

    return (
      <>
        <ButtonAppBar />
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {addItemToCart.map((cartItem) => (
            <div key={cartItem.id} style={{ flex: "0 0 300px", margin: "10px" }}>
              <Paper elevation={4} sx={{ padding: "10px", height: "100%" }}>
                <Avatar
                  src={cartItem.image}
                  alt="Item"
                  sx={{ width: 100, height: 100 }}
                />
                <div>
                  <Typography variant="body1">Item: {cartItem.title}</Typography>
                  <Typography variant="body1">
                    Price: ${cartItem.price*quantity}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  onClick={() => handleRemoveItem(cartItem.id)}
                >
                  Remove
                </Button>
                <br></br>
                <Button onClick={()=>{setQuantity(quantity-1)}}>-</Button>
                {quantity}
                <Button onClick={()=>{setQuantity(quantity+1)}}>+</Button>
              </Paper>
            </div>
          ))}
        </Box>
        <Typography variant="h6" color="error">
          Total price: ${totalPrice}
        </Typography>
        <Button variant="contained" onClick={handleNavigate}>
          Pay
        </Button>
      </>
    );
  };

  export default MyComponent;
