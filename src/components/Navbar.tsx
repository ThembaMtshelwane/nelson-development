import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <Link to="">
        <h1 className="text-2xl font-bold">ND Test</h1>
      </Link>

      <ul className=" flex w-[50%] sm:w-[30%] md:w-[200px] justify-around ">
        <Link to="">Test</Link>
        <Link to="play">Play</Link>
      </ul>
    </div>
  );
};

export default Navbar;
