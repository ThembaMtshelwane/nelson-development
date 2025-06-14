import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 mb-4">
      <Link to="">
        <h1 className="text-2xl font-bold">ND Test</h1>
      </Link>

      <ul className=" flex w-[50%] sm:w-[30%] md:w-[200px] justify-around ">
        <NavLink
          to=""
          className={({ isActive }) =>
            `px-4 py-2 hover:underline ${
              isActive ? "text-blue-500 font-bold underline" : ""
            }`
          }
        >
          Test
        </NavLink>
        <NavLink
          to="play"
          className={({ isActive }) =>
            `px-4 py-2 hover:underline ${
              isActive ? "text-blue-500 font-bold underline" : ""
            }`
          }
        >
          Play
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
