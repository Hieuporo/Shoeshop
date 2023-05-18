const OrderDetail = () => {
  return (
    <div className="checkout-left">
      <div className="col-md-4 checkout-left-basket">
        <h4>Continue to basket</h4>
        <ul>
          <li>
            Product1 <i>-</i> <span>$675.00 </span>
          </li>
          <li>
            Product2 <i>-</i> <span>$325.00 </span>
          </li>
          <li>
            Product3 <i>-</i> <span>$405.00 </span>
          </li>
          <li>
            Total Service Charges <i>-</i> <span>$55.00</span>
          </li>
          <li>
            Total <i>-</i> <span>$1405.00</span>
          </li>
        </ul>
      </div>
      <div className="col-md-8 address_form">
        <h4>Add a new Details</h4>
        <form
          action="payment.html"
          method="post"
          className="creditly-card-form agileinfo_form"
        >
          <section className="creditly-wrapper wrapper">
            <div className="information-wrapper">
              <div className="first-row form-group">
                <div className="controls">
                  <label className="control-label">Full name: </label>
                  <input
                    className="billing-address-name form-control"
                    type="text"
                    name="name"
                    placeholder="Full name"
                  />
                </div>
                <div className="card_number_grids">
                  <div className="card_number_grid_left">
                    <div className="controls">
                      <label className="control-label">Mobile number:</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>
                  <div className="card_number_grid_right">
                    <div className="controls">
                      <label className="control-label">Landmark: </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Landmark"
                      />
                    </div>
                  </div>
                  <div className="clear"> </div>
                </div>
                <div className="controls">
                  <label className="control-label">Town/City: </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Town/City"
                  />
                </div>
                <div className="controls">
                  <label className="control-label">Address type: </label>
                  <select className="form-control option-w3ls">
                    <option>Office</option>
                    <option>Home</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>
              <button
                className="submit check_out"
                style={{ marginBottom: "20px" }}
              >
                Delivery to this Address
              </button>
            </div>
          </section>
        </form>
      </div>
      <div className="clearfix"> </div>
      <div className="clearfix" />
    </div>
  );
};

export default OrderDetail;
