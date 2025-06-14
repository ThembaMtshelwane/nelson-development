import { Link, useLocation } from "react-router";

const OutputScreen = () => {
  const location = useLocation();
  const { message } = location.state || {};
  return (
    <div className=" px-4  w-full sm:w-[80%] ">
      <p>{message}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default OutputScreen;
