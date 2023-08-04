import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSignIn = () => {};
  return (
    <div className="hero min-h-screen bg-base-200 md:py-12 py-5">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 border-[var(--main-color)] border-2">
        <form onSubmit={handleSignIn} className="card-body">
          <h2 className="text-3xl font-bold text-center">Please Login!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={`${show ? "password" : "text"}`}
              name="password"
              placeholder="password"
              className="input input-bordered"
            />

            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 top-[52px] text-xl"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <p className="label text-red-600">{error}</p>
          </div>
          <div className="form-control">
            <button type="sumit" className="custom-btn-outline">
              Login
            </button>
          </div>
        </form>

        <div className="divider">OR</div>

        <p className="text-center mb-4">
          New to SC360? please{" "}
          <Link to="/sign-up" className="underline text-[var(--main-color)]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
