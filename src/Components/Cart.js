import React from "react";
import { Link } from "react-router-dom";
// import { axiosClient } from "../axios/Axios";
import "./cart.css";

function Cart({
  cartDetails,
  apiCart,
  increment,
  decrement,
  removeItem,
  token,
})
 
{
  // let params = useParams()

  // const singleProduct = async () => {
  //   try{
  //     let response = await axiosClient.get(`/api/v4/product/${params.id}`);
  //     console.log(response);
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  // console.log(singleProduct);

  return (
    <>
      {/* <Header/> */}
      {/* <!-- products-breadcrumb --> */}
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Cart Items</li>
          </ul>
        </div>
      </div>

      {token ? (
        <div className="banner">
          <div className="w3l_banner_nav_right">
            {/* <!-- about --> */}
            <div className="privacy about">
              <h3>
                Items available in Your <span>Cart</span>
              </h3>

              <div className="checkout-right">
                <h4>
                  Available items in your shopping cart:{" "}
                  <span>{apiCart.length} Products</span>
                </h4>
              </div>
              {apiCart.map((item, index) => {
                return (
                  <>
                    <div className="cartItems mb-3" key={item.id}>
                      <h4>{index + 1}</h4>
                      <span className="cartName">{item.product.title}</span>
                      <img
                        src={item.product.images[0].imageName}
                        alt=" "
                        className="cart-img"
                      />
                      <div className="qty">
                        <button
                          onClick={() => decrement(item.id, item.quantity)}
                          className="cartbtn btn btn-danger"
                          type="submit"
                        >
                          -
                        </button>

                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => increment(item.id, item.quantity)}
                          className="cartbtn btn btn-success"
                          type="submit"
                        >
                          +
                        </button>
                      </div>
                      <p className="price">{item.price}</p>
                      <button className = " btn btn-danger" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </div>
                    <hr />
                  </>
                );
              })}
              {apiCart.length > 0 && (
                <>
                  <div>
                    <p className="total">
                      <strong>Sub Total : {cartDetails.orderAmount}</strong>
                    </p>
                  </div>
                  <div>
                    <p className="total">
                      <strong>Discount : {cartDetails.discount}</strong>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="total">
                      <strong>Total : {cartDetails.total}</strong>
                    </p>
                  </div>
                  <div className="checkoutBtn">
                    <Link to="/checkout">
                      <button type="button" className="btn btn-danger">
                        Proceed to Checkout---
                      </button>
                    </Link>
                  </div>
                </>
              )}

              <div className="checkout-left">
                <div className="clearfix"> </div>
              </div>
            </div>
            {/* <!-- //about --> */}
          </div>
          <div className="clearfix"></div>
        </div>
      ) : (
        <div className="privacy about text-center">
          <h1>You must login to view your available items in cart</h1>
          <div className="clearfix"></div>
        </div>
      )}

      {/* <!-- //banner --> */}
      {/* <Footer/> */}
    </>
  );
}

export default Cart;
