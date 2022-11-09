import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerOptions } from "./formValidate";
import "./form.css";
import toast from "react-hot-toast";
import { axiosClient } from "./Axios";

function Mail() {
  const ContactUsURL =
    "/api/v4/contact-us";
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    console.log(data);
    const postContactUs = async () => {
      try {
        let response = await axiosClient.post(ContactUsURL, data);
        toast.success(`Success: ${response.data.data.success.message}`, {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "green",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      } catch (error) {
        console.log(error);
        toast.error(`Error: ${error.response.data.errors[0].message}`, {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "Red",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    };
    postContactUs();
    resetField("name");
    resetField("email");
    resetField("contact");
    resetField("subject");
    resetField("message");
  };
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Mail Us</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <div class="w3l_banner_nav_right">
          {/* <!-- mail --> */}
          <div class="mail">
            <h3>Mail Us</h3>
            <div class="agileinfo_mail_grids">
              <div class="col-md-4 agileinfo_mail_grid_left">
                <ul>
                  <li>
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </li>
                  <li>
                    address<span>Lalitpur, Nepal</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </li>
                  <li>
                    email
                    <span>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </li>
                  <li>
                    call to us<span>(+977) 9876543210</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-8 agileinfo_mail_grid_right">
                <form
                  action="#"
                  method="post"
                  onSubmit={handleSubmit(handleRegistration)}
                >
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      {...register("name", registerOptions.Name)}
                      placeholder="Full Name"
                      type="text"
                    />
                    {errors?.name && (
                      <span className="error-text">
                        {errors.name.message}
                      </span>
                    )}
                    {/* {errors.fullName && <span>*Full Name is required.</span>} */}
                    <input
                      className="email"
                      {...register("email", registerOptions.Email)}
                      placeholder="Email"
                      type="email"
                      defaultValue=""
                    />
                    {errors?.email && (
                      <span className="error-text">{errors.email.message}</span>
                    )}
                  </div>
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      {...register("contact", registerOptions.Telephone)}
                      placeholder="Mobile Number"
                      defaultValue=""
                      type="text"
                    />
                    {errors?.contact && (
                      <span className="error-text">
                        {errors.contact.message}
                      </span>
                    )}
                    <input
                      className="subject"
                      {...register("subject", registerOptions.Subject)}
                      type="text"
                      placeholder="Subject"
                    />

                    {errors?.subject && (
                      <span className="error-text">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                  <div class="clearfix"> </div>
                  <textarea
                    {...register("message")}
                    placeholder="Message"
                    defaultValue=""
                  />

                  <input type="submit" value="Submit" />
                  <input type="reset" value="Clear" />
                </form>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //mail --> */}
        </div>
        <div class="clearfix"></div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            title="Random Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Mail;
