import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeContext from "./components/ThemeContext";
import ClickedItem from "./components/ClickedItem";
import Review from "./components/UserReview";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import OrderTracking from "./components/OrderTracking";


function App() {
  const[addItemToCart,setAddItemToCart]=useState([]);
  const [orderHistory,setOrderHistory]=useState([]);
  const [totalPrice,setTotalPrice]=useState();
  
  const [checked, setChecked] = React.useState(true);


  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <div className="App">
      <ThemeContext.Provider value={{ checked, setChecked }}>
        <ThemeProvider theme={checked ? darkTheme : lightTheme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/" element={<SignIn />} />
              <Route path="/Cart" element={<Cart addItemToCart={addItemToCart} setAddItemToCart={setAddItemToCart} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>}/>
              <Route path="/ClickedItem/:id" element={<ClickedItem addItemToCart={addItemToCart} setAddItemToCart={setAddItemToCart}/>}/>
              <Route path="/Review" element={<Review />}/>
              <Route path='/Checkout' element={<Checkout addItemToCart={addItemToCart} setAddItemToCart={setAddItemToCart} setOrderHistory={setOrderHistory}  orderHistory={orderHistory} totalPrice={totalPrice}/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/OrderTracking' element={<OrderTracking orderHistory={orderHistory}/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
