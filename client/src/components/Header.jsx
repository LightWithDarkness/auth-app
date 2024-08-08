import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-cyan-600 text-white flex justify-between items-center py-4 px-6">
      <h1 className="font-semibold text-2xl">
        <Link to="/">Auth App</Link>
      </h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
