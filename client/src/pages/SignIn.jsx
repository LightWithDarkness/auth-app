import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  sigInFailure,
  sigInStart,
  sigInSuccess,
} from "../redux/user/user.slice";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const [user, setUser] = useState({});
  const {loading, err } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newUser = { ...user, [e.target.id]: e.target.value };
    setUser(newUser);
  };
  const submitUser = async (e) => {
    e.preventDefault();
    try {
      dispatch(sigInStart);
      const response = await fetch("api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      // console.log(data);
      if (!data.success) {
        dispatch(sigInFailure(data));
        return;
      }
      dispatch(sigInSuccess(data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(sigInFailure(error));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl my-8 text-center">Sign In</h1>
      <form onSubmit={submitUser} className="flex flex-col gap-5 pt-3">
        <input
          id="email"
          type="email"
          placeholder="email"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleInputChange}
        />
        <input
          id="password"
          type="text"
          placeholder="password"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleInputChange}
        />
        <button
          disabled={loading}
          className="bg-cyan-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-85"
        >
          {loading ? "processing..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <span className="text-cyan-700">
          <Link to="/sign-up">Sign Up</Link>
        </span>
      </div>
      <p className="text-red-600 py-5">{err ? err.message : ""}</p>
    </div>
  );
};
export default SignUp;
