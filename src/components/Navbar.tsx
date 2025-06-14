import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="border flex justify-between p-4">
      <h1>ND Test</h1>
      <ul className="border flex w-[50%] sm:w-[30%] md:w-[200px] justify-around ">
        <Link to="">Test</Link>
        <Link to="play">Play</Link>
      </ul>
    </div>
  );
};

export default Navbar;
