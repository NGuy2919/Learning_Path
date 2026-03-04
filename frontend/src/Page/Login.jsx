import "./Login.css";
import logo from "../Assets/logo.png";
import LoginPage from "../Assets/login-page.jpg";

function Login() {
  return (
    <div className="Login" style={{ backgroundImage: `url(${LoginPage})` }}>
      <div className="login">
        <img src={logo} alt="" />
        <h2>Login</h2>
        <br />
        <form className="form-login">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="input your username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="input your password"
          />
          <div className="forget-pass">
            <p>forget password</p>
            <a href="">click here!!</a>
          </div>
          <div className="btn-login">
            <button type="submit">Login</button>
            <p>Don't have a account?<a href="">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
