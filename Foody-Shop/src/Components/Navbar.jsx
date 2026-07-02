import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar({
  cartCount = 0,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    navigate("/");
  };

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        CravHealthy
      </NavLink>

      <nav className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>

        <NavLink to="/cart" className="nav-link cart-link">
          Cart <span>{cartCount}</span>
        </NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className="nav-link nav-action">
              Login
            </NavLink>

            <NavLink to="/signin" className="nav-link nav-action">
              Signup
            </NavLink>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="nav-link nav-action"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;