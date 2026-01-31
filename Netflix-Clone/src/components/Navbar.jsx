import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-5 fixed w-full bg-black z-50">
      <Link to="/" className="text-red-600 text-2xl font-bold">NETFLIX</Link>
      <Link to="/mylist">My List</Link>
    </div>
  );
}

export default Navbar;

