import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="w3l_banner_nav_right">
          {/* <!-- about --> */}
          <div className="privacy about">
            <h3>About Us</h3>
            <p className="animi">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <div className="agile_about_grids">
              <div className="col-md-6 agile_about_grid_right">
                <img
                  src="../Assets/images/31.jpg"
                  alt=" "
                  className="img-responsive"
                />
              </div>
              <div className="col-md-6 agile_about_grid_left">
                <ol>
                  <li>laborum et dolorum fuga</li>
                  <li>corrupti quos dolores et quas</li>
                  <li>est et expedita distinctio</li>
                  <li>deleniti atque corrupti quos</li>
                  <li>excepturi sint occaecati cupiditate</li>
                  <li>accusamus et iusto odio</li>
                </ol>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //about --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner -->
<!-- team --> */}
      <div className="team">
        <div className="container">
          <h3>Meet Our Amazing Team</h3>
          <div className="agileits_team_grids">
            <div className="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/32.jpg"
                alt=" "
                className="img-responsive"
              />
              <h4>Martin Paul</h4>
              <p>Manager</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <Link to="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/33.jpg"
                alt=" "
                className="img-responsive"
              />
              <h4>Michael Rick</h4>
              <p>Supervisor</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <Link to="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/34.jpg"
                alt=" "
                className="img-responsive"
              />
              <h4>Thomas Carl</h4>
              <p>Supervisor</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <Link to="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/35.jpg"
                alt=" "
                className="img-responsive"
              />
              <h4>Laura Lee</h4>
              <p>CEO</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <Link to="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- //team -->
<!-- testimonials --> */}
      <div className="testimonials">
        <div className="container">
          <h3>Testimonials</h3>
          <div className="w3_testimonials_grids">
            <div
              className="wmuSlider example1 animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <div className="wmuSliderWrapper">
                {/* <article style="position: absolute; width: 100%; opacity: 0;">  */}
                <article>
                  <div className="banner-wrap">
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Andrew Smith <span>Customer</span>
                      </h4>
                    </div>
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Thomson Richard <span>Customer</span>
                      </h4>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </article>
                {/* <article style="position: absolute; width: 100%; opacity: 0;">  */}
                <article>
                  <div className="banner-wrap">
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Crisp Kale <span>Customer</span>
                      </h4>
                    </div>
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        John Paul <span>Customer</span>
                      </h4>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </article>
                {/* <article style="position: absolute; width: 100%; opacity: 0;">  */}
                <article>
                  <div className="banner-wrap">
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Rosy Carl <span>Customer</span>
                      </h4>
                    </div>
                    <div className="col-md-6 w3_testimonials_grid">
                      <p>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Rockson Doe <span>Customer</span>
                      </h4>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </article>
              </div>
            </div>
            {/* <script src="js/jquery.wmuSlider.js"></script> 
					<script>
						$('.example1').wmuSlider();         
					</script>  */}
          </div>
        </div>
      </div>
      {/* <!-- //testimonials --> */}
      {/* <Footer/> */}
    </div>
  );
}

export default About;
