import "../css/style2.css";

const Register = () => {
  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          {/* Brand Box */}
          <div className="col-sm-6 brand">
            <a href="#" className="logo">
              MR <span>.HIEU</span>
            </a>
            <div className="heading">
              <h2>Hieu</h2>
              <p>Your Right Choice</p>
            </div>
            <div className="success-msg">
              <p>Great! You are one of our members now</p>
              <a href="#" className="profile">
                Your Profile
              </a>
            </div>
          </div>
          {/* Form Box */}
          <div className="col-sm-6 form">
            {/* End Login Form */}
            {/* Signup Form */}
            <div className="signup form-peice">
              <form className="signup-form" action="#" method="post">
                <div className="form-group">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    className="name"
                  />
                  <span className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    className="name"
                  />
                  <span className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Adderss</label>
                  <input
                    type="email"
                    name="emailAdress"
                    id="email"
                    className="email"
                  />
                  <span className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" name="phone" id="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="pass"
                  />
                  <span className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordCon">Confirm Password</label>
                  <input
                    type="password"
                    name="passwordCon"
                    id="passwordCon"
                    className="passConfirm"
                  />
                  <span className="error" />
                </div>
                <div className="CTA" style={{ paddingBottom: "20px" }}>
                  <input type="submit" defaultValue="Signup Now" id="submit" />
                  <a href="#" className="switch">
                    I have an account
                  </a>
                </div>
              </form>
            </div>
            {/* End Signup Form */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
