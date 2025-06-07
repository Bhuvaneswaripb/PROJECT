
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/add">Add Todo</Link>
      </nav>
    </div>
  );
}

export default Navbar