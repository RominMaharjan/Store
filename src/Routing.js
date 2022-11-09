import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Components/Main";
import React from "react";
import About from "./Components/About";
import Checkout from "./Components/Checkout";
import Events from "./Components/Events";
import Faqs from "./Components/Faqs";
import Login from "./Components/Login";
import Mail from "./Components/Mail";
import Payment from "./Components/Payment";
import Privacy from "./Components/Privacy";
import Services from "./Components/Services";
import Single from "./Components/Single";
import Errorpage from "./Components/Errorpage";
import ForgotPassword from "./Components/ForgotPassword";
import Cart from "./Components/Cart";
import ResetPassword from "./Components/ResetPassword";
import UserProfile from "./Components/UserProfile";
import toast from "react-hot-toast";
import Categories from "./Components/Categories";
import Search from "./Components/Search";
import Products from "./Components/Products";
import { axiosClient } from "./Components/Axios";

function Routing({ searchData }) {
  const [productDetailsData, setproductDetailsData] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);
  const [apiCart, setapiCart] = useState([]);
  const [bool, setBool] = useState(false);
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  let productURL = `/api/v4/product?allProduct=1`;
  let addToCartURL = `/api/v4/cart-product`;
  let getCartURL = `/api/v4/cart`;
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  });

  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axiosClient.get(productURL);
        setProductList(response.data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getAllProducts();
  }, []);


  const filteredSearch =
    searchData.length < 0 ? (
      <div>No Items </div>
    ) : (
      productList.filter((product) => {
        return product.title.toLowerCase().includes(searchData.search);
      })
    );

  const addToCartItems = async (cartData) => {
    const config = {
      productId: cartData.id,
      priceId: cartData.unitPrice[0].id,
      quantity: cartData.orderedQuantity,
      note: "testing",
    };
    try {
      let response = await axiosClient.post(addToCartURL, config, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setBool(!bool);
      
      }
    } catch (error) {
      console.log(error);
    }
  };


  const getCartItemsAPI = async () => {
    try {
      let response = await axiosClient.get(getCartURL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setapiCart(response.data.data.cartProducts);
      setCartDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      getCartItemsAPI();
    }
  }, [bool, token]);


  const deleteCartItems = async (data) => {
    let deleteURL = `api/v4/cart-product/${data}`;
    try {
      await axiosClient.delete(deleteURL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBool(!bool);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = async (id, quantity) => {
    let updateURL = `/api/v4/cart-product/${id}`;
    const data = {
      quantity: quantity,
      note: "updated",
    };
    try {
      await axiosClient.patch(updateURL, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBool(!bool);
    } catch (error) {
      console.log(error);
    }
  };


  const getProductDetails = (productDetail) => {
    setproductDetailsData(productDetail);
    navigate("/productDetails");
  };

 
  const addToCart = (data) => {
    if (token) {
      const exist = apiCart.find((item) => {
        return item.product.id === data.id;
      });

      if (exist) {
        toast.error("Selected item already exist.");
      } else {
        toast.success("Selected item is added to the Cart.");
        const addItemToCartApi = { ...data, orderedQuantity: 1 };
        console.log("addItemToCartApi", addItemToCartApi);
        addToCartItems(addItemToCartApi);
      }
    } else {
      toast.error("Please login or signup to add products to cart.");
      navigate("/login");
    }
  };

  const increment = (id, quantity) => {
    updateCart(id, quantity + 1);
  };

  const decrement = (id, quantity) => {
    if (quantity !== 1) {
      updateCart(id, quantity - 1);
    }
  };

  const removeItem = (id) => {
    deleteCartItems(id);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Main
            addToCart={addToCart}
            productList={productList}
            getProductDetails={getProductDetails}
          />
        }
      />

      {/* Static Routes */}
      <Route path="About" element={<About />} />
      <Route path="Events" element={<Events />} />
      <Route path="Faqs" element={<Faqs />} />
      <Route path="Privacy" element={<Privacy />} />
      <Route path="Services" element={<Services />} />

      {/* Dynamic Routes */}
      <Route
        exact
        path="category/:categoryslug"
        element={
          <Categories
            addToCart={addToCart}
            getProductDetails={getProductDetails}
            productList={productList}
          />
        }
      />

      {/* Route To get Single product Details */}
      <Route
         path="productDetails"
        element={
          <Single
            productDetailsData={productDetailsData}
            addToCart={addToCart}
          />
        }
      />

      <Route
        path="cart"
        element={
          <Cart
            apiCart={apiCart}
            cartDetails={cartDetails}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            token={token}
          />
        }
      />

      <Route
        path="checkout"
        element={
          <Checkout
            token={token}
            setToken={setToken}
            apiCart={apiCart}
            cartDetails={cartDetails}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
          />
        }
      />

      {/* auth Route */}
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Login />} />
      <Route path="ForgetPassword" element={<ForgotPassword />} />
      <Route path="ResetPassword" element={<ResetPassword />} />

      <Route
        path="products"
        element={
          <Products
            productList={productList}
            addToCart={addToCart}
            getProductDetails={getProductDetails}
          />
        }
      />

      <Route
        path="search"
        element={
          <Search
            addToCart={addToCart}
            filteredSearch={filteredSearch}
            searchData={searchData}
            getProductDetails={getProductDetails}
          />
        }
      />
      <Route path="contact" element={<Mail />} />
      <Route path="payment" element={<Payment />} />

      <Route path="profile" element={<UserProfile token={token} />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default Routing;
