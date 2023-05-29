const ProductCart = () => {
  return (
    <div className="checkout-right">
      <h4>
        Your shopping cart contains: <span>3 Products</span>
      </h4>
      <table className="timetable_sub">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Product</th>
            <th>Quality</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="rem1">
            <td className="invert">1</td>
            <td className="invert-image">
              <a href="single.html">
                <img
                  src="./src/images/s1.jpg"
                  alt=" "
                  className="img-responsive"
                />
              </a>
            </td>
            <td className="invert">
              <div className="quantity">
                <div className="quantity-select">
                  <div className="entry value-minus">&nbsp;</div>
                  <div className="entry value">
                    <span>1</span>
                  </div>
                  <div className="entry value-plus active">&nbsp;</div>
                </div>
              </div>
            </td>
            <td className="invert">Bella Toes</td>
            <td className="invert">$675.00</td>
            <td className="invert">
              <div className="rem">
                <div className="close1"> </div>
              </div>
            </td>
          </tr>
          <tr className="rem1">
            <td className="invert">1</td>
            <td className="invert-image">
              <a href="single.html">
                <img
                  src="./src/images/s1.jpg"
                  alt=" "
                  className="img-responsive"
                />
              </a>
            </td>
            <td className="invert">
              <div className="quantity">
                <div className="quantity-select">
                  <div className="entry value-minus">&nbsp;</div>
                  <div className="entry value">
                    <span>1</span>
                  </div>
                  <div className="entry value-plus active">&nbsp;</div>
                </div>
              </div>
            </td>
            <td className="invert">Bella Toes</td>
            <td className="invert">$675.00</td>
            <td className="invert">
              <div className="rem">
                <div className="close1"> </div>
              </div>
            </td>
          </tr>
          <tr className="rem1">
            <td className="invert">1</td>
            <td className="invert-image">
              <a href="single.html">
                <img
                  src="./src/images/s1.jpg"
                  alt=" "
                  className="img-responsive"
                />
              </a>
            </td>
            <td className="invert">
              <div className="quantity">
                <div className="quantity-select">
                  <div className="entry value-minus">&nbsp;</div>
                  <div className="entry value">
                    <span>1</span>
                  </div>
                  <div className="entry value-plus active">&nbsp;</div>
                </div>
              </div>
            </td>
            <td className="invert">Bella Toes</td>
            <td className="invert">$675.00</td>
            <td className="invert">
              <div className="rem">
                <div className="close1"> </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;
