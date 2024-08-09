import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


const SignUp = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const navigate = useNavigate()
 

  const handleInputChange = (e) => {
    const newUser = { ...user, [e.target.id]: e.target.value };
    setUser(newUser);
  };
  const submitUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setErr(null)
      const response = await fetch("api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log(data)
      if(!data.success){
        setLoading(false)
        setErr(data)
        return;
      }
      setLoading(false)
      navigate('/sign-in')

    } catch (error) {
      console.log(error)
      setLoading(false);
      setErr(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl my-7 text-center">Sign Up</h1>
      <form onSubmit={submitUser} className="flex flex-col gap-4">
        <input
          id="username"
          type="text"
          placeholder="username"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleInputChange}
        />
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
        
          {loading ? "processing..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <span className="text-cyan-700">
          <Link to="/sign-in">Sign In</Link>
        </span>
      </div>
      <p className="text-red-600 py-5">{err? err.message:""}</p>
    </div>
  );
};
export default SignUp;
