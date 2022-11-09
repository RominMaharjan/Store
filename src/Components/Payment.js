import React from "react";
import Navbarleft from "./Navbarleft";
import { Link } from "react-router-dom";

function Payment() {
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
            <li>Payment</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <Navbarleft />
        <div className="w3l_banner_nav_right">
          {/* <!-- payment --> */}
          <div className="privacy about">
            <h3>
              Pay<span>ment</span>
            </h3>

            <div className="checkout-right">
              {/* <!--Horizontal Tab--> */}
              <div id="parentHorizontalTab">
                <ul className="resp-tabs-list hor_1">
                  <li>Cash on delivery (COD)</li>
                  <li>Debit/Credit</li>
                  <li>online banking</li>
                  <li>Paypal Account</li>
                </ul>
                <div className="resp-tabs-container hor_1">
                  <div>
                    <div className="vertical_post check_box_agile">
                      <h5>COD</h5>
                      <div className="checkbox">
                        <div className="check_box_one cashon_delivery">
                          <label className="anim">
                            <input type="checkbox" className="checkbox" />
                            <span>
                              {" "}
                              We also accept Credit/Debit card on delivery.
                              Please Check with the agent.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form
                      action="#"
                      method="post"
                      className="creditly-card-form agileinfo_form"
                    >
                      <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="credit-card-wrapper">
                          <div className="first-row form-group">
                            <div className="controls">
                              <label className="control-label">
                                Name on Card
                              </label>
                              <input
                                className="billing-address-name form-control"
                                type="text"
                                name="name"
                                placeholder="John Smith"
                              />
                            </div>
                            <div className="w3_agileits_card_number_grids">
                              <div className="w3_agileits_card_number_grid_left">
                                <div className="controls">
                                  <label className="control-label">
                                    Card Number
                                  </label>
                                  <input
                                    className="number credit-card-number form-control"
                                    type="text"
                                    name="number"
                                    inputmode="numeric"
                                    autocomplete="cc-number"
                                    autocompletetype="cc-number"
                                    x-autocompletetype="cc-number"
                                    placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;"
                                  />
                                </div>
                              </div>
                              <div className="w3_agileits_card_number_grid_right">
                                <div className="controls">
                                  <label className="control-label">CVV</label>
                                  <input
                                    className="security-code form-control"
                                    inputmode="numeric"
                                    type="text"
                                    name="security-code"
                                    placeholder="&#149;&#149;&#149;"
                                  />
                                </div>
                              </div>
                              <div className="clear"> </div>
                            </div>
                            <div className="controls">
                              <label className="control-label">
                                Expiration Date
                              </label>
                              <input
                                className="expiration-month-and-year form-control"
                                type="text"
                                name="expiration-month-and-year"
                                placeholder="MM / YY"
                              />
                            </div>
                          </div>
                          <button className="submit">
                            <span>Make a payment </span>
                          </button>
                        </div>
                      </section>
                    </form>
                  </div>
                  <div>
                    <div className="vertical_post">
                      <form action="#" method="post">
                        <h5>Select From Popular Banks</h5>
                        <div className="swit-radio">
                          <div className="check_box_one">
                            {" "}
                            <div className="radio_one">
                              {" "}
                              <label>
                                <input type="radio" name="radio" checked="" />
                                <i></i>Syndicate Bank
                              </label>{" "}
                            </div>
                          </div>
                          <div className="check_box_one">
                            {" "}
                            <div className="radio_one">
                              {" "}
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Bank of Baroda
                              </label>{" "}
                            </div>
                          </div>
                          <div className="check_box_one">
                            {" "}
                            <div className="radio_one">
                              {" "}
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Canara Bank
                              </label>{" "}
                            </div>
                          </div>
                          <div className="check_box_one">
                            {" "}
                            <div className="radio_one">
                              {" "}
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>ICICI Bank
                              </label>{" "}
                            </div>
                          </div>
                          <div className="check_box_one">
                            {" "}
                            <div className="radio_one">
                              {" "}
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>State Bank Of India
                              </label>{" "}
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <h5>Or SELECT OTHER BANK</h5>
                        <div className="section_room_pay">
                          <select className="year">
                            <option value="">=== Other Banks ===</option>
                            <option value="ALB-NA">
                              Allahabad Bank NetBanking
                            </option>
                            <option value="ADB-NA">Andhra Bank</option>
                            <option value="BBK-NA">
                              Bank of Bahrain and Kuwait NetBanking
                            </option>
                            <option value="BBC-NA">
                              Bank of Baroda Corporate NetBanking
                            </option>
                            <option value="BBR-NA">
                              Bank of Baroda Retail NetBanking
                            </option>
                            <option value="BOI-NA">
                              Bank of India NetBanking
                            </option>
                            <option value="BOM-NA">
                              Bank of Maharashtra NetBanking
                            </option>
                            <option value="CSB-NA">
                              Catholic Syrian Bank NetBanking
                            </option>
                            <option value="CBI-NA">
                              Central Bank of India
                            </option>
                            <option value="CUB-NA">
                              City Union Bank NetBanking
                            </option>
                            <option value="CRP-NA">Corporation Bank</option>
                            <option value="DBK-NA">
                              Deutsche Bank NetBanking
                            </option>
                            <option value="DCB-NA">
                              Development Credit Bank
                            </option>
                            <option value="DC2-NA">
                              Development Credit Bank - Corporate
                            </option>
                            <option value="DLB-NA">
                              Dhanlaxmi Bank NetBanking
                            </option>
                            <option value="FBK-NA">
                              Federal Bank NetBanking
                            </option>
                            <option value="IDS-NA">
                              Indusind Bank NetBanking
                            </option>
                            <option value="IOB-NA">Indian Overseas Bank</option>
                            <option value="ING-NA">
                              ING Vysya Bank (now Kotak)
                            </option>
                            <option value="JKB-NA">
                              Jammu and Kashmir NetBanking
                            </option>
                            <option value="JSB-NA">
                              Janata Sahakari Bank Limited
                            </option>
                            <option value="KBL-NA">
                              Karnataka Bank NetBanking
                            </option>
                            <option value="KVB-NA">
                              Karur Vysya Bank NetBanking
                            </option>
                            <option value="LVR-NA">
                              Lakshmi Vilas Bank NetBanking
                            </option>
                            <option value="OBC-NA">
                              Oriental Bank of Commerce NetBanking
                            </option>
                            <option value="CPN-NA">
                              PNB Corporate NetBanking
                            </option>
                            <option value="PNB-NA">PNB NetBanking</option>
                            <option value="RSD-DIRECT">
                              Rajasthan State Co-operative Bank-Debit Card
                            </option>
                            <option value="RBS-NA">
                              RBS (The Royal Bank of Scotland)
                            </option>
                            <option value="SWB-NA">
                              Saraswat Bank NetBanking
                            </option>
                            <option value="SBJ-NA">
                              SB Bikaner and Jaipur NetBanking
                            </option>
                            <option value="SBH-NA">
                              SB Hyderabad NetBanking
                            </option>
                            <option value="SBM-NA">SB Mysore NetBanking</option>
                            <option value="SBT-NA">
                              SB Travancore NetBanking
                            </option>
                            <option value="SVC-NA">
                              Shamrao Vitthal Co-operative Bank
                            </option>
                            <option value="SIB-NA">
                              South Indian Bank NetBanking
                            </option>
                            <option value="SBP-NA">
                              State Bank of Patiala NetBanking
                            </option>
                            <option value="SYD-NA">
                              Syndicate Bank NetBanking
                            </option>
                            <option value="TNC-NA">
                              Tamil Nadu State Co-operative Bank NetBanking
                            </option>
                            <option value="UCO-NA">UCO Bank NetBanking</option>
                            <option value="UBI-NA">
                              Union Bank NetBanking
                            </option>
                            <option value="UNI-NA">
                              United Bank of India NetBanking
                            </option>
                            <option value="VJB-NA">
                              Vijaya Bank NetBanking
                            </option>
                          </select>
                        </div>
                        <input type="submit" value="PAY NOW" />
                      </form>
                    </div>
                  </div>
                  <div>
                    {/* <div id="tab4" className="tab-grid" style="display: block;"> */}
                    <div id="tab4" className="tab-grid">
                      <div className="row">
                        <div className="col-md-6">
                          <form className="cc-form">
                            <div className="clearfix">
                              <div className="form-group form-group-cc-number">
                                <label>Card Number</label>
                                <input
                                  className="form-control"
                                  placeholder="xxxx xxxx xxxx xxxx"
                                  type="text"
                                />
                                <span className="cc-card-icon"></span>
                              </div>
                              <div className="form-group form-group-cc-cvc">
                                <label>CVV</label>
                                <input
                                  className="form-control"
                                  placeholder="xxxx"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="form-group form-group-cc-name">
                                <label>Card Holder Name</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group form-group-cc-date">
                                <label>Valid Thru</label>
                                <input
                                  className="form-control"
                                  placeholder="mm/yy"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="checkbox checkbox-small">
                              <label>
                                <input
                                  className="i-check"
                                  type="checkbox"
                                  checked=""
                                />
                                Add to My Cards
                              </label>
                            </div>
                            <input
                              className="btn btn-primary submit"
                              type="submit"
                              classNameName="submit"
                              value="Proceed Payment"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Plug-in Initialisation--> */}

              {/* <!-- // Pay --> */}
            </div>
          </div>
          {/* <!-- //payment --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner --> */}

      {/* <Footer/> */}
    </>
  );
}

export default Payment;
