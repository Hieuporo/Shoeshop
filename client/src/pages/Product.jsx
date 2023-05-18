import Footer from "../components/Footer";
import PriceRange from "../components/PriceRange";
import Star from "../components/Star";

const Product = () => {
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
              <li>Shop</li>
            </ul>
          </div>
        </div>
        {/* //banner_inner */}
      </div>
      {/* //banner */}
      {/* top Products */}
      <div className="ads-grid_shop">
        <div className="shop_inner_inf">
          {/* tittle heading */}
          {/* //tittle heading */}
          {/* product left */}
          <div className="side-bar col-md-3">
            <div className="search-hotel">
              <h3 className="agileits-sear-head">Search Here..</h3>

              <form action="#" method="post">
                <input
                  type="search"
                  placeholder="Product name..."
                  name="search"
                  required=""
                />
              </form>
              <button
                style={{
                  backgroundColor: "#87CEFA",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "10px",
                  fontSize: "18px",
                }}
              >
                Search
              </button>
            </div>

            {/* price range */}
            <div className="range">
              <PriceRange />
            </div>
            {/* //price range */}
            {/*preference */}
            <div className="left-side">
              <h3 className="agileits-sear-head">Occasion</h3>
              <ul>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Casuals</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Party</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Wedding</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Ethnic</span>
                </li>
              </ul>
            </div>
            {/* // preference */}
            {/* discounts */}
            <div className="left-side">
              <h3 className="agileits-sear-head">Discount</h3>
              <ul>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">5% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">10% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">20% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">30% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">50% or More</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">60% or More</span>
                </li>
              </ul>
            </div>
            <div className="deal-leftmk left-side">
              <h3 className="agileits-sear-head">Special Deals</h3>
              <div className="special-sec1">
                <div className="col-xs-4 img-deals">
                  <img src="./src/images/s4.jpg" alt="" />
                </div>
                <div className="col-xs-8 img-deal1">
                  <h3>Shuberry Heels</h3>
                  <a href="single.html">$180.00</a>
                </div>
                <div className="clearfix" />
              </div>
              <div className="special-sec1">
                <div className="col-xs-4 img-deals">
                  <img src="./src/images/s2.jpg" alt="" />
                </div>
                <div className="col-xs-8 img-deal1">
                  <h3>Chikku Loafers</h3>
                  <a href="single.html">$99.00</a>
                </div>
                <div className="clearfix" />
              </div>
              <div className="special-sec1">
                <div className="col-xs-4 img-deals">
                  <img src="./src/images/s1.jpg" alt="" />
                </div>
                <div className="col-xs-8 img-deal1">
                  <h3>Bella Toes</h3>
                  <a href="single.html">$165.00</a>
                </div>
                <div className="clearfix" />
              </div>
              <div className="special-sec1">
                <div className="col-xs-4 img-deals">
                  <img src="./src/images/s5.jpg" alt="" />
                </div>
                <div className="col-xs-8 img-deal1">
                  <h3>Red Bellies</h3>
                  <a href="single.html">$225.00</a>
                </div>
                <div className="clearfix" />
              </div>
              <div className="special-sec1">
                <div className="col-xs-4 img-deals">
                  <img src="./src/images/s3.jpg" alt="" />
                </div>
                <div className="col-xs-8 img-deal1">
                  <h3>(SRV) Sneakers</h3>
                  <a href="single.html">$169.00</a>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            {/* //deals */}
          </div>
          {/* //product left */}
          {/* product right */}
          <div className="left-ads-display col-md-9">
            <div className="wrapper_top_shop">
              <div className="col-md-6 shop_left">
                <img src="./src/images/banner3.jpg" alt="" />
                <h6>40% off</h6>
              </div>
              <div className="col-md-6 shop_right">
                <img src="./src/images/banner2.jpg" alt="" />
                <h6>50% off</h6>
              </div>
              <div className="clearfix" />
              {/* product-sec1 */}
              <div className="product-sec1">
                {/*/mens*/}
                <div className="col-md-4 product-men">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s1.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Bella Toes </a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div style={{ display: "flex" }}>
                                <span className="money ">$675.00</span>
                                <Star rating={4} />
                              </div>
                            </div>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Bella Toes"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={675.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                  style={{ marginTop: "3px" }}
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s2.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Chikku Loafers </a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$405.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Chikku Loafers"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={405.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s3.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">(SRV) Sneakers </a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$375.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="(SRV) Sneakers"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={375.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* //mens */}
                {/* /womens */}
                <div className="col-md-4 product-men women_two">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s4.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Shuberry Heels </a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$575.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Shuberry Heels"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={575.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men women_two">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s5.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Red Bellies </a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$325.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Red Bellies"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={325.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men women_two">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s6.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Catwalk Flats</a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$425.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Catwalk Flats"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={425.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* //womens */}
                {/* /mens */}
                <div className="col-md-4 product-men">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s7.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Running Shoes</a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$875.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Running Shoes"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={875.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s8.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Sukun Casuals</a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$505.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Sukun Casuals"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={505.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="product-shoe-info shoe">
                    <div className="men-pro-item">
                      <div className="men-thumb-item">
                        <img src="./src/images/s9.jpg" alt="" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a
                              href="single.html"
                              className="link-product-add-cart"
                            >
                              Quick View
                            </a>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="single.html">Bank Sneakers</a>
                        </h4>
                        <div className="info-product-price">
                          <div className="grid_meta">
                            <div className="product_price">
                              <div className="grid-price ">
                                <span className="money ">$635.00</span>
                              </div>
                            </div>
                            <ul className="stars">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shoe single-item hvr-outline-out">
                            <form action="#" method="post">
                              <input
                                type="hidden"
                                name="cmd"
                                defaultValue="_cart"
                              />
                              <input
                                type="hidden"
                                name="add"
                                defaultValue={1}
                              />
                              <input
                                type="hidden"
                                name="shoe_item"
                                defaultValue="Bank Sneakers"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                defaultValue={635.0}
                              />
                              <button
                                type="submit"
                                className="shoe-cart pshoe-cart"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                              </button>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#myModal1"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* //mens */}
                <div className="clearfix" />
              </div>
              {/* //product-sec1 */}
              <div className="col-md-6 shop_left shp">
                <img src="./src/images/banner4.jpg" alt="" />
                <h6>21% off</h6>
              </div>
              <div className="col-md-6 shop_right shp">
                <img src="./src/images/banner1.jpg" alt="" />
                <h6>31% off</h6>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //top products */}
      <div className="mid_slider_w3lsagile">
        <div className="col-md-3 mid_slider_text">
          <h5>Some More Shoes</h5>
        </div>
        <div className="col-md-9 mid_slider_info">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
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
      {/* //footer */}
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

export default Product;
