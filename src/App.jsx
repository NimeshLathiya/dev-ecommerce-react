import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
import Product from "./Components/ProductList/Product";
import SingleProduct from "./Components/ProductList/SingleProduct";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/AboutPage/About";
import Error from "./Components/404_Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import DevStore from "./Components/DevStore/DevStore";
import ShoppingCart from "./Components/ProductList/ShoppingCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Components/Contact Page/Contact";
import GoToCheckout from "./Components/GoToCheckout/GoToCheckout";
import GoToTop from "./Components/GoToTop/GoToTop";

function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = () => {
    const itemExists = cart.some((item) => item.id === data.id);

    if (itemExists) {
      toast.error("This item is already in your cart.");
      return;
    }

    setCart([...cart, { ...data, quantity: 1 }]);
    toast.success("Item added to cart.");
  };

  const handleRemoveItem = (itemId) => {
    const filteredData = cart.filter((item) => item.id !== itemId);
    if (filteredData.length === cart.length) {
      toast.error("Failed to remove item.");
    } else {
      setCart(filteredData);
      toast.success("Item removed from cart.");
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavbarHeader count={cart.length} ShoppingCart={<ShoppingCart />} />

        <Routes>
          <Route index element={<DevStore />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/devStore" element={<DevStore />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/goToCheckout" element={<GoToCheckout />} />
          <Route
            path="/products/:id"
            element={
              <SingleProduct
                AddToCart={AddToCart}
                ToastContainer={ToastContainer}
                toast={toast}
              />
            }
          />
          <Route
            path="/shoppingCart/:id"
            element={
              <ShoppingCart
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                count={cart.length}
                ToastContainer={<ToastContainer />}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
