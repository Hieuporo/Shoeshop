import "../css/font-awesome.min.css";
import "../css/style1.css";

const Login = () => {
  return (
    <>
      <div className="w3l-signinform">
        {/* container */}
        <div className="wrapper">
          {/* main content */}
          <div className="w3l-form-info">
            <div className="w3_info">
              <h1>Welcome Back</h1>
              <p className="sub-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <h2>Log In</h2>
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email or Username"
                    required=""
                  />
                </div>
                <div className="input-group two-groop">
                  <input type="Password" placeholder="Password" required="" />
                </div>
                <div className="form-row bottom">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="remenber"
                      name="remenber"
                      defaultValue="remenber"
                    />
                    <label htmlFor="remenber"> Remember me?</label>
                  </div>
                  <a href="#url" className="forgot">
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                  Log In
                </button>
              </form>
              <p className="account">
                Dont have an account? <a href="#register">Register</a>
              </p>
            </div>
          </div>
          {/* //main content */}
        </div>
        {/* //container */}
      </div>
    </>
  );
};

export default Login;
