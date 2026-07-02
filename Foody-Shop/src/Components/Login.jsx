import "../Styles/Login.css";
import hero from "../assets/hero.jpeg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={hero} alt="Login" />
      </div>

      <div className="login-form">
        <h1>Login</h1>
        <p>Welcome Back</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="Submit-group">
            <button className="sign-in-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;