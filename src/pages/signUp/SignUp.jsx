import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");

  const handleSignUp = () => {};
  return (
    <div className="hero min-h-screen bg-base-200 md:py-12 p-5">
      <div className="card md:w-2/4 w-full shadow-2xl bg-base-100 border-[var(--main-color)] border-2">
        <h2 className="text-3xl font-bold text-center mt-3">
          Please Register!
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password*</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url*</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <p className="label text-red-600">{error}</p>
          <div className="form-control mb-0">
            <button className="custom-btn-outline">Register</button>
          </div>
        </form>
        <div className="divider">OR</div>

        {/* Socials sign in including google */}

        <p className="text-center mb-4">
          Already have an account? please{" "}
          <Link to="/login" className="underline text-[var(--main-color)]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
