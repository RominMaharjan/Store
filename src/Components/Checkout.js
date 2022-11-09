import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./checkout.css";
import toast from "react-hot-toast";
import { axiosClient } from "../Components/Axios";


function Checkout({ apiCart, increment, decrement, removeItem, token, cartDetails }) {
  const DeliveryURL = "/api/v4/delivery-address"
  const {
    register,
    handleSubmit,
    resetField,
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    console.log(data);

    const setDeliveryAddress = async () => {
      try {
        await axiosClient.post(DeliveryURL, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Submission success");
      } catch (error) {
        console.log(error);
        toast.error(`Error : ${error.response.data.errors[0].message}`);
      }
    };

    setDeliveryAddress();

    resetField("title");
    resetField("latitude");
    resetField("longitude");
  };

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
            <li>Checkout</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <div className="w3l_banner_nav_right">
          {/* <!-- about --> */}
          <div className="privacy about">
            <h3>
              Chec<span>kout</span>
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
                  <div className="cartItems mb-3">
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
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                  <hr />
                </>
              );
            })}
            {apiCart.length > 0 && (
              <>
                <div>
                  <p className="total">
                    <strong>Total : {cartDetails.total}</strong>
                  </p>
                </div>
              </>
            )}
            <div className="checkout-left">
              <div className="col-md-4 checkout-left-basket">
                <h4>Basket List</h4>
                <ul>
                  {apiCart.map((item) => {
                    return (
                      <>
                        <li>
                          {item.product.title} <i>-</i>{" "}
                          <span>{item.price} </span>
                        </li>
                      </>
                    );
                  })}
                  <li>
                    Total <i>-</i> <span>{cartDetails.total}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 address_form_agile">
                <h4>Add a new Details</h4>
                <form
                  onSubmit={handleSubmit(handleRegistration)}
                  action="#"
                  method="post"
                >
                  <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                    <div className="information-wrapper">
                      <div className="first-row form-group">
                        <div className="w3_agileits_card_number_grids">

                          <div className="w3_agileits_card_number_grid_right">
                            <div className="controls">
                              <label className="control-label">
                                latitude:{" "}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("latitude")}
                                placeholder="latitude"
                              />
                              <label className="control-label">
                                Longitude:{" "}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                {...register("longitude")}
                                placeholder="longitude"
                              />
                            </div>
                          </div>
                          <div className="clear"> </div>
                        </div>
                        <div className="controls">
                          <label className="control-label">
                            Address type:{" "}
                          </label>
                          <select
                            className="form-control place"
                            {...register("title")}
                          >

                            <option selected>Office</option>
                            <option>Home</option>
                            <option>Commercial</option>
                          </select>
                        </div>
                      </div>
                      <button className="submit check_out">
                        Delivery to this Address
                      </button>
                    </div>
                  </section>
                  <input hidden type="boolean" value={true}  {...register("isDefault")} />
                </form>

              </div>

              <div className="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //about --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner --> */}
      {/* <Footer/> */}
    </>
  );
}

export default Checkout;
