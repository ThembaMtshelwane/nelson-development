import { Link, useLocation } from "react-router";

const OutputScreen = () => {
  const location = useLocation();
  const { message } = location.state || {};
  return (
    <div className=" px-4  w-full sm:w-[80%] flex flex-col gap-4">
      <h2 className="text-center text-4xl font-bold">Results</h2>
      <p>{message}</p>
      <Link
        to="/"
        className="border w-fit px-4 py-2 rounded-2xl hover:bg-[#DDE9F1] hover:text-[#161B24] cursor-pointer hover:scale-[1.01] font-bold "
      >
        Retun
      </Link>
    </div>
  );
};

export default OutputScreen;
