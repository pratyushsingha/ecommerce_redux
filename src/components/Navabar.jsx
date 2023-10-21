import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to="/">
          <div className="ml-5">
            <p>Ecommerce App</p>
          </div>
        </Link>

        <div className="flex items-center font-medium mr-5 space-x-6">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/cart">
            <p>cart</p>
          </Link>
            <p>{cart.length}</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
