import { Link, useLocation } from "react-router";

const Output = () => {
  const location = useLocation();
  const { message } = location.state || {};
  return (
    <div>
      <p>{message}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Output;
