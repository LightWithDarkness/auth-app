import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  start,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserSuccess,
  signOutUserFailure,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/user.slice.js";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const { currentUser, err, loading } = useSelector((state) => state.user);

  const handleUpdateUser = async (evt) => {
    evt.preventDefault();
    try {
      dispatch(start());
      setUpdateSuccess(false);

      const res = await fetch(`/api/v1/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(res)
      const data = await res.json();
      console.log(data);
      if (!data.success) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data.user));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  const handleDeleteUser = async () => {
    try {
      dispatch(start());
      const res = await fetch(`/api/v1/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess());
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  const handleSignOut = async () => {
    try {
      dispatch(start());
      const res = await fetch(`/api/v1/auth/signout/${currentUser._id}`, {
        method: "POST",
      });
      const data = await res.json();
      // console.log(data)
      if (!data.success) {
        dispatch(signOutUserFailure(data));
        return;
      }
      dispatch(signOutUserSuccess());
      navigate("/sign-in");
    } catch (error) {
      dispatch(signOutUserFailure(error));
    }
  };
  return (
    <div className="flex flex-col max-w-lg mx-auto p-4 my-5">
      <h1 className="font-semibold text-3xl text-center py-7">Profile</h1>
      <form onSubmit={handleUpdateUser} className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          defaultValue={currentUser.username}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(evt) =>
            setUserData({ ...userData, [evt.target.id]: evt.target.value })
          }
        />
        <input
          type="email"
          id="email"
          defaultValue={currentUser.email}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(evt) =>
            setUserData({ ...userData, [evt.target.id]: evt.target.value })
          }
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(evt) =>
            setUserData({ ...userData, [evt.target.id]: evt.target.value })
          }
        />
        <button className="bg-cyan-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-85">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          className="text-red-500 cursor-pointer"
          onClick={handleDeleteUser}
        >
          Delete Account
        </span>
        <span className="text-red-500 cursor-pointer" onClick={handleSignOut}>
          Sign out
        </span>
      </div>
      <p className="text-red-500 mt-5 self-center">
        {err && (err.message || "Something went wrong")}
      </p>
      <p className="text-green-500  self-center">
        {updateSuccess && "user updated successfully"}
      </p>
    </div>
  );
};
export default Profile;
