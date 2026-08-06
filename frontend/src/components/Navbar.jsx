import { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, User } from "lucide-react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="top-strip">
        FREE SHIPPING ON ORDERS OVER ₹999 • USE CODE WELCOME10
      </div>

      <nav className="navbar">

        <Link to="/" className="logo">
          <div className="logo-box">N</div>
          <h2>NOVA</h2>
        </Link>

        <ul className="nav-links">
          <li><Link to="/products?tag=New">New</Link></li>
          <li><Link to="/products?gender=Men">Men</Link></li>
          <li><Link to="/products?gender=Women">Women</Link></li>
          <li className="sale"><Link to="/products?tag=Sale">Sale</Link></li>
        </ul>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
        </div>

        <div className="nav-actions">

          <Heart size={20} />

          <Link to="/login" className="login-btn">
            <User size={16} />
            Login
          </Link>

          <Link to="/cart" className="cart-icon">
            <ShoppingBag size={20} />
            <span className="cart-count">
              {cartItems?.length || 0}
            </span>
          </Link>

          {/* ✅ FIXED ADMIN BUTTON */}
          <Link to="/admin" className="admin-btn">
            Admin
          </Link>

        </div>

      </nav>
    </>
  );
};

export default Navbar;