import "bootstrap/dist/js/bootstrap.min.js";
import "../css/font-awesome.css";

// Import Swiper styles
import "swiper/css";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="banner_top" id="home">
        <div className="wrapper_top_w3layouts">
          <div className="header_agileits">
            <div className="logo">
              <h1>
                <a className="navbar-brand" href="index.html">
                  <span>Downy</span> <i>Shoes</i>
                </a>
              </h1>
            </div>

            <div className="mobile-nav-button">
              <button id="trigger-overlay" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                  width="80%"
                  height="80%"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
            </div>
            <div className="top_nav_right">
              <div className="shoecart shoecart2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="display" defaultValue={1} />
                  <button
                    className="top_shoe_cart"
                    type="submit"
                    name="submit"
                    value=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="white"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="search_w3ls_agileinfo">
              <div className="cd-main-header">
                <ul className="cd-header-buttons">
                  <li>
                    <a className="cd-search-trigger" href="#cd-search">
                      {" "}
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
              <div id="cd-search" className="cd-search">
                <form action="#" method="post">
                  <input
                    name="Search"
                    type="search"
                    placeholder="Click enter after typing..."
                  />
                </form>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="slider">
            <div className="callbacks_container">
              <Slider />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <div className="grids_bottom">
        <div className="style-grids">
          <div className="col-md-6 style-grid style-grid-1">
            <img src="./src/images/b1.jpg" alt="shoe" />
          </div>
        </div>
        <div className="col-md-6 style-grid style-grid-2">
          <div className="style-image-1_info">
            <div className="style-grid-2-text_info">
              <h3>Nike DOWNSHIFTER</h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                maiores alias consequatur.sed quia non numquam eius modi tempora
                incidunt ut labore et dolore .
              </p>
              <div className="shop-button">
                <a href="shop.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="style-image-2">
            <img src="./src/images/b2.jpg" alt="shoe" />
            <div className="style-grid-2-text">
              <h3>Air force</h3>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="grids_sec_2">
        <div className="style-grids_main">
          <div className="col-md-6 grids_sec_2_left">
            <div className="grid_sec_info">
              <div className="style-grid-2-text_info">
                <h3>Sneakers</h3>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                  maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore .
                </p>
                <div className="shop-button">
                  <a href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="style-image-2">
              <img src="./src/images/b4.jpg" alt="shoe" />
              <div className="style-grid-2-text">
                <h3>Air force</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 grids_sec_2_left">
            <div className="style-image-2">
              <img src="./src/images/b3.jpg" alt="shoe" />
              <div className="style-grid-2-text">
                <h3>Air force</h3>
              </div>
            </div>
            <div className="grid_sec_info last">
              <div className="style-grid-2-text_info">
                <h3>Sneakers</h3>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                  maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore .
                </p>
                <div className="shop-button two">
                  <a href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="mid_slider_w3lsagile">
        <div className="col-md-3 mid_slider_text">
          <h5>Some More Shoes</h5>
        </div>
        <div className="col-md-9 mid_slider_info">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} className="" />
              <li data-target="#myCarousel" data-slide-to={2} className="" />
              <li data-target="#myCarousel" data-slide-to={3} className="" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g3.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g4.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g5.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g6.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g3.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g4.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g3.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g4.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="newsletter_w3layouts_agile row">
        <div className="col-sm-6 newsleft">
          <h3>Sign up for Newsletter !</h3>
        </div>
        <div className="col-sm-6 newsright">
          <form action="#" method="post">
            <input
              type="email"
              placeholder="Enter your email..."
              name="email"
              required=""
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
        <div className="clearfix" />
      </div>
      <Footer />
      <a
        href="#home"
        id="toTop"
        className="scroll"
        style={{ display: "block" }}
      >
        {" "}
        <span id="toTopHover" style={{ opacity: 1 }}>
          {" "}
        </span>
      </a>
    </div>
  );
};

export default Home;
