import Lottie from "lottie-react";
import animation from "../../assets/404.json";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const errorData = useRouteError();
  const { error } = errorData;
  console.log(errorData.status);
  return (
    <div className="h-screen w-screen">
      <Lottie animationData={animation} className="h-[80vh] w-full" />
      <div className="text-center">
        <p>{error?.message}</p>
        <p>
          Back to home <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
