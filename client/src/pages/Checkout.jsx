import "bootstrap/dist/js/bootstrap.min.js";
import "../css/font-awesome.css";
import "../css/checkout.css";
import Footer from "../components/Footer";
import ProductCart from "../components/ProductCart";
import OrderDetail from "../components/OrderDetail";
const Checkout = () => {
  return (
    <div>
      <div className="banner_top innerpage" id="home">
        <div className="wrapper_top_w3layouts">
          <div className="header_agileits">
            <div className="logo inner_page_log">
              <h1>
                <a className="navbar-brand" href="index.html">
                  <span>Downy</span> <i>Shoes</i>
                </a>
              </h1>
            </div>
            <div className="overlay overlay-contentpush">
              <button type="button" className="overlay-close">
                <i className="fa fa-times" aria-hidden="true" />
              </button>
              <nav>
                <ul>
                  <li>
                    <a href="index.html" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="404.html">Team</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop Now</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-nav-button">
              <button id="trigger-overlay" type="button">
                <i className="fa fa-bars" aria-hidden="true" />
              </button>
            </div>
            {/* cart details */}
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
                    <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* //cart details */}
        {/* search */}
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
        {/* //search */}
        <div className="clearfix" />
        {/* /banner_inner */}
        <div className="services-breadcrumb_w3ls_agileinfo">
          <div className="inner_breadcrumb_agileits_w3">
            <ul className="short">
              <li>
                <a href="index.html">Home</a>
                <i>|</i>
              </li>
              <li>Check Out</li>
            </ul>
          </div>
        </div>
        {/* //banner_inner */}
      </div>
      {/* //banner */}
      {/* top Products */}
      <div className="ads-grid_shop">
        <div className="shop_inner_inf">
          <div className="privacy about">
            <h3>
              Chec<span>kout</span>
            </h3>
            <ProductCart />
            <OrderDetail />
          </div>
        </div>
        {/* //top products */}
        <div className="mid_slider_w3lsagile">
          <div className="col-md-3 mid_slider_text">
            <h5>Some More Shoes</h5>
          </div>
          <div className="col-md-9 mid_slider_info">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="" />
                <li
                  data-target="#myCarousel"
                  data-slide-to={1}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={2} className="" />
                <li data-target="#myCarousel" data-slide-to={3} className="" />
              </ol>
              <div className="carousel-inner" role="listbox">
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
                <div className="item active">
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

              {/* The Modal */}
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        {/* /newsletter*/}
        <div className="newsletter_w3layouts_agile">
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
        {/* //newsletter*/}
        {/* footer */}
        <Footer />
      </div>
      {/* //footer */}
      <a
        href="#home"
        id="toTop"
        className="scroll"
        style={{ display: "block" }}
      >
        <span id="toTopHover" style={{ opacity: 1 }}></span>
      </a>
    </div>
  );
};

export default Checkout;
