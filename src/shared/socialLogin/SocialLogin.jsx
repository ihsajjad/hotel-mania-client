import { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    console.log("inside the handleGoogleLogin");
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex items-center justify-center space-x-2 my-2">
      <div
        onClick={handleGoogleLogin}
        className="rounded-full bg-[var(--main-color)] text-white p-2 text-xl hover:bg-transparent hover:text-[var(--main-color)] duration-500 border-2 border-[var(--main-color)]"
      >
        <FaGoogle />
      </div>
      <button className="rounded-full bg-[var(--main-color)] text-white p-2 text-xl hover:bg-transparent hover:text-[var(--main-color)] duration-500 border-2 border-[var(--main-color)]">
        <FaFacebookF />
      </button>
    </div>
  );
};

export default SocialLogin;
