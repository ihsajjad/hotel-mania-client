import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { logInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    setError("");
    logInUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200 md:py-12 py-5">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 border-[var(--main-color)] border-2">
        <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
          <h2 className="text-3xl font-bold text-center">Please Login!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500">Email is not valid</span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={`${show ? "password" : "text"}`}
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500">Password is not valid</span>
            )}

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
