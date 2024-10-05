import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-cyan-500 text-white">
      <div className="flex flex-nowrap justify-between items-center py-4 px-6">
        <h1 className="font-semibold text-2xl">
          <Link to="/">Auth App</Link>
        </h1>
        <ul className="flex gap-4 items-center">
          <li className="hidden sm:inline">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {currentUser && currentUser.username ? (
              <Link to="/profile">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="w-7 h-7 rounded-full object-cover"
                />
              </Link>
            ) : (
              <Link to="/sign-in">Sign in</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
